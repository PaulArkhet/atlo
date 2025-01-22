import { createFileRoute, Link } from "@tanstack/react-router";
import group17 from "/subscribegroup17.svg";

export const Route = createFileRoute("/thankyoudemo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <img src={group17} alt="" className="absolute bottom-0 right-0 z-0" />
      <div className="flex flex-col mx-auto pb-80 z-10">
        <div className="md:pt-44 mx-auto">
          <div className="text-5xl pb-5 font-bold">
            Thank you for your interest in Arkhet
          </div>
          <div className="py-5 text-center">
            We’ll be in touch with you shortly.
          </div>
          <div className="py-5 text-center">
            Meanwhile, learn more about what we do
          </div>
          <div className="flex flex-col mx-auto w-[200px] text-center z-20">
            <Link
              to="/about"
              className="nunitofont px-5 py-3 bg-[#9253E4] tracking-widest my-2 z-20"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
