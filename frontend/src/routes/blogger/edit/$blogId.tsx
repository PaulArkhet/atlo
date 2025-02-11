import {
  createFileRoute,
  Link,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Block } from "../createblog";
import useAuthStore from "@/store/AuthStore";
import {
  getBlogByIdQueryOptions,
  useCreateBlogMutation,
  useUpdateBlogMutation,
} from "@/lib/api/blog";
import arrowLeft from "/arrowleft.svg";
import { z } from "zod";

export const Route = createFileRoute("/blogger/edit/$blogId")({
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

  const [thumbnail, setThumbnail] = useState<string | null>(blog.thumbnail);
  const [summary, setSummary] = useState(blog.summary ? blog.summary : "");
  const [summaryMessage, setSummaryMessage] = useState("");

  // Safely parse the blog content
  let prevBlogs: Block[] = [];
  try {
    prevBlogs = JSON.parse(blog.content || "[]");
  } catch {
    prevBlogs = [
      {
        id: "error",
        type: "title",
        content: "Whoops! Something went wrong loading the blog :(",
      },
    ];
  }
  const [blocks, setBlocks] = useState<Block[]>(prevBlogs);
  const navigate = useNavigate();
  const { user } = useAuthStore((state) => state);

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

  const { mutate: updateBlog, isPending: mutateProjectPending } =
    useUpdateBlogMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mutateProjectPending) return;
    console.log(summary);
    if (summary!.length > 200)
      return setSummaryMessage(
        "Whoops! Summary is too long, should be below 200 characters"
      );
    // Convert blocks into a string (or structured format)
    const formattedContent = JSON.stringify(blocks);

    updateBlog({
      blogId: blog.blogId,
      content: formattedContent,
      thumbnail,
      summary: summary,
    });
    navigate({ to: "/blogger/dashboard" });
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
        UPDATE BLOG
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mx-auto w-[800px]">
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
          <label className="cursor-pointer text-center bg-[#559246] py-2 px-3 my-2">
            Upload Thumbnail
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleThumbnailUpload}
            />
          </label>
        )}
        <textarea
          rows={4}
          placeholder="Write a summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-[300px] border border-[#8778D7] bg-[#242424] py-2 px-3 my-3"
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
            <div className="absolute left-[-40px] top-[-10px] flex flex-col gap-1">
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
          UPDATE
        </button>
      </form>
    </main>
  );
}
