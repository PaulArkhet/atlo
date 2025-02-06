import useBlogStore from "@/store/BlogStore";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Block } from "../blogger/createblog";
import { z } from "zod";
import { useQueryClient } from "@tanstack/react-query";
import arrowLeft from "/arrowleft.svg";

export const Route = createFileRoute("/blog/$blogId")({
  beforeLoad: async ({ context, params }) => {
    const { blogId: blogIdParam } = params;
    try {
      const blogId = z.coerce.number().int().parse(blogIdParam);
      // const blog = await context.queryClient.fetchQuery({
      //   ...getBlogByIdQueryOptions(blogId),
      //   retry: 4,
      // });

      // return { blog };
    } catch (e) {
      // throw redirect({ to: "/dashboard" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
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
  const { currentBlog, setCurrentBlog } = useBlogStore((state) => state);

  const blocks = JSON.parse(
    currentBlog?.content ||
      '[{"id":"8c7b1f53-907b-4171-9bcc-d84600487ff1","type":"title","content":"Whoops! Something went wrong loading the blog :("}]'
  ); // Convert JSON string back to an array

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
        return <p className="nunitofont text-lg">{block.content}</p>;
      case "image":
        return (
          <img src={block.content} alt={"Blog Image"} className="mx-auto" />
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
          <div>Posted on: {currentBlog?.createdAt.toString()}</div>
          {blocks.map((block: Block, index: number) => (
            <div key={index} className="mb-4">
              {renderBlock(block)}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
