import { Link } from "@tanstack/react-router";
import { Blog } from "../../../schemas/blogs";
import largeImage from "/bloglargeimg.svg";
import { Block } from "@/routes/blogger/createblog";

export default function BlogComponent(props: { blog: Blog }) {
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

  const { title, image, blogId } = parseBlogContent(props.blog);
  return (
    <Link
      to={`/blog/$blogId`}
      params={{ blogId: blogId.toString() }}
      key={blogId}
    >
      <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
        <div className="rounded-[10px] p-10 bg-gradient-to-b from-black to-transparent bg-opacity-40 w-[99%] mt-[2px] mx-auto">
          <img
            src={largeImage}
            alt={title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="mt-2 text-white text-lg font-bold">{title}</h2>
          <p> Uploaded on: {props.blog.createdAt.toString()}</p>
        </div>
      </div>
    </Link>
  );
}
