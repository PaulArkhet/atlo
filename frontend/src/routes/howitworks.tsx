import { createFileRoute } from "@tanstack/react-router";
import step1 from "/hiwstep1.png";
import step2 from "/hiwstep2.png";
import step3 from "/hiwstep3.png";

export const Route = createFileRoute("/howitworks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-20">
          HOW IT WORKS
        </div>
        <img src={step1} alt="" />
      </div>
      <img src={step2} alt="" className="mx-auto my-10 md:mt-10 md:mb-20" />
      <img src={step3} alt="" className="mx-auto" />
      <div className="text-center py-10 md:py-32">
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
