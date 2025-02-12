import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { Block } from "../blogger/createblog";
import { z } from "zod";
import arrowLeft from "/arrowleft.svg";
import { getBlogByIdQueryOptions } from "@/lib/api/blog";
import DOMPurify from "dompurify";
import blueCloud from "/homebluecloud.svg";
import purpleCloud from "/homepurplecloud.svg";
import purplePlanet from "/homepurpleplanet.png";
import bluePlanet from "/homeblueplanet.png";

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
    return (
      <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
        <p className="text-center">Loading Blog...</p>
      </main>
    );
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
          <figure>
            <img
              src={block.content}
              alt="Blog Image"
              className="mx-auto rounded-lg"
            />
            {block.caption && (
              <figcaption className="text-center mt-2">
                {block.caption}
              </figcaption>
            )}
          </figure>
        );
      default:
        return null;
    }
  };

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <img src={blueCloud} alt="" className="absolute top-0 right-0" />
      <img src={purpleCloud} alt="" className="absolute top-0 left-0" />
      <img
        src={purplePlanet}
        alt=""
        className="hidden lg:block absolute right-[0%] top-[450px] w-[20vw] sm:top-[335px] md:top-[100px] z-0"
      />
      <img
        src={bluePlanet}
        alt=""
        className="hidden lg:block absolute left-[-2%] top-[475px] w-[20vw] sm:top-[375px] md:top-[365px] z-0"
      />
      <Link to="/resources" className="relative w-[300px] z-10">
        <div className="mb-5 xl:mb-0 flex lg:pl-5">
          <img src={arrowLeft} alt="Back" />
          <div className="ml-2">Go back</div>
        </div>
      </Link>

      <div className="flex flex-col relative z-10">
        <div className="mx-auto md:w-[800px]">
          <div>
            Posted on:{" "}
            {blog?.createdAt
              ? new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Unknown"}
          </div>
          {blocks.map((block, index) => (
            <div key={index} className="mb-4 relative z-10">
              {renderBlock(block)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default RouteComponent;
