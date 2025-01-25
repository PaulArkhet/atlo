import { createFileRoute, Link } from "@tanstack/react-router";
import planet from "/scheduleplanet.svg";
import checkmark from "/checkmark.svg";

export const Route = createFileRoute("/schedule")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="flex flex-col mx-auto md:p-10">
        <div className="md:flex mx-auto">
          <div className="md:mr-20">
            <div className="text-5xl font-bold">
              Want to see it in <br /> action?
            </div>
            <div className="text-xl my-3">
              Schedule a product demonstration with <br /> Arkhet and turn ideas
              into interactions.
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="mr-2" />
              <div className="text-xl my-3">Accelerate product validation</div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="mr-2" />
              <div className="text-xl my-3">
                Reduce costs for design, development, and management.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="mr-2" />
              <div className="text-xl my-3">Ideate, explore, and iterate.</div>
            </div>
            <img src={planet} alt="" />
          </div>
          <div className="md:ml-10 ">
            <form className="flex flex-col p-2 md:p-10 border border-[#837E98] rounded-lg w-[350px] md:w-[400px] mx-auto bg-gradient-to-br from-[#6454B7] to-[#1F164E] bg-opacity-50">
              <input
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Name*"
              />
              <input
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Email*"
              />
              <input
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Your company/organization"
              />
              <input
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Your role"
              />
              <textarea
                className="border border-[#8778D7] bg-[#242424] p-2 my-2"
                rows={4}
                cols={50}
                placeholder="Please share any info that will help us prepare for the demo"
              />
              <div className="px-5 py-3 bg-[#9253E4] tracking-widest my-2 text-center">
                <Link to="/thankyoudemo">BOOK A DEMO</Link>
              </div>
              <div className="text-xl text-center">Ready to buy instead?</div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
