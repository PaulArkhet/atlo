import { createFileRoute } from "@tanstack/react-router";
import prev1 from "/blogprev1.svg";
import prev2 from "/blogprev2.svg";
import prev3 from "/blogprev3.svg";
import background1 from "/background1.svg";
import fadingBorder from "/resourcesfadingborder.svg";
import blogImg from "/resourcesblog1img.svg";
import clock from "/clock.svg";
import largeFrame from "/bloglargeframe.svg";
import largeImage from "/bloglargeimg.svg";
import largeImage2 from "/bloglargeimg2.svg";
import smallFrame from "/blogsmallframe.svg";
import smallImage from "/blogsmallimage.svg";

export const Route = createFileRoute("/resources")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          RESOURCES
        </div>
      </div>
      <div className="text-center pb-10 md:pb-20">
        <div className="text-2xl md:text-6xl font-bold">
          <div>Blog</div>
        </div>
      </div>
      <div className="md:hidden border-2 bg-gradient-to-r from-[#6F4B92] via-[#584F8F] to-[#404A8B] border-[#464071] rounded-[10px]">
        <img src={blogImg} alt="" />
        <div className="p-5">
          <div className="nunitofont tracking-[0.4rem] py-1">
            DECEMBER 11, 2024
          </div>
          <div className="text-2xl py-1 font-bold">
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
          <div className="nunitofont tracking-[0.4rem] py-1">
            NOVEMBER 25, 2024
          </div>
          <div className="text-2xl py-1 font-bold">
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
          <div className="nunitofont tracking-[0.4rem] py-1">
            NOVEMBER 1, 2024
          </div>
          <div className="text-2xl py-1 font-bold">
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
          <div className="nunitofont tracking-[0.4rem] py-1">
            OCTOBER 15, 2024
          </div>
          <div className="text-2xl py-1 font-bold">
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
          <div className="nunitofont tracking-[0.4rem] py-1">
            OCTOBER 12, 2024
          </div>
          <div className="text-2xl py-1 font-bold">
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
          <div className="nunitofont tracking-[0.4rem] py-1">
            OCTOBER 5, 2024
          </div>
          <div className="text-2xl py-1 font-bold">
            Previous blog posts go here
          </div>
          <div className="py-1">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
        </div>
      </div>
      <div className="hidden md:block relative mb-20">
        <img src={background1} alt="" className="mx-auto" />
        <div className="nunitofont tracking-[0.4rem] absolute top-5 left-5 text-sm lg:top-14 lg:left-32 lg:text-3xl text-[#D9D9D9]">
          DECEMBER 11, 2024
        </div>
        <div className="lg:block absolute top-32 left-32 text-6xl font-bold w-[550px]">
          Blog title, latest post featured here.
        </div>
        <div className="lg:absolute top-72 left-32 text-left lg:text-3xl text-[#D9D9D9] lg:w-[500px]">
          <div className="ml-2 mb-3 w-[650px]">
            Add a quick summary of what the blog post is about. Clicking this
            whole section takes user to the full blog post. Keep this 2-4 lines.
          </div>
          <div className="flex mt-5">
            <img src={clock} alt="" />
            <div className="text-[24px]">3 minute read</div>
          </div>
        </div>
        <div className="lg:absolute top-[-5%] right-44 mb-40 md:mb-0">
          <div className="relative top-2 right-0">
            <img src={fadingBorder} alt="" className="" />
            <img
              src={blogImg}
              alt=""
              className="absolute top-4 left-0 md:left-4 w-[90%] md:w-auto"
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-col mx-auto pb-32">
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">Featured</div>
          <div className="md:flex">
            <div className="relative mx-2">
              <img src={largeFrame} alt="" />
              <img src={largeImage} alt="" className="absolute top-1 left-1" />
              <div className="absolute bottom-64 left-8 nunitofont tracking-[0.3rem] text-[24px]">
                NOVEMBER 25, 2024
              </div>
              <div className="absolute bottom-44 left-8 text-[48px] font-bold">
                Previous blog posts go here
              </div>
              <div className="absolute bottom-10 left-8 text-[28px]">
                Add a quick summary of what the blog post is about. Clicking
                this whole section takes user to the full blog post. Keep this
                2-4 lines.
              </div>
            </div>
            <div className="relative mx-2">
              <img src={largeFrame} alt="" />
              <img src={largeImage2} alt="" className="absolute top-1 left-1" />
              <div className="absolute bottom-64 left-8 nunitofont tracking-[0.3rem] text-[24px]">
                NOVEMBER 25, 2024
              </div>
              <div className="absolute bottom-44 left-8 text-[48px] font-bold">
                Previous blog posts go here
              </div>
              <div className="absolute bottom-10 left-8 text-[28px]">
                Add a quick summary of what the blog post is about. Clicking
                this whole section takes user to the full blog post. Keep this
                2-4 lines.
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">All posts</div>
          <div className="md:flex">
            <div className="relative mx-2">
              <img src={smallFrame} alt="" className="" />
              <img
                src={smallImage}
                alt=""
                className="absolute top-[0.15rem] left-[0.15rem]"
              />
              <div className="absolute bottom-48 left-5 nunitofont tracking-[0.3rem] text-[24px]">
                OCTOBER 15, 2024
              </div>
              <div className="absolute bottom-20 left-5 text-[40px] font-bold">
                Previous blog posts go here
              </div>
              <div className="absolute bottom-10 left-5 text-[20px] ">
                Add a quick summary of what the blog post is about.
              </div>
            </div>
            <div className="relative mx-2">
              <img src={smallFrame} alt="" className="" />
              <img
                src={smallImage}
                alt=""
                className="absolute top-[0.15rem] left-[0.15rem]"
              />
              <div className="absolute bottom-48 left-5 nunitofont tracking-[0.3rem] text-[24px]">
                OCTOBER 15, 2024
              </div>
              <div className="absolute bottom-20 left-5 text-[40px] font-bold">
                Previous blog posts go here
              </div>
              <div className="absolute bottom-10 left-5 text-[20px] ">
                Add a quick summary of what the blog post is about.
              </div>
            </div>
            <div className="relative mx-2">
              <img src={smallFrame} alt="" className="" />
              <img
                src={smallImage}
                alt=""
                className="absolute top-[0.15rem] left-[0.15rem]"
              />
              <div className="absolute bottom-48 left-5 nunitofont tracking-[0.3rem] text-[24px]">
                OCTOBER 15, 2024
              </div>
              <div className="absolute bottom-20 left-5 text-[40px] font-bold">
                Previous blog posts go here
              </div>
              <div className="absolute bottom-10 left-5 text-[20px] ">
                Add a quick summary of what the blog post is about.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
