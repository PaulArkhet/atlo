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
import { useEffect } from "react";

export const Route = createFileRoute("/howitworks")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    const images = [
      background1,
      capy1,
      fadingborder,
      background2,
      step2img,
      step3img,
      redCloud,
      saturn,
      ship,
      eclipse,
      bluePlanet,
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px] overflow-hidden">
      <img src={redCloud} alt="" className="absolute top-0 left-0 z-0" />
      <img
        src={saturn}
        alt=""
        className="absolute top-[44rem] md:left-32 z-0 w-[300px] md:w-auto"
      />
      <div className="md:p-10">
        <div className="tracking-widest text-center text-xl pb-5 md:pb-20 text-[#D9D9D9]">
          HOW IT WORKS
        </div>
        <div className="flex flex-col mx-auto z-10">
          <div className="relative 2xl:mb-20 mx-auto z-20">
            <img src={background1} alt="" className="mx-auto" />
            <div className="tracking-[0.4rem] absolute top-5 left-5 text-sm lg:top-10 lg:left-10 2xl:top-14 2xl:left-24 2xl:text-3xl text-[#D9D9D9]">
              STEP 1
            </div>
            <div className="workfont hidden lg:block absolute top-20 left-10 2xl:top-32 2xl:left-24 text-4xl 2xl:text-6xl font-bold">
              Design the{" "}
            </div>
            <div className="workfont hidden lg:block absolute top-32 left-10 2xl:top-48 2xl:left-24 text-4xl 2xl:text-6xl font-bold">
              interaction flow{" "}
            </div>
            <div className="workfont sm:text-4xl lg:hidden absolute top-12 left-5 font-bold">
              Design the interaction flow
            </div>
            <div className="lg:absolute top-48 left-10 2xl:left-24 2xl:top-72 text-left 2xl:text-3xl text-[#D9D9D9] lg:w-[500px]">
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
            <div className="lg:absolute top-[-5%] left-[32rem] 2xl:left-[40rem] mb-20 md:mb-0 bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
              <div className="rounded-[8px] p-4 bg-gradient-to-b from-[#111111] to-transparent bg-opacity-40 mt-[2px] mx-[2px] ">
                <img src={capy1} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto z-10 md:p-10">
        <div className="relative 2xl:mb-20 mx-auto">
          <img src={background2} alt="" className="mx-auto" />
          <div className="tracking-[0.4rem] absolute top-5 right-[14.5rem] sm:right-[31rem] md:right-5 lg:top-10 text-sm 2xl:top-14 lg:right-[29rem] 2xl:text-3xl text-[#D9D9D9]">
            STEP 2
          </div>
          <div className="workfont hidden lg:block absolute top-20 right-[19rem] text-4xl 2xl:top-32 2xl:right-[12rem] 2xl:text-6xl font-bold">
            Add your style{" "}
          </div>
          <div className="workfont hidden lg:block absolute top-32 right-[28.5rem] text-4xl 2xl:top-48 2xl:right-[28rem] 2xl:text-6xl font-bold">
            guide{" "}
          </div>
          <div className="workfont sm:text-4xl lg:hidden absolute top-12 left-5 font-bold">
            Add your styleguide
          </div>
          <div className="lg:absolute top-48 right-[3rem] 2xl:right-[7rem] 2xl:top-72 text-left 2xl:text-3xl text-[#D9D9D9] lg:w-[500px]">
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
          <div className="lg:absolute top-[-5%] left-10 lg:left-[-3%] 2xl:left-[-5%] mb-20 md:mb-0">
            <div className="relative top-0 right-0">
              <img
                src={fadingborder}
                alt=""
                className="lg:w-[50%] 2xl:w-[1050px]"
              />
              <img
                src={step2img}
                alt=""
                className="absolute top-3 left-4 md:left-5 md:top-6 w-[90%] lg:w-[46%] 2xl:w-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto z-10 md:p-10">
        <div className="relative lg:mb-20 mx-auto">
          <img src={background1} alt="" className="mx-auto" />
          <div className="tracking-[0.4rem] absolute top-5 left-5 text-sm lg:top-10 lg:left-10 2xl:top-14 2xl:left-24 2xl:text-3xl text-[#D9D9D9]">
            STEP 3
          </div>
          <div className="workfont hidden lg:block absolute top-20 left-10 2xl:top-32 2xl:left-24 text-4xl 2xl:text-6xl font-bold">
            Generate{" "}
          </div>
          <div className="workfont hidden lg:block absolute top-32 left-10 2xl:top-48 2xl:left-24 text-4xl 2xl:text-6xl font-bold">
            Prototype{" "}
          </div>
          <div className="workfont sm:text-4xl lg:hidden absolute top-12 left-5 font-bold">
            Generate Prototype
          </div>
          <div className="lg:absolute top-48 left-10 2xl:left-24 2xl:top-72 text-left 2xl:text-3xl text-[#D9D9D9] lg:w-[500px]">
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
          <div className="lg:absolute top-[-5%] left-[32rem] 2xl:left-[40rem] mb-20 md:mb-0 bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
            <div className="rounded-[8px] p-4 bg-gradient-to-b from-[#111111] to-transparent bg-opacity-40 mt-[2px] mx-[2px] ">
              <img src={step3img} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative text-center pb-48 lg:pb-52 2xl:pb-32 2xl:py-32">
        <div className="text-2xl md:text-6xl font-bold md:pb-10">
          <div className="workfont z-10">Start prototyping today</div>
        </div>
        <Link to="/register" className="z-10">
          <div className="bg-gradient-to-r from-[#6654B7] to-[#B754B3] text-xl py-5 my-10 w-[300px] rounded mx-auto">
            R E G I S T E R
          </div>
        </Link>
        <img
          src={bluePlanet}
          alt=""
          className="absolute bottom-[-3%] sm:bottom-[-35%] sm:left-[-50%] lg:bottom-[-22%] lg:left-[-20%] 2xl:left-[-10%] z-0"
        />
        <img
          src={ship}
          alt=""
          className="absolute bottom-10 right-[7rem] sm:right-[2rem] lg:bottom-7 lg:right-[10rem] 2xl:bottom-5 2xl:right-[20rem] z-10"
        />
        <img
          src={eclipse}
          alt=""
          className="absolute bottom-[-3%] right-2 sm:right-[-12%] xl:right-[3.5rem] 2xl:right-[13.5rem] z-0"
        />
      </div>
    </main>
  );
}
