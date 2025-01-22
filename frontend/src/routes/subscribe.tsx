import { createFileRoute } from "@tanstack/react-router";
import group17 from "/subscribegroup17.svg";

export const Route = createFileRoute("/subscribe")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] p-3 pt-[100px] text-[#D9D9D9] md:text-2xl overflow-hidden">
      <img src={group17} alt="" className="absolute bottom-0 right-0 z-0" />
      <div className="flex flex-col mx-auto pb-96 z-10">
        <div className="md:pt-44 mx-auto">
          <div className="text-5xl pb-12">
            Subscribe to get the latest updates
          </div>
          <form action="" className="flex flex-col w-[300px] mx-auto">
            <input
              type="text"
              className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
              placeholder="Email*"
            />
            <button className="nunitofont px-5 py-3 bg-[#9253E4] tracking-widest my-2">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
