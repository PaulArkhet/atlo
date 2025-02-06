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
      <div className="text-center pb-20">
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
            <img src={background1} alt="" className="mx-auto mb-40 md:mb-0" />
            <img
              src={benefits}
              alt=""
              className="absolute top-44 right-5 lg:top-4 lg:right-[4.3rem] 2xl:top-5 2xl:right-24 mx-auto"
            />
            <div className="workfont absolute top-5 left-5 md:top-20 md:left-11 text-xl md:text-5xl font-bold">
              Benefits
            </div>
            <div className="hidden md:block absolute top-10 left-5 md:top-40 md:left-11 text-left md:text-xl">
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
                className="absolute top-10 left-24 w-[100px] sm:left-32 sm:w-[250px] md:left-16 md:top-0 md:w-[200px] lg:left-32 lg:top-10 2xl:bottom-40 2xl:left-60  2xl:w-auto"
              />
              <div className="text-[20px] sm:text-[24px] xl:text-[40px] font-semibold">
                100% accurate to your design
              </div>
              <div className="xl:text-[28px]">
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
                className="absolute top-14 left-14 w-[200px] sm:top-20 sm:left-20 sm:w-[400px] md:left-3 md:top-10 2xl:left-28 2xl:w-auto"
              />
              <div className="text-[20px] sm:text-[24px] xl:text-[40px] font-semibold">
                Calibrate, visually
              </div>
              <div className="xl:text-[28px] text-[#D9D9D9]">
                Modify components, colours, and layout at any time. Then test
                again.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="relative pt-10 mx-auto mb-52 lg:mb-16 2xl:mb-0">
          <img src={background2} alt="" className="mx-auto" />
          <img
            src={interactiveImg}
            alt=""
            className="absolute top-[12.5rem] right-16 lg:right-24 md:top-14 2xl:right-[12rem] w-[200px] lg:w-[500px] 2xl:w-auto"
          />
          <div className="workfont absolute top-14 left-5 lg:top-20 md:left-14 text-xl lg:text-5xl 2xl:text-[64px] font-bold">
            Interactive
          </div>
          <div className="workfont absolute top-14 left-32 lg:top-36 2xl:top-40 lg:left-14 text-xl lg:text-5xl 2xl:text-[64px] font-bold">
            Prototyping
          </div>
          <div className="absolute top-24 left-5 lg:top-56 2xl:top-64 md:left-14 lg: text-lg 2xl:text-[28px] lg:w-[420px] 2xl:w-[650px]">
            Design your user experience, visually. An intuitive drag-and-drop
            interface makes it easy to turn your ideas into an interactive
            prototype, in minutes.
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="md:flex mx-auto">
          <div className="relative mx-5 mb-3 md:mb-0">
            <img src={frame} alt="" className="" />
            <img
              src={ellipseBlue}
              alt=""
              className="absolute top-5 md:left-7"
            />
            <img
              src={realistic}
              alt=""
              className="absolute top-0 left-14 lg:left-0 lg:top-[-5%] 2xl:top-[-5%] 2xl:left-20 w-[200px] sm:w-auto"
            />
            <div
              className="absolute text-[20px] left-4 bottom-32 sm:text-[25px] sm:bottom-60 md:left-7 lg:text-[20px] lg:bottom-24 lg:left-3 
              2xl:text-[40px] 2xl:left-7 2xl:bottom-56 font-semibold"
            >
              Realistic experiments provide better data
            </div>
            <div className="absolute bottom-6 left-4 sm:bottom-40 lg:bottom-6 lg:left-3 2xl:left-7 2xl:bottom-10 2xl:text-[28px]">
              Interactive prototypes are no longer exclusive to teams that can
              afford to navigate the demands of regular prototyping.
            </div>
          </div>
          <div className="relative mx-5 mb-3 md:mb-0">
            <img src={frame} alt="" className="" />
            <img src={ellipseCyan} alt="" className="absolute top-5 left-7" />
            <img
              src={database}
              alt=""
              className="absolute top-7 left-6 sm:left-28 sm:top-20 lg:left-9 lg:top-7 2xl:left-24 w-[250px] sm:w-auto"
            />
            <div className="absolute bottom-20 left-3 sm:bottom-60 sm:text-[25px] lg:bottom-32 2xl:bottom-56 lg:left-7 text-[20px] 2xl:text-[40px] font-semibold">
              Your Data, Your Experiment
            </div>
            <div className="absolute bottom-6 left-3 sm:bottom-52 lg:bottom-20 2xl:bottom-32 lg:left-7 2xl:text-[28px]">
              Import and test with your data during development, not after.
            </div>
          </div>
          <div className="relative mx-5">
            <img src={frame} alt="" className="" />
            <img src={ellipsePink} alt="" className="absolute top-5 left-7" />
            <img
              src={visual}
              alt=""
              className="absolute top-4 left-10 sm:left-28 sm:top-20 lg:top-4 lg:left-10 2xl:left-28 w-[250px] sm:w-auto"
            />
            <div className="absolute bottom-20 left-2 sm:bottom-60 sm:text-[25px] lg:bottom-32 2xl:bottom-56 lg:left-7 text-[20px] 2xl:text-[40px] font-semibold">
              Drag-and-Drop visual interface
            </div>
            <div className="absolute bottom-6 left-2 sm:bottom-44 lg:bottom-20 lg:left-7 2xl:text-[28px]">
              Generate interactive prototypes without writing (or rewriting) a
              single prompt.
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
