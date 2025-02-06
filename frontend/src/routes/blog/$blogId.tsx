import useBlogStore from "@/store/BlogStore";
import { createFileRoute } from "@tanstack/react-router";
import { Block } from "../blogger/createblog";

export const Route = createFileRoute("/blog/$blogId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { currentBlog, setCurrentBlog } = useBlogStore((state) => state);

  const blocks = JSON.parse(currentBlog?.content || ""); // Convert JSON string back to an array

  const renderBlock = (block: Block) => {
    switch (block.type) {
      case "title":
        return <h1 className="workfont text-3xl font-bold">{block.content}</h1>;
      case "subtitle":
        return (
          <h2 className="nunitofont text-2xl font-semibold">{block.content}</h2>
        );
      case "paragraph":
        return <p className="nunitofont text-lg">{block.content}</p>;
      case "image":
        return (
          <img src={block.content} alt={"Blog Image"} className="rounded-lg" />
        );
      default:
        return null;
    }
  };
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="flex flex-col">
        <div className="mx-auto">
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
