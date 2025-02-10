import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import background1 from "/background1.svg";
import fadingBorder from "/resourcesfadingborder.svg";
import blogImg from "/resourcesblog1img.svg";
import clock from "/clock.svg";
import largeImage from "/bloglargeimg.svg";
import largeImage2 from "/bloglargeimg2.svg";
import smallImage from "/blogsmallimage.svg";
import useBlogStore from "@/store/BlogStore";
import { useQuery } from "@tanstack/react-query";
import { getAllBlogsQueryOptions } from "@/lib/api/blog";
import { Block } from "./blogger/createblog";
import { Blog } from "../../../schemas/blogs";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/resources")({
  component: RouteComponent,
});

function RouteComponent() {
  const { currentBlog, setCurrentBlog } = useBlogStore((state) => state);
  const navigate = useNavigate();

  const { data: blogs, isLoading, error } = useQuery(getAllBlogsQueryOptions);

  if (isLoading)
    return (
      <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
        <div className="md:p-10">
          <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
            RESOURCES
          </div>
        </div>
        <div className="text-center pb-10 md:pb-20">
          <div className="workfont text-2xl md:text-6xl font-bold">
            <div>Blog</div>
          </div>
        </div>
        <div className="pb-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
          <Skeleton className="w-full h-[300px] rounded-lg mt-4" />
        </div>
      </main>
    );
  if (error)
    return (
      <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
        <p className="text-center">
          Whoops! Something went wrong getting the Blogs 😮
        </p>
        <p className="text-center">We'll look into that ASAP</p>
      </main>
    );

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

  function clickedBlog(id: number) {
    blogs?.forEach((blog) => {
      if (blog.blogId === id) setCurrentBlog(blog);
    });
  }

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      {/* <iframe
        src="https://arkhet.com/"
        className="flex-1 bg-[#242424] text-white pt-[70px] w-full h-screen scrollbar-none"
        style={{ scrollbarWidth: "none" }}
      ></iframe> */}
      <div className="md:p-10">
        <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          RESOURCES
        </div>
      </div>
      <div className="text-center pb-10 md:pb-20">
        <div className="workfont text-2xl md:text-6xl font-bold">
          <div>Blog</div>
        </div>
      </div>
      <div className="pb-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
        {blogs &&
          blogs.map((blog) => {
            const { title, image, blogId } = parseBlogContent(blog);
            return (
              <Link
                to={`/blog/$blogId`}
                params={{ blogId: blogId.toString() }}
                key={blogId}
                onClick={() => clickedBlog(blog.blogId)}
              >
                <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
                  <div className="rounded-[10px] p-10 bg-gradient-to-b from-black to-transparent bg-opacity-40 w-[99%] mt-[2px] mx-auto">
                    <img
                      src={largeImage}
                      alt={title}
                      className="w-full h-40 object-cover rounded-md"
                    />
                    <h2 className="mt-2 text-white text-lg font-bold">
                      {title}
                    </h2>
                    <p> Uploaded on: {blog.createdAt.toString()}</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      <div
        className="md:hidden border-2 bg-gradient-to-r from-[#6F4B92] via-[#584F8F] to-[#404A8B] border-[#464071] 
      rounded-[10px]"
      >
        <img src={blogImg} alt="" />
        <div className="p-5">
          <div className="tracking-[0.4rem] py-1">DECEMBER 11, 2024</div>
          <div className="workfont text-2xl py-1 font-bold">
            Blog title, latest post featured here.
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
          <div className="flex mt-2">
            <img src={clock} alt="" className="w-[23px]" />
            <div className="">3 minute read</div>
          </div>
        </div>
      </div>
      <div className="md:hidden text-4xl font-bold pt-5">Featured</div>
      <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
        <img src={largeImage} alt="" />
        <div className="p-5">
          <div className=" tracking-[0.4rem] py-1">NOVEMBER 25, 2024</div>
          <div className="workfont text-2xl py-1 font-bold">
            Previous blog posts go here
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
        </div>
      </div>
      <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
        <img src={largeImage2} alt="" />
        <div className="p-5">
          <div className=" tracking-[0.4rem] py-1">NOVEMBER 1, 2024</div>
          <div className="workfont text-2xl py-1 font-bold">
            Previous blog posts go here
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
        </div>
      </div>
      <div className="md:hidden text-4xl font-bold pt-5">All Posts</div>
      <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
        <img src={smallImage} alt="" />
        <div className="p-5">
          <div className=" tracking-[0.4rem] py-1">OCTOBER 15, 2024</div>
          <div className="workfont text-2xl py-1 font-bold">
            Previous blog posts go here
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
        </div>
      </div>
      <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
        <img src={smallImage} alt="" />
        <div className="p-5">
          <div className=" tracking-[0.4rem] py-1">OCTOBER 12, 2024</div>
          <div className="workfont text-2xl py-1 font-bold">
            Previous blog posts go here
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
        </div>
      </div>
      <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
        <img src={smallImage} alt="" />
        <div className="p-5">
          <div className="tracking-[0.4rem] py-1">OCTOBER 5, 2024</div>
          <div className="workfont text-2xl py-1 font-bold">
            Previous blog posts go here
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="hidden md:block relative mb-20 mx-auto">
          <img src={background1} alt="" className="mx-auto" />
          <div className=" tracking-[0.4rem] absolute top-5 left-5 text-sm lg:top-14 lg:left-11 2xl:text-3xl text-[#D9D9D9]">
            DECEMBER 11, 2024
          </div>
          <div className="lg:block absolute lg:top-20 2xl:top-32 left-11 lg:text-4xl 2xl:text-6xl font-bold w-[550px]">
            Blog title, latest post featured here.
          </div>
          <div className="lg:absolute lg:top-44 2xl:top-72 left-11 text-left text-xl 2xl:text-3xl text-[#D9D9D9] 2xl:w-[500px]">
            <div className="ml-2 mb-3 lg:w-[500px] 2xl:w-[650px]">
              Add a quick summary of what the blog post is about. Clicking this
              whole section takes user to the full blog post. Keep this 2-4
              lines.
            </div>
            <div className="flex mt-5">
              <img src={clock} alt="" />
              <div className="text-xl 2xl:text-[24px]">3 minute read</div>
            </div>
          </div>
          <div className="lg:absolute top-[-5%] right-[-20%] 2xl:right-20 mb-40 md:mb-0">
            <div className="relative top-2 right-0">
              <img
                src={fadingBorder}
                alt=""
                className="lg:w-[70%] 2xl:w-auto"
              />
              <img
                src={blogImg}
                alt=""
                className="absolute top-4 left-0 md:left-4 lg:w-[67%] 2xl:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col mx-auto pb-32">
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">Featured</div>
          <div className="md:flex">
            <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
              <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                <img src={largeImage} alt="" className="rounded-[10px]" />
                <div className="px-5 tracking-[0.3rem] text-[24px] pt-10 pb-3">
                  NOVEMBER 25, 2024
                </div>
                <div className="px-5 text-[32px] 2xl:text-[48px] font-bold">
                  Previous blog posts go here
                </div>
                <div className="px-5 text-[20px] pt-9 pb-20">
                  Add a quick summary of what the blog post is about. Clicking
                  this whole section <br /> takes user to the full blog post.
                  Keep this 2-4 lines.
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
              <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                <img src={largeImage2} alt="" className="rounded-[10px]" />
                <div className="px-5 tracking-[0.3rem] text-[24px] pt-10 pb-3">
                  NOVEMBER 25, 2024
                </div>
                <div className="px-5 text-[32px] 2xl:text-[48px] font-bold">
                  Previous blog posts go here
                </div>
                <div className="px-5 text-[20px] pt-9 pb-20">
                  Add a quick summary of what the blog post is about. Clicking
                  this whole section <br /> takes user to the full blog post.
                  Keep this 2-4 lines.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">All posts</div>
          <div className="md:flex">
            <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
              <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                <img src={smallImage} alt="" className="mx-auto" />
                <div className="pt-8 px-5 tracking-[0.3rem] text-xl 2xl:text-[24px]">
                  OCTOBER 15, 2024
                </div>
                <div className="px-5 text-4xl py-5 font-bold">
                  Previous blog posts go here
                </div>
                <div className="pb-24 px-5 text-lg ">
                  Add a quick summary of what the blog post is about.
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
              <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                <img src={smallImage} alt="" className="mx-auto" />
                <div className="pt-8 px-5 tracking-[0.3rem] text-xl 2xl:text-[24px]">
                  OCTOBER 15, 2024
                </div>
                <div className="px-5 text-4xl py-5 font-bold">
                  Previous blog posts go here
                </div>
                <div className="pb-24 px-5 text-lg ">
                  Add a quick summary of what the blog post is about.
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
              <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                <img src={smallImage} alt="" className="mx-auto" />
                <div className="pt-8 px-5 tracking-[0.3rem] text-xl 2xl:text-[24px]">
                  OCTOBER 15, 2024
                </div>
                <div className="px-5 text-4xl py-5 font-bold">
                  Previous blog posts go here
                </div>
                <div className="pb-24 px-5 text-lg ">
                  Add a quick summary of what the blog post is about.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
