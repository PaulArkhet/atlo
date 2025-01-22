import { createFileRoute } from "@tanstack/react-router";
import logo from "/arkhet-logo-white.png";
import rectangle from "/registerrectangle.svg";
import group17 from "/subscribegroup17.svg";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[70px] relative overflow-hidden">
      <img src={group17} alt="" className="absolute bottom-0 right-0 z-0" />
      <img
        src={rectangle}
        alt=""
        className="z-0 absolute top-[-10] left-[33%] opacity-40"
      />
      <div className="z-10 pb-20">
        <img src={logo} alt="" className="mx-auto pt-32" />
        <div className="text-center text-5xl py-2">Create an account</div>
        <div className="text-center py-2">
          Accelerated Experimentation starts today
        </div>
        <form
          action=""
          className="flex flex-col p-2 pb-32 b w-[350px] md:w-[400px] mx-auto"
        >
          <input
            type="text"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2"
            placeholder="Name"
          />
          <input
            type="text"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2"
            placeholder="Password"
          />
          <button className="nunitofont px-5 py-3 bg-[#9253E4] tracking-widest my-2">
            CREATE
          </button>
          <div className="text-xl text-center py-3">
            Already have an account? <span className="font-bold">Log in</span>
          </div>
        </form>
      </div>
    </main>
  );
}
