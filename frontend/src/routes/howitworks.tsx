import { createFileRoute, Link } from "@tanstack/react-router";
import background1 from "/background1.svg";
import checkmark from "/checkmark.svg";
import capy1 from "/howscapy1.svg";
import fadingborder from "/fadingborder.svg";
import background2 from "/hiwstep2bg.svg";
import step2img from "/hiwstep2img.svg";
import step3img from "/hiwstep3img.svg";
import redCloud from "/hiwredcloud.svg";
import saturn from "/hiwsaturn.svg";
import ship from "/hiwship.svg";
import eclipse from "/hiweclipse.svg";
import bluePlanet from "/hiwblueplanet.svg";

export const Route = createFileRoute("/howitworks")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <img src={redCloud} alt="" className="absolute top-0 left-0 z-0" />
      <img
        src={saturn}
        alt=""
        className="absolute top-[44rem] md:left-32 z-0 w-[300px] md:w-auto"
      />
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-20 text-[#D9D9D9]">
          HOW IT WORKS
        </div>
        <div className="flex flex-col mx-auto z-10">
          <div className="relative md:mb-20 mx-auto z-20">
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
            <div className="lg:absolute top-[-5%] right-10 mb-20 md:mb-0">
              <div className="relative top-0 right-0">
                <img src={fadingborder} alt="" className="md:w-[1050px]" />
                <img
                  src={capy1}
                  alt=""
                  className="absolute top-6 left-0 md:left-5 w-[90%] md:w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-10">
        <div className="relative md:mb-20">
          <img src={background2} alt="" className="mx-auto" />
          <div className="nunitofont tracking-[0.4rem] absolute top-5 right-[18rem] md:right-5 text-sm lg:top-14 lg:right-[34rem] lg:text-3xl text-[#D9D9D9]">
            STEP 2
          </div>
          <div className="hidden lg:block absolute top-32 right-[17rem] text-6xl font-bold">
            Add your style{" "}
          </div>
          <div className="hidden lg:block absolute top-48 right-[33rem] text-6xl font-bold">
            guide{" "}
          </div>
          <div className="lg:hidden absolute top-12 left-5 font-bold">
            Add your styleguide
          </div>
          <div className="lg:absolute top-72 right-48 text-left lg:text-3xl text-[#D9D9D9] lg:w-[500px]">
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 mb-3">
                Upload your design system or build a new one.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 my-3">
                Adjust components and attributes to suit your objectives.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 my-3">
                Prototypes are generated to the specifications of your design.
              </div>
            </div>
          </div>
          <div className="lg:absolute top-[-5%] left-10 mb-20 md:mb-0">
            <div className="relative top-0 right-0">
              <img src={fadingborder} alt="" className="md:w-[1050px]" />
              <img
                src={step2img}
                alt=""
                className="absolute top-6 left-0 md:left-5 w-[90%] md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:p-10">
        <div className="relative mb-20">
          <img src={background1} alt="" className="mx-auto" />
          <div className="nunitofont tracking-[0.4rem] absolute top-5 left-5 text-sm lg:top-14 lg:left-24 lg:text-3xl text-[#D9D9D9]">
            STEP 3
          </div>
          <div className="hidden lg:block absolute top-32 left-24 text-6xl font-bold">
            Generate{" "}
          </div>
          <div className="hidden lg:block absolute top-48 left-24 text-6xl font-bold">
            Prototype{" "}
          </div>
          <div className="lg:hidden absolute top-12 left-5 font-bold">
            Generate Prototype
          </div>
          <div className="lg:absolute top-72 left-24 text-left lg:text-3xl text-[#D9D9D9] lg:w-[550px]">
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 mb-3">
                Generate an interactive prototype with a single click.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 my-3">
                Share the prototype with your desired audience privately and
                securely.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="" />
              <div className="ml-2 my-3">
                Integrate feedback and make quick iterations to remain agile.
              </div>
            </div>
          </div>
          <div className="lg:absolute top-[-5%] right-10 mb-40 md:mb-0">
            <div className="relative top-0 right-0">
              <img src={fadingborder} alt="" className="md:w-[1050px]" />
              <img
                src={step3img}
                alt=""
                className="absolute top-6 left-0 md:left-5 w-[90%] md:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center py-10 md:py-32">
        <div className="text-2xl md:text-6xl font-bold md:pb-10">
          <div className="z-10">Start prototyping today</div>
        </div>
        <Link to="/register" className="z-10">
          <div className="nunitofont bg-gradient-to-r from-[#6654B7] to-[#B754B3] text-xl py-5 my-10 w-[300px] rounded mx-auto">
            R E G I S T E R
          </div>
        </Link>
        <img
          src={bluePlanet}
          alt=""
          className="absolute md:bottom-[-2%] left-0 z-0"
        />
        <img
          src={ship}
          alt=""
          className="absolute bottom-7 right-[32rem] z-10"
        />
        <img
          src={eclipse}
          alt=""
          className="absolute bottom-[-2%] right-96 z-0"
        />
      </div>
    </main>
  );
}
