import { createFileRoute } from "@tanstack/react-router";
import maskGroup from "/aboutmaskgroup.svg";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0">
          ABOUT
        </div>
      </div>
      <div className="text-center pb-20">
        <div className="text-2xl md:text-6xl font-bold">
          <div>The humanity of design cannot be automated</div>
        </div>
        <div className="py-7 md:text-2xl pb-10">
          <div className="">
            We're on a mission to transform the future of the design industry by
            making it possible for anyone to <br /> build fully interactive
            design prototypes without any design or technical expertise.{" "}
          </div>
        </div>
        <img src={maskGroup} alt="" className="mx-auto" />
      </div>
    </main>
  );
}
