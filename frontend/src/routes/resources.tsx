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
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]  overflow-x-hidden">
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
      {blogs &&
        blogs.map((blog, index) => {
          const { title, image, blogId } = parseBlogContent(blog);
          return index === 0 ? (
            <div>
              <Link
                to={`/blog/$blogId`}
                params={{ blogId: blogId.toString() }}
                key={blogId}
                onClick={() => clickedBlog(blog.blogId)}
              >
                <div className="flex flex-col mx-auto">
                  <div className="hidden md:block relative mb-32 xl:mb-20 mx-auto">
                    <img src={background1} alt="" className="mx-auto" />
                    <div className=" tracking-[0.4rem] absolute top-8 left-8 text-sm lg:top-14 lg:left-11 2xl:text-3xl text-[#D9D9D9]">
                      {new Date(blog.createdAt)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        .toUpperCase()}
                    </div>
                    <div className="absolute top-16 left-8 text-2xl lg:left-11 lg:top-20 2xl:top-32 w-[30%] lg:text-3xl 2xl:text-6xl font-bold lg:w-[25%] xl:w-[25%] 2xl:w-[37%]">
                      {title}
                    </div>
                    <div className="text-[#D9D9D9] absolute top-32 left-6 lg:left-11 text-left lg:text-xl lg:top-44 2xl:top-72 2xl:text-3xl w-[33%] lg:w-[25%] xl:w-[30%] 2xl:w-[37%]">
                      <div className="ml-2 mb-3">{blog.summary}</div>
                      <div className="flex mt-5">
                        <img src={clock} alt="" />
                        <div className="text-xl 2xl:text-[24px]">
                          3 minute read
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-[-5%] right-[-450px] lg:right-[-22%] xl:right-[-15%] 2xl:right-[0%] mb-40 md:mb-0">
                      <div className="relative top-2 right-0">
                        <img
                          src={fadingBorder}
                          alt=""
                          className="w-[50%] lg:w-[70%] 2xl:w-[90%]"
                        />
                        <img
                          src={blogImg}
                          alt=""
                          className="absolute top-4 left-0 md:left-4 w-[46%] lg:w-[67%] 2xl:w-[87%]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                to={`/blog/$blogId`}
                params={{ blogId: blogId.toString() }}
                key={blogId}
                onClick={() => clickedBlog(blog.blogId)}
              >
                <div
                  className="md:hidden border-2 bg-gradient-to-r from-[#6F4B92] via-[#584F8F] to-[#404A8B] border-[#464071] 
            rounded-[10px]"
                >
                  <img src={blogImg} alt="" />
                  <div className="p-5">
                    <div className="tracking-[0.4rem] py-1">
                      {new Date(blog.createdAt)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        .toUpperCase()}
                    </div>
                    <div className="workfont text-2xl py-1 font-bold">
                      {title}
                    </div>
                    <div className="py-1">
                      Add a quick summary of what the blog post is about.
                      Clicking this whole section takes user to the full blog
                      post. Keep this 2-4 lines.
                    </div>
                    <div className="flex mt-2">
                      <img src={clock} alt="" className="w-[23px]" />
                      <div className="">3 minute read</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            ""
          );
        })}
      <div className="md:hidden text-4xl font-bold pt-5">Featured</div>
      {blogs &&
        blogs.map((blog, index) => {
          const { title, image, blogId } = parseBlogContent(blog);
          return (
            index > 0 &&
            index < 3 && (
              <Link
                to={`/blog/$blogId`}
                params={{ blogId: blogId.toString() }}
                key={blogId}
                onClick={() => clickedBlog(blog.blogId)}
              >
                <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
                  <img src={largeImage} alt="" />
                  <div className="p-5">
                    <div className=" tracking-[0.4rem] py-1">
                      {new Date(blog.createdAt)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        .toUpperCase()}
                    </div>
                    <div className="workfont text-2xl py-1 font-bold">
                      {title}
                    </div>
                    <div className="py-1">
                      Add a quick summary of what the blog post is about.
                      Clicking this whole section takes user to the full blog
                      post. Keep this 2-4 lines.
                    </div>
                  </div>
                </div>
              </Link>
            )
          );
        })}
      <div className="md:hidden text-4xl font-bold pt-5">All Posts</div>
      {blogs &&
        blogs.map((blog, index) => {
          const { title, image, blogId } = parseBlogContent(blog);
          return (
            index > 2 && (
              <Link
                to={`/blog/$blogId`}
                params={{ blogId: blogId.toString() }}
                key={blogId}
                onClick={() => clickedBlog(blog.blogId)}
              >
                <div className="md:hidden border-2 bg-[#040404] border-[#464071] rounded-[10px] my-3">
                  <img src={smallImage} alt="" />
                  <div className="p-5">
                    <div className=" tracking-[0.4rem] py-1">
                      {new Date(blog.createdAt)
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                        .toUpperCase()}
                    </div>
                    <div className="workfont text-2xl py-1 font-bold">
                      {title}
                    </div>
                    <div className="py-1">
                      Add a quick summary of what the blog post is about.
                      Clicking this whole section takes user to the full blog
                      post. Keep this 2-4 lines.
                    </div>
                  </div>
                </div>
              </Link>
            )
          );
        })}
      <div className="hidden md:flex flex-col mx-auto pb-32">
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">Featured</div>
          <div className=" grid grid-cols-2 gap-2">
            {blogs &&
              blogs.map((blog, index) => {
                const { title, image, blogId } = parseBlogContent(blog);
                return (
                  index > 0 &&
                  index < 3 && (
                    <Link
                      to={`/blog/$blogId`}
                      params={{ blogId: blogId.toString() }}
                      key={blogId}
                      onClick={() => clickedBlog(blog.blogId)}
                    >
                      <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
                        <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                          <img
                            src={
                              blog.thumbnail == undefined
                                ? largeImage
                                : `${blog.thumbnail}`
                            }
                            alt=""
                            className="rounded-[10px]"
                          />
                          <div className="px-5 tracking-[0.3rem] text-[24px] pt-10 pb-3">
                            {new Date(blog.createdAt)
                              .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                              .toUpperCase()}
                          </div>
                          <div className="px-5 text-[32px] 2xl:text-[48px] font-bold">
                            {title}
                          </div>
                          <div className="px-5 text-[20px] pt-9 pb-20">
                            Add a quick summary of what the blog post is about.
                            Clicking this whole section <br /> takes user to the
                            full blog post. Keep this 2-4 lines.
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                );
              })}
          </div>
          <div className="text-5xl font-bold py-10">All posts</div>
          <div className="grid grid-cols-3 gap-2">
            {blogs &&
              blogs.map((blog, index) => {
                const { title, image, blogId } = parseBlogContent(blog);
                return (
                  index > 2 && (
                    <Link
                      to={`/blog/$blogId`}
                      params={{ blogId: blogId.toString() }}
                      key={blogId}
                      onClick={() => clickedBlog(blog.blogId)}
                    >
                      <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col mx-1">
                        <div className="rounded-[8px] bg-[#161616] mt-[2px] mx-[2px]">
                          <img src={smallImage} alt="" className="mx-auto" />
                          <div className="pt-8 px-5 tracking-[0.3rem] text-xl 2xl:text-[24px]">
                            {new Date(blog.createdAt)
                              .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })
                              .toUpperCase()}
                          </div>
                          <div className="px-5 text-4xl py-5 font-bold">
                            {title}
                          </div>
                          <div className="pb-24 px-5 text-lg ">
                            Add a quick summary of what the blog post is about.
                          </div>
                        </div>
                      </div>
                    </Link>
                  )
                );
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
