import { createFileRoute } from "@tanstack/react-router";
import benefits from "/benefits.png";

export const Route = createFileRoute("/benefits")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0">
          BENEFITS
        </div>
      </div>
      <div className="text-center pb-20">
        <div className="text-2xl md:text-6xl font-bold">
          <div>Everyone has ideas. Now anyone can build.</div>
        </div>
        <div className="py-7 md:text-2xl pb-10">
          <div className="">
            Whether you're an experienced product leader or new to product
            design, Arkhet makes it easier to validate product ideas.
          </div>
        </div>
        <img src={benefits} alt="" className="mx-auto" />
      </div>
    </main>
  );
}
