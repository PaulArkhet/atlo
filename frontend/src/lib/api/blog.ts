import { Blog } from "../../../../schemas/blogs";
import { ArgumentTypes, client, ExtractData } from "./client";
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

type CreateBlogArgs = ArgumentTypes<
  typeof client.api.v0.blogs.$post
>[0]["json"];

type SerializedBlog = ExtractData<
  Awaited<ReturnType<typeof client.api.v0.blogs.$get>>
>["blogs"][number];

function mapSerializedBlogToSchema(SerializedBlog: SerializedBlog): Blog {
  return {
    ...SerializedBlog,
    createdAt: new Date(SerializedBlog.createdAt),
  };
}

async function createBlog(args: CreateBlogArgs) {
  console.log("creating Blog");
  const res = await client.api.v0.blogs.$post({ json: args });
  if (!res.ok) {
    console.log("Error creating Blog");
    throw new Error("Error creating Blog");
  }
  const result = await res.json();
  console.log("Parsed API Response:", result);
  return mapSerializedBlogToSchema(result.blog);
}

export const useCreateBlogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBlog,
    onSettled: (args) => {
      console.log(args);
      if (!args) return console.log(args, "create args, returning");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

async function getAllBlogs() {
  const res = await client.api.v0.blogs.$get();
  if (!res.ok) {
    throw new Error("Failed to get all Blogs");
  }
  const { blogs } = await res.json();
  return blogs.map(mapSerializedBlogToSchema);
}

export const getAllBlogsQueryOptions = queryOptions({
  queryKey: ["blogs"],
  queryFn: getAllBlogs,
});

async function getBlogById(BlogId: number) {
  const res = await client.api.v0.blogs[":blogId"].$get({
    param: { blogId: BlogId.toString() },
  });

  if (!res.ok) {
    throw new Error("Error getting Blog by id");
  }
  const { blog } = await res.json();
  return mapSerializedBlogToSchema(blog);
}

export const getBlogByIdQueryOptions = (BlogId: number) =>
  queryOptions({
    queryKey: ["Blogs", BlogId],
    queryFn: () => getBlogById(BlogId),
  });

async function deleteBlogById(BlogId: number) {
  const res = await client.api.v0.blogs[":blogId"].delete.$post({
    param: { blogId: BlogId.toString() },
  });
  if (!res.ok) {
    throw new Error("Error getting Blog by id");
  }
}

export const useDeleteBlogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlogById,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["Blogs"],
      });
    },
    onMutate: async (args) => {
      // Snapshot the previous value
      const previousBlogs = queryClient.getQueryData(["Blogs"]) as Blog[];

      const projToDeleteIndex = previousBlogs.findIndex(
        (blog) => blog.blogId === args
      );
      if (projToDeleteIndex === -1) return;

      const newBlogs = previousBlogs.toSpliced(projToDeleteIndex, 1);
      // Optimistically update to the new value
      queryClient.setQueryData(["Blogs"], newBlogs);

      // Return a context with the previous and new todo
      return { previousBlogs, newBlogs };
    },
    onError: (_err, _args, context) => {
      if (!context) return;
      queryClient.setQueryData(["Blogs"], context.previousBlogs);
    },
  });
};
