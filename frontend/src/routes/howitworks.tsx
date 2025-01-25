import { createFileRoute, Link } from "@tanstack/react-router";
import step2 from "/hiwstep2.png";
import step3 from "/hiwstep3.png";
import background1 from "/background1.svg";
import checkmark from "/checkmark.svg";
import capy1 from "/howscapy1.svg";
import fadingborder from "/fadingborder.svg";
import fadingbackground2 from "/fadingbackground2.svg";
import ellipse from "/ellipse.png";
import layers from "/homelayers.png";
import cube from "/homecube.png";
import homecubes from "/homecubes.png";

export const Route = createFileRoute("/howitworks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-20 text-[#D9D9D9]">
          HOW IT WORKS
        </div>
        <div className="relative mb-20">
          <img src={background1} alt="" className="mx-auto" />
          <div className="nunitofont tracking-[0.4rem] absolute top-5 left-5 text-sm lg:top-14 lg:left-24 lg:text-3xl text-[#D9D9D9]">
            STEP 1
          </div>
          <div className="hidden lg:block absolute top-32 left-24 text-6xl font-bold">
            Design the{" "}
          </div>
          <div className="hidden lg:block absolute top-48 left-24 text-6xl font-bold">
            interaction flow{" "}
          </div>
          <div className="lg:hidden absolute top-12 left-5 font-bold">
            Design the interaction flow
          </div>
          <div className="lg:absolute top-72 left-24 text-left lg:text-3xl text-[#D9D9D9] lg:w-[500px]">
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 mb-3">
                Build the wireframe with drag-and-drop components.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 my-3">
                Focus on the product interaction you want to validate.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 my-3">All you need is an idea.</div>
            </div>
          </div>
          <div className="lg:absolute top-[-5%] right-10 mb-40 md:mb-0">
            <div className="relative top-0 right-0">
              <img src={fadingborder} alt="" className="w-[1050px]" />
              <img
                src={capy1}
                alt=""
                className="absolute top-6 left-0 md:left-5"
              />
            </div>
          </div>
        </div>
      </div>
      <img src={step2} alt="" className="mx-auto my-10 md:mt-10 md:mb-20" />
      <img src={step3} alt="" className="mx-auto" />
      <div className="text-center py-10 md:py-32">
        <div className="text-2xl md:text-6xl font-bold md:pb-10">
          <div>Start prototyping today</div>
        </div>
        <Link to="/register">
          <div className="nunitofont bg-gradient-to-r from-[#6654B7] to-[#B754B3] text-xl py-5 my-10 w-[300px] rounded mx-auto">
            R E G I S T E R
          </div>
        </Link>
      </div>
    </main>
  );
}
