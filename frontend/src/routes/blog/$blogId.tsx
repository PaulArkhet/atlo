import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Block } from "../blogger/createblog";
import { z } from "zod";
import arrowLeft from "/arrowleft.svg";
import { getBlogByIdQueryOptions } from "@/lib/api/blog";
import DOMPurify from "dompurify";

export const Route = createFileRoute("/blog/$blogId")({
  beforeLoad: async ({ context, params }) => {
    const { blogId: blogIdParam } = params;
    try {
      const blogId = z.coerce.number().int().parse(blogIdParam);
      const blog = await context.queryClient.fetchQuery({
        ...getBlogByIdQueryOptions(blogId),
        retry: 4,
      });
      return { blog };
    } catch (e) {
      console.error("Error fetching blog:", e);
      throw redirect({ to: "/resources" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { blog } = Route.useRouteContext(); // Get blog from beforeLoad

  if (!blog) {
    return <p className="text-center text-red-500">Error loading blog.</p>;
  }

  // Safely parse the blog content
  let blocks: Block[] = [];
  try {
    blocks = JSON.parse(blog.content || "[]");
  } catch {
    blocks = [
      {
        id: "error",
        type: "title",
        content: "Whoops! Something went wrong loading the blog :(",
      },
    ];
  }

  const renderBlock = (block: Block) => {
    switch (block.type) {
      case "title":
        return (
          <h1 className="workfont font-bold pt-5 text-center text-3xl lg:text-4xl 2xl:text-6xl">
            {block.content}
          </h1>
        );
      case "subtitle":
        return (
          <h2 className="nunitofont text-center text-2xl font-semibold">
            {block.content}
          </h2>
        );
      case "paragraph":
        return (
          <p
            className="nunitofont text-lg"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(block.content),
            }}
          ></p>
        );
      case "image":
        return (
          <img
            src={block.content}
            alt="Blog Image"
            className="mx-auto rounded-lg"
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <Link to="/resources">
        <div className="flex pl-5">
          <img src={arrowLeft} alt="Back" />
          <div className="ml-2">Go back</div>
        </div>
      </Link>

      <div className="flex flex-col">
        <div className="mx-auto md:w-[800px]">
          <div>
            Posted on:{" "}
            {blog?.createdAt
              ? new Date(blog.createdAt).toLocaleDateString()
              : "Unknown"}
          </div>
          {blocks.map((block, index) => (
            <div key={index} className="mb-4">
              {renderBlock(block)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default RouteComponent;
