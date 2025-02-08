import { createFileRoute, Link } from "@tanstack/react-router";
import benefits from "/benefits.svg";
import background1 from "/background1.svg";
import background2 from "/background2.svg";
import fadingbackground3 from "/fadingbackground3.svg";
import ellipse from "/ellipse.png";
import layersVertical from "/benefitslayersvertical.svg";
import calibrate from "/benefitscalibrate.svg";
import interactiveImg from "/benefitsinteractiveimg.svg";
import frame from "/benefitsframe.svg";
import realistic from "/benefitsrealistic.svg";
import database from "/benefitsdatabase.svg";
import ellipseBlue from "/benefitsellipseblue.svg";
import ellipseCyan from "/benefitsellipsecyan.svg";
import ellipsePink from "/benefitsellipsepink.svg";
import visual from "/benefitsvisual.svg";

export const Route = createFileRoute("/benefits")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px] ">
      <div className="md:p-10">
        <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          BENEFITS
        </div>
      </div>
      <div className="text-center pb-20 lg:pb-0">
        <div className="workfont text-2xl md:text-6xl font-bold">
          <div>Everyone has ideas. Now anyone can build.</div>
        </div>
        <div className="py-7 md:text-2xl pb-10">
          <div className="">
            Whether you're an experienced product leader or new to product
            design, Arkhet makes it easier to validate product ideas.
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <div className="relative mx-auto">
            <img src={background1} alt="" className="mx-auto mb-40 lg:mb-0" />
            <img
              src={benefits}
              alt=""
              className="absolute top-44 right-5 lg:top-4 lg:w-[60vw] lg:right-14 2xl:top-5 2xl:right-24 mx-auto"
            />
            <div className="workfont absolute top-5 left-5 lg:top-20 md:left-11 text-xl md:text-5xl font-bold">
              Benefits
            </div>
            <div className="hidden md:block absolute top-10 left-5 md:top-20 lg:top-40 md:left-11 text-left md:text-xl">
              Produce higher quality prototypes in significantly less <br />{" "}
              time in a shift for the entire industry. Arkhet makes it <br />{" "}
              easier to conduct rapid prototyping with higher quality <br /> and
              fewer resources.
            </div>
            <div className="md:hidden absolute top-14 left-5 text-left">
              Produce higher quality prototypes in significantly less time in a
              shift for the entire industry. Arkhet makes it easier to conduct
              rapid prototyping with higher quality and fewer resources.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="md:grid grid-cols-2 gap-5 mx-auto p-5 pt-10">
          <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
            <div className="rounded-[8px] p-3 bg-gradient-to-b from-[#111111] to-transparent bg-opacity-40 mt-[2px] mx-[2px] from-50% relative">
              <img src={ellipse} alt="" className="mx-auto" />
              <img
                src={layersVertical}
                alt=""
                className="absolute top-2 left-[25%] w-[40vw] md:left-[20%] md:top-0 md:w-[25vw] xl:left-[30%] lg:w-auto"
              />
              <div className="text-[20px] sm:text-[30px] xl:text-[40px] font-semibold">
                100% accurate to your design
              </div>
              <div className="sm:text-[20px] xl:text-[28px]">
                Prototypes adhere to the requirements of your design, every
                time. Import your own or try something new.
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
            <div className="rounded-[8px] p-3 bg-gradient-to-b from-[#111111] to-transparent bg-opacity-40 mt-[2px] mx-[2px] from-50% relative">
              <img src={ellipse} alt="" className="mx-auto" />
              <img
                src={calibrate}
                alt=""
                className="absolute top-[10%] left-[10%] w-[70vw] md:top-10 md:left-[5%] 2xl:left-28 lg:w-auto"
              />
              <div className="text-[20px] sm:text-[30px] xl:text-[40px] font-semibold">
                Calibrate, visually
              </div>
              <div className="sm:text-[20px] xl:text-[28px]">
                Modify components, colours, and layout at any time. Then test
                again.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="relative pt-10 mx-auto mb-52 md:mb-16 2xl:mb-0">
          <img src={background2} alt="" className="mx-auto" />
          <img
            src={interactiveImg}
            alt=""
            className="absolute w-[50vw] top-[12.5rem] right-[25%] md:w-[200px] md:right-24 lg:right-24 md:top-14 2xl:right-[12rem] lg:w-[500px] 2xl:w-auto"
          />
          <div className="workfont absolute top-14 left-5 md:top-20 md:left-14 text-xl md:text-5xl 2xl:text-[64px] font-bold">
            Interactive
          </div>
          <div className="workfont absolute top-14 left-[8.5rem] md:top-36 2xl:top-40 md:left-14 text-xl md:text-5xl 2xl:text-[64px] font-bold">
            Prototyping
          </div>
          <div className="absolute top-24 left-5 md:top-56 2xl:top-64 md:left-14 lg: text-lg 2xl:text-[28px] lg:w-[420px] 2xl:w-[650px]">
            Design your user experience, visually. An intuitive drag-and-drop
            interface makes it easy to turn your ideas into an interactive
            prototype, in minutes.
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="md:grid grid-cols-3 gap-2 mx-auto">
          <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col my-2">
            <div className="rounded-[8px] p-3 bg-[#111111] mt-[2px] mx-[2px] from-50% relative">
              <img src={ellipseBlue} alt="" className="mx-auto " />
              <img
                src={realistic}
                alt=""
                className="absolute left-[15%] top-[-5%] w-[60vw] md:w-[25vw] md:left-[10%] lg:w-[20vw] lg:left-[20%] 2xl:top-[-5%] 2xl:left-20 sm:w-auto"
              />
              <div
                className="text-[20px] md:text-[21px] lg:text-[20px] 
              2xl:text-[40px] font-semibold md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-20"
              >
                Realistic experiments provide better data
              </div>
              <div className="2xl:text-[28px]">
                Interactive prototypes are no longer exclusive to teams that can
                afford to navigate the demands of regular prototyping.
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col my-2">
            <div className="rounded-[8px] p-3 bg-[#111111] mt-[2px] mx-[2px] from-50% relative 2xl:pb-32">
              <img src={ellipseCyan} alt="" className="mx-auto" />
              <img
                src={database}
                alt=""
                className="absolute top-[10%] left-[20%] w-[50vw] md:w-[20vw] md:top-[5%] md:left-[20%]"
              />
              <div
                className="text-[20px] md:text-[21px] lg:text-[20px] 
              2xl:text-[40px] font-semibold"
              >
                Your Data, Your Experiment
              </div>
              <div className="2xl:text-[28px] md:pb-[2.7rem] lg:pb-[4.7rem] xl:pb-5 2xl:pb-7">
                Import and test with your data during development, not after.
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col my-2">
            <div className="rounded-[8px] p-3 bg-[#111111] mt-[2px] mx-[2px] from-50% relative md:pb-8 lg:pb-[5.5rem] xl:pb-8 2xl:pb-24">
              <img src={ellipsePink} alt="" className="mx-auto" />
              <img
                src={visual}
                alt=""
                className="absolute top-[5%] left-[20%] w-[50vw] md:w-[20vw] md:top-[2%]"
              />
              <div
                className="text-[20px] md:text-[21px] lg:text-[20px] 
              2xl:text-[40px] font-semibold"
              >
                Drag-and-Drop visual interface
              </div>
              <div className="2xl:text-[28px]">
                Generate interactive prototypes without writing (or rewriting) a
                single prompt.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-10 md:py-32 md:pb-48">
        <div className="workfont text-2xl md:text-6xl font-bold md:pb-10">
          <div>Start prototyping today</div>
        </div>
        <div className=" bg-gradient-to-r from-[#6654B7] to-[#B754B3] text-xl py-5 my-10 w-[300px] rounded mx-auto">
          <Link to="/register">R E G I S T E R</Link>
        </div>
      </div>
    </main>
  );
}
