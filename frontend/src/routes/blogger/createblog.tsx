import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import arrowLeft from "/arrowleft.svg";
import { useCreateBlogMutation } from "@/lib/api/blog";
import useAuthStore from "@/store/AuthStore";

export const Route = createFileRoute("/blogger/createblog")({
  component: RouteComponent,
});

export type Block = {
  id: string;
  type: "title" | "subtitle" | "paragraph" | "image";
  content: string;
  alt?: string;
  caption?: string;
};

function RouteComponent() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const navigate = useNavigate();
  const { user } = useAuthStore((state) => state);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [summary, setSummary] = useState("");
  const [summaryMessage, setSummaryMessage] = useState("");
  const [main, setMain] = useState(false);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (!user) navigate({ to: "/blogger/login" });
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

  const handleMoveBlock = (id: string, direction: "up" | "down") => {
    setBlocks((prevBlocks) => {
      const index = prevBlocks.findIndex((block) => block.id === id);
      if (index === -1) return prevBlocks;

      const newBlocks = [...prevBlocks];
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      // Ensure it's within valid bounds
      if (targetIndex < 0 || targetIndex >= newBlocks.length) return prevBlocks;

      // Swap elements
      [newBlocks[index], newBlocks[targetIndex]] = [
        newBlocks[targetIndex],
        newBlocks[index],
      ];
      return newBlocks;
    });
  };

  const handleAltChange = (id: string, alt: string) => {
    setBlocks(
      blocks.map((block) => (block.id === id ? { ...block, alt } : block))
    );
  };

  const handleCaptionChange = (id: string, caption: string) => {
    setBlocks(
      blocks.map((block) => (block.id === id ? { ...block, caption } : block))
    );
  };

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnail(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleClickedMain() {
    setMain(true);
    setFeatured(false);
  }

  function handleCancelledMain() {
    setMain(false);
  }

  function handleClickedFeatured() {
    setMain(false);
    setFeatured(true);
  }

  function handleCancelledFeatured() {
    setFeatured(false);
  }

  const createBlogMutation = useCreateBlogMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Convert blocks into a string (or structured format)
    const formattedContent = JSON.stringify(blocks);
    if (summary.length > 200)
      return setSummaryMessage(
        "Whoops! Summary is too long, should be below 200 characters"
      );
    createBlogMutation.mutate(
      {
        content: formattedContent,
        thumbnail: thumbnail,
        summary: summary,
        main: main,
        featured: featured,
      },
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
        {!main && (
          <div
            className="cursor-pointer text-center bg-[#b028ff] py-2 px-3 mb-5 w-[159px]"
            onClick={handleClickedMain}
          >
            Set as Main
          </div>
        )}
        {main && (
          <div className="flex">
            <div
              className="cursor-pointer text-center bg-[#8d3434] py-2 px-3 mb-5 w-[159px]"
              onClick={handleCancelledMain}
            >
              Cancel Main
            </div>
            <div className="ml-2 text-green-600">
              This is now the main article!
            </div>
          </div>
        )}
        {!featured && (
          <div
            className="cursor-pointer text-center bg-[#467492] py-2 px-3 mb-5 w-[159px]"
            onClick={handleClickedFeatured}
          >
            Set as Featured
          </div>
        )}
        {featured && (
          <div className="flex">
            <div
              className="cursor-pointer text-center bg-[#8d3434] py-2 px-3 mb-5 w-[159px]"
              onClick={handleCancelledFeatured}
            >
              Cancel Featured
            </div>
            <div className="ml-2 text-green-600">
              This is now a featured article!
            </div>
          </div>
        )}
        <div className="w-full">
          {thumbnail ? (
            <div className="relative">
              <img
                src={thumbnail}
                alt="Thumbnail"
                className="mx-auto rounded-lg shadow-lg"
              />
              <div className="flex gap-2 mt-3">
                <label className="cursor-pointer bg-[#559246] px-3 py-2 text-white">
                  Replace Thumbnail
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleThumbnailUpload}
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setThumbnail(null)}
                  className="bg-red-500 px-3 py-2 text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="mb-5">
              <label className="cursor-pointer text-center bg-[#559246] py-2 px-3 ">
                Upload Thumbnail
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbnailUpload}
                />
              </label>
            </div>
          )}
        </div>
        <textarea
          rows={4}
          placeholder="Write a summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-[300px] border border-[#8778D7] bg-[#242424] py-2 px-3"
          required
        />
        {blocks.map((block, index) => (
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
                  <div className="relative">
                    <img
                      src={block.content}
                      alt={block.alt || "Image"}
                      className="max-w-full rounded-lg shadow-lg"
                    />
                    <input
                      type="text"
                      placeholder="Set alt text (description for image)"
                      value={block.alt || ""}
                      onChange={(e) =>
                        handleAltChange(block.id, e.target.value)
                      }
                      className="mt-2 w-full border border-[#8778D7] bg-[#242424] py-1 px-2 text-white text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Add caption for image"
                      value={block.caption || ""}
                      onChange={(e) =>
                        handleCaptionChange(block.id, e.target.value)
                      }
                      className="mt-2 w-full border border-[#8778D7] bg-[#242424] py-1 px-2 text-white text-sm"
                    />
                    {block.caption && (
                      <figcaption className="mt-2 text-center text-sm text-gray-300">
                        {block.caption}
                      </figcaption>
                    )}
                    <div className="flex gap-2 mt-3">
                      <label className="cursor-pointer bg-[#9253E4] px-3 py-2 text-white">
                        Replace Image
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handleImageUpload(block.id, e)}
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => handleChange(block.id, "")}
                        className="bg-red-500 px-3 py-2 text-white"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
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
            <div className="absolute right-[-40px] top-[10px] flex flex-col gap-1">
              <button
                type="button"
                disabled={index === 0}
                onClick={() => handleMoveBlock(block.id, "up")}
                className="bg-gray-600 px-2 py-1 text-white text-sm disabled:opacity-50"
              >
                ▲
              </button>
              <button
                type="button"
                disabled={index === blocks.length - 1}
                onClick={() => handleMoveBlock(block.id, "down")}
                className="bg-gray-600 px-2 py-1 text-white text-sm disabled:opacity-50"
              >
                ▼
              </button>
            </div>
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
        <div className="text-orange-300">{summaryMessage}</div>
        <button className="text-center px-5 py-3 bg-[#9253E4] tracking-widest">
          CREATE
        </button>
      </form>
    </main>
  );
}

export default RouteComponent;
