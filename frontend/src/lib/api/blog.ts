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

const updateFunc = client.api.v0.blogs[":blogId"].update.$post;

type UpdateBlogArgs = ArgumentTypes<typeof updateFunc>[0]["json"] & {
  blogId: number;
};

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
    queryKey: ["blogs", BlogId],
    queryFn: () => getBlogById(BlogId),
  });

async function deleteBlogById(BlogId: number) {
  const res = await client.api.v0.blogs[":blogId"].delete.$post({
    param: { blogId: BlogId.toString() },
  });
  if (!res.ok) {
    throw new Error("Error deleting blog by id");
  }
}

export const useDeleteBlogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBlogById,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onMutate: async (args) => {
      // Snapshot the previous value
      const previousBlogs = queryClient.getQueryData(["blogs"]) as Blog[];

      const blogToDeleteIndex = previousBlogs.findIndex(
        (blog) => blog.blogId === args
      );
      if (blogToDeleteIndex === -1) return;

      const newBlogs = previousBlogs.toSpliced(blogToDeleteIndex, 1);
      // Optimistically update to the new value
      queryClient.setQueryData(["blogs"], newBlogs);

      // Return a context with the previous and new todo
      return { previousBlogs, newBlogs };
    },
    onError: (_err, _args, context) => {
      if (!context) return;
      queryClient.setQueryData(["blogs"], context.previousBlogs);
    },
  });
};

async function updateBlog(args: UpdateBlogArgs) {
  const res = await client.api.v0.blogs[":blogId"].update.$post({
    param: { blogId: args.blogId.toString() },
    json: args,
  });
  if (!res.ok) {
    throw new Error("Error creating Blog.");
  }
  const { newBlog } = await res.json();
  return newBlog;
}

export const useUpdateBlogMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBlog,
    onMutate: async (newBlog) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries({
        queryKey: ["blogs", newBlog.blogId],
      });

      // Snapshot the previous value
      const previousBlog = queryClient.getQueryData(["blogs", newBlog.blogId]);

      const previousBlogs = queryClient.getQueryData(["blogs"]) as Blog[];

      const newBlogUpdateResult: Blog = {
        ...(previousBlog as Blog),
        ...newBlog,
      };

      // Optimistically update to the new value
      queryClient.setQueryData(["blogs", newBlog.blogId], newBlogUpdateResult);

      const projToUpdateIndex = previousBlogs.findIndex(
        (proj) => proj.blogId === newBlog.blogId
      );
      if (projToUpdateIndex === -1) return;

      const newBlogs = previousBlogs.toSpliced(
        projToUpdateIndex,
        1,
        newBlogUpdateResult
      );

      queryClient.setQueryData(["blogs"], newBlogs);

      // Return a context with the previous and new todo
      return { previousBlog, previousBlogs };
    },
    onSettled: (newBlog) => {
      if (!newBlog) return;
      queryClient.invalidateQueries({
        queryKey: ["blogs", newBlog.blogId],
      });
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onError: (_err, vars, context) => {
      if (!context) return;
      queryClient.setQueryData(["blogs", vars.blogId], context.previousBlog);

      queryClient.setQueryData(["blogs"], context.previousBlogs);
    },
  });
};
