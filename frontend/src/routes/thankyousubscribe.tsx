import { createFileRoute, Link } from "@tanstack/react-router";
import frame1 from "/thankyouregisterframe1.svg";

export const Route = createFileRoute("/thankyousubscribe")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <img src={frame1} alt="" className="absolute bottom-0 right-0 z-0" />
      <div className="flex flex-col mx-auto pb-96 z-10">
        <div className="md:pt-44 mx-auto z-20">
          <div className="text-5xl pb-5 font-bold">
            Thank you for subscribing!
          </div>
          <div className="py-5 text-center text-xl"></div>
          <div className="flex flex-col mx-auto w-[200px] text-center">
            <Link
              to="/"
              className="nunitofont px-5 py-3 bg-[#9253E4] tracking-widest my-2"
            >
              HEAD HOME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
