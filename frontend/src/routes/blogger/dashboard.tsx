import useAuthStore from "@/store/AuthStore";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Block } from "./createblog";
import { getAllBlogsQueryOptions } from "@/lib/api/blog";
import largeImage from "/bloglargeimg.svg";
import useBlogStore from "@/store/BlogStore";
import { Blog } from "../../../../schemas/blogs";
import BlogComponent from "@/components/BlogComponent";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/blogger/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isBloggerLoggedIn, setIsBloggerLoggedIn } = useAuthStore(
    (state) => state
  );
  const { currentBlog, setCurrentBlog } = useBlogStore((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isBloggerLoggedIn) navigate({ to: "/blogger/login" });
  }, []);

  const { data: blogs, isLoading, error } = useQuery(getAllBlogsQueryOptions);

  if (isLoading)
    return (
      <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
        <div className="md:p-10">
          <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
            Hello, Randall!
          </div>
        </div>
        <p className="text-center">Loading your blogs...</p>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
        </div>
      </main>
    );
  if (error)
    return (
      <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
        <p className="text-center">
          Whoops! Something went wrong getting the Blogs 😮
        </p>
        <p className="text-center">We'll look into that ASAP</p>
      </main>
    );

  const parseBlogContent = (blog: Blog) => {
    const blocks = JSON.parse(blog.content); // Convert JSON string back to an array
    const titleBlock = blocks.find((block: Block) => block.type === "title");
    const imageBlock = blocks.find((block: Block) => block.type === "image");

    return {
      title: titleBlock ? titleBlock.content : "Untitled Blog",
      image: imageBlock ? imageBlock.src : { largeImage }, // Fallback image
      blogId: blog.blogId,
    };
  };

  function deleteBlog(id: number) {
    blogs?.forEach((blog) => {
      if (blog.blogId === id) setCurrentBlog(blog);
    });
  }

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          Hello, Randall!
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="mx-auto">
          <Link to="/blogger/createblog">
            <div className="text-center rounded bg-gradient-to-r from-[#6754B7] to-[#B754B3] py-2 w-[250px] m-3 z-40 cursor-pointer">
              Create new blog
            </div>
          </Link>
          <div className="text-center workfont text-4xl py-10">Your blogs</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          {blogs &&
            blogs.map((blog) => {
              const { title, image, blogId } = parseBlogContent(blog);
              return <BlogComponent blog={blog} key={blogId} />;
            })}
        </div>
      </div>
    </main>
  );
}
