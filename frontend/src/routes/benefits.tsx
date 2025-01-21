import { createFileRoute } from "@tanstack/react-router";
import benefits from "/benefits.png";
import video1 from "/benefitsvideo1.svg";
import video2 from "/benefitsvideo2.svg";
import interactive from "/benefitsinteractive.svg";
import frame14 from "/benefitsframe14.svg";
import frame15 from "/benefitsframe15.svg";
import frame17 from "/benefitsframe17.svg";

export const Route = createFileRoute("/benefits")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px] ">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
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
      <div className="flex flex-col mx-auto">
        <div className="md:flex mx-auto">
          <img src={video1} alt="" />
          <img src={video2} alt="" className="pt-4" />
        </div>
      </div>
      <img src={interactive} alt="" className="pt-10 mx-auto" />
      <div className="flex flex-col mx-auto">
        <div className="md:flex">
          <img src={frame14} alt="" className="mx-auto" />
          <img src={frame15} alt="" className="pb-16" />
          <img src={frame17} alt="" className="pb-20" />
        </div>
      </div>
      <div className="text-center py-10 md:py-32 md:pb-48">
        <div className="text-2xl md:text-6xl font-bold md:pb-10">
          <div>Start prototyping today</div>
        </div>
        <div className="nunitofont bg-gradient-to-r from-[#6654B7] to-[#B754B3] text-xl py-5 my-10 w-[300px] rounded mx-auto">
          R E G I S T E R
        </div>
      </div>
    </main>
  );
}
