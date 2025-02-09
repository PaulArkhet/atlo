import { Link } from "@tanstack/react-router";
import { Blog } from "../../../schemas/blogs";
import largeImage from "/bloglargeimg.svg";
import { Block } from "@/routes/blogger/createblog";
import { useState } from "react";
import imageDelete from "/imagedelete.png";
import { useDeleteBlogMutation } from "@/lib/api/blog";

export default function BlogComponent(props: { blog: Blog }) {
  const [deleteMode, setDeleteMode] = useState(false);
  const {
    mutate: deleteBlog,
    isPending: deleteBlogPending,
    isSuccess: deleteBlogSuccess,
  } = useDeleteBlogMutation();

  function parseBlogContent(blog: Blog) {
    const blocks = JSON.parse(blog.content); // Convert JSON string back to an array
    const titleBlock = blocks.find((block: Block) => block.type === "title");
    const imageBlock = blocks.find((block: Block) => block.type === "image");
    return {
      title: titleBlock ? titleBlock.content : "Untitled Blog",
      image: imageBlock ? imageBlock.src : { largeImage }, // Fallback image
      blogId: blog.blogId,
    };
  }

  async function handleDeleteProject(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (deleteBlogPending) return;

    deleteBlog(props.blog.blogId);

    setDeleteMode(false);
  }

  const { title, image, blogId } = parseBlogContent(props.blog);
  return (
    <div key={blogId}>
      {deleteMode && (
        <div className="fixed z-[201] py-5 px-2 md:px-5 rounded-lg bg-[#1A1A1A] top-[10%] md:left-[35%] flex flex-col">
          <img src={imageDelete} alt="" />
          <div className="text-xl py-5 font-bold">Delete For Eternity</div>
          <div className="">
            You are about to permanently delete this blog, it will be gone
            forever!
          </div>
          <div className="mx-auto py-2">
            <form onSubmit={handleDeleteProject}>
              <input
                name="content"
                id="content"
                defaultValue="[this message was deleted]"
                className="hidden"
              />
              <div className="flex pl-64">
                <button
                  className="hidden md:block md:pb-1 edit-btn cursor-pointer px-5 py-2 md:my-2 mx-2 bg-[#BABABA] rounded hover:bg-[#fafafa] transition-all ease duration-300 text-black tracking-widest"
                  onClick={() => setDeleteMode(false)}
                >
                  CANCEL
                </button>
                <button className="hidden md:block delete-btn  px-5 py-2 md:my-2 bg-[#DD4B63] rounded transition-all ease duration-300 tracking-widest cursor-pointer">
                  DELETE
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {deleteMode && (
        <div
          className="fixed inset-0 bg-black z-[200] opacity-70"
          onClick={() => setDeleteMode(false)}
        ></div>
      )}
      <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
        <div className="rounded-[10px] p-10 bg-gradient-to-b from-black to-transparent bg-opacity-40 w-[99%] mt-[2px] mx-auto">
          <img
            src={largeImage}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="mt-2 text-white text-lg font-bold">{title}</h2>
          <p> Uploaded on: {props.blog.createdAt.toString()}</p>
          <Link
            to="/blogger/edit/$blogId"
            params={{ blogId: blogId.toString() }}
            key={blogId}
          >
            <div className="border p-5 m-3 text-center cursor-pointer">
              EDIT
            </div>
          </Link>
          <div
            className="border p-5 m-3 text-red-400 text-center cursor-pointer"
            onClick={() => setDeleteMode(true)}
          >
            DELETE
          </div>
        </div>
      </div>
    </div>
  );
}
