import useAuthStore from "@/store/AuthStore";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Block } from "./createblog";
import { getAllBlogsQueryOptions } from "@/lib/api/blog";
import largeImage from "/bloglargeimg.svg";

export const Route = createFileRoute("/blogger/dashboard")({
  component: RouteComponent,
});

type Blog = {
  blogId: number;
  content: string;
};

function RouteComponent() {
  const { isBloggerLoggedIn, setIsBloggerLoggedIn } = useAuthStore(
    (state) => state
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!isBloggerLoggedIn) navigate({ to: "/blogger/login" });
  }, []);

  const { data: blogs, isLoading, error } = useQuery(getAllBlogsQueryOptions);

  if (isLoading) return <p>Loading blogs...</p>;
  if (error) return <p>Error fetching blogs</p>;

  const parseBlogContent = (blog: Blog) => {
    const blocks = JSON.parse(blog.content); // Convert JSON string back to an array
    const titleBlock = blocks.find((block: Block) => block.type === "title");
    const imageBlock = blocks.find((block: Block) => block.type === "image");

    return {
      title: titleBlock ? titleBlock.content : "Untitled Blog",
      image: imageBlock ? imageBlock.src : "/placeholder.jpg", // Fallback image
      blogId: blog.blogId,
    };
  };

  // const {
  //   data: blog,
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["blog", blogId], // Fetch a specific blog post
  //   queryFn: () => client.api.v0.blogs.$get({ params: { blogId } }),
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading blog</p>;

  // const blocks = JSON.parse(blog.content); // Convert JSON string back to an array

  // const renderBlock = (block: Block) => {
  //   switch (block.type) {
  //     case "title":
  //       return <h1 className="text-3xl font-bold">{block.content}</h1>;
  //     case "subtitle":
  //       return <h2 className="text-2xl font-semibold">{block.content}</h2>;
  //     case "paragraph":
  //       return <p className="text-lg">{block.content}</p>;
  //     case "image":
  //       return (
  //         <img
  //           src={block.src}
  //           alt={block.alt || "Blog Image"}
  //           className="rounded-lg"
  //         />
  //       );
  //     default:
  //       return null;
  //   }
  // };

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
        {/* <div className="max-w-2xl mx-auto p-5">
          {blocks.map((block: Block, index: number) => (
            <div key={index} className="mb-4">
              {renderBlock(block)}
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-5">
          {blogs &&
            blogs.map((blog) => {
              const { title, image, blogId } = parseBlogContent(blog);
              return (
                <Link to={`/blog/${blogId}`} key={blogId}>
                  <div className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="mt-2 text-white text-lg font-bold">
                      {title}
                    </h2>
                  </div>
                </Link>
              );
            })}
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
          <div className="border p-10 w-[250px] m-3">
            <div>Blog title</div>
            <div>picture</div>
            <div>date</div>
            <div>summary</div>
            <div className="border p-5 m-3 text-center">EDIT</div>
            <div className="border p-5 m-3 text-red-400 text-center">
              DELETE
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
