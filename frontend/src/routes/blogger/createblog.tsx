import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import arrowLeft from "/arrowleft.svg";
import { useCreateBlogMutation } from "@/lib/api/blog";
import useAuthStore from "@/store/AuthStore";

export const Route = createFileRoute("/blogger/createblog")({
  component: RouteComponent,
});

type Block = {
  id: string;
  type: "title" | "subtitle" | "paragraph" | "image";
  content: string;
};

function RouteComponent() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const navigate = useNavigate();
  const { isBloggerLoggedIn, setIsBloggerLoggedIn } = useAuthStore(
    (state) => state
  );

  useEffect(() => {
    if (!isBloggerLoggedIn) navigate({ to: "/blogger/login" });
  }, []);

  const handleAddBlock = (type: Block["type"]) => {
    setBlocks([...blocks, { id: crypto.randomUUID(), type, content: "" }]);
  };

  const handleChange = (id: string, content: string) => {
    setBlocks(
      blocks.map((block) => (block.id === id ? { ...block, content } : block))
    );
  };

  const handleRemoveBlock = (id: string) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  const handleImageUpload = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange(id, reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const createBlogMutation = useCreateBlogMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("blog created");
    // Convert blocks into a string (or structured format)
    const formattedContent = JSON.stringify(blocks);

    createBlogMutation.mutate(
      { content: formattedContent }, // <-- Sending the transformed data
      {
        onSuccess: () => navigate({ to: "/blogger/dashboard" }),
        onError: (error) => console.error("Blogging failed:", error),
      }
    );
  };

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <Link to="/blogger/dashboard">
        <div className="flex pl-5">
          <img src={arrowLeft} alt="Back" />
          <div className="ml-2">Go back</div>
        </div>
      </Link>

      <div className="md:p-10 text-center text-xl pb-5 text-[#D9D9D9]">
        CREATE NEW BLOG
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-[800px]">
        {blocks.map((block) => (
          <div key={block.id} className="relative my-3">
            {block.type === "title" && (
              <input
                type="text"
                placeholder="Title"
                value={block.content}
                onChange={(e) => handleChange(block.id, e.target.value)}
                className="w-full border border-[#8778D7] bg-[#242424] py-2 px-3 text-xl font-bold"
              />
            )}
            {block.type === "subtitle" && (
              <input
                type="text"
                placeholder="Subtitle"
                value={block.content}
                onChange={(e) => handleChange(block.id, e.target.value)}
                className="w-full border border-[#8778D7] bg-[#242424] py-2 px-3 text-lg"
              />
            )}
            {block.type === "paragraph" && (
              <textarea
                rows={4}
                placeholder="Write a paragraph"
                value={block.content}
                onChange={(e) => handleChange(block.id, e.target.value)}
                className="w-full border border-[#8778D7] bg-[#242424] py-2 px-3"
              />
            )}
            {block.type === "image" && (
              <div className="w-full">
                {block.content ? (
                  <img
                    src={block.content}
                    alt="Uploaded"
                    className="max-w-full rounded-lg shadow-lg"
                  />
                ) : (
                  <label className="cursor-pointer text-center block bg-[#9253E4] py-2 px-3 my-2">
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(block.id, e)}
                    />
                  </label>
                )}
              </div>
            )}
            <button
              type="button"
              onClick={() => handleRemoveBlock(block.id)}
              className="absolute -right-5 -top-2 text-red-400 text-xl"
            >
              ✖
            </button>
          </div>
        ))}

        <div className="flex justify-center gap-3 my-5">
          <button
            type="button"
            onClick={() => handleAddBlock("title")}
            className="bg-[#9253E4] px-3 py-2"
          >
            + Title
          </button>
          <button
            type="button"
            onClick={() => handleAddBlock("subtitle")}
            className="bg-[#9253E4] px-3 py-2"
          >
            + Subtitle
          </button>
          <button
            type="button"
            onClick={() => handleAddBlock("paragraph")}
            className="bg-[#9253E4] px-3 py-2"
          >
            + Paragraph
          </button>
          <button
            type="button"
            onClick={() => handleAddBlock("image")}
            className="bg-[#9253E4] px-3 py-2"
          >
            + Image
          </button>
        </div>

        <button className="text-center px-5 py-3 bg-[#9253E4] tracking-widest">
          CREATE
        </button>
      </form>
    </main>
  );
}

export default RouteComponent;
