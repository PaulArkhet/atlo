import { createFileRoute } from "@tanstack/react-router";
import banner from "/blogbanner.svg";
import prev1 from "/blogprev1.svg";
import prev2 from "/blogprev2.svg";
import prev3 from "/blogprev3.svg";

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
      <div className="text-center pb-20">
        <div className="text-2xl md:text-6xl font-bold">
          <div>Blog</div>
        </div>
      </div>
      <img src={banner} alt="" />
      <div className="flex flex-col mx-auto pb-32">
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">Featured</div>
          <div className="md:flex">
            <img src={prev1} alt="" className="my-2 md:my-0" />
            <img src={prev2} alt="" className="my-2 md:my-0" />
          </div>
        </div>
        <div className="mx-auto">
          <div className="text-5xl font-bold py-10">All posts</div>
          <div className="md:flex">
            <img src={prev3} alt="" className="my-2 md:my-0" />
            <img src={prev3} alt="" className="my-2 md:my-0" />
            <img src={prev3} alt="" className="my-2 md:my-0" />
          </div>
        </div>
      </div>
    </main>
  );
}
