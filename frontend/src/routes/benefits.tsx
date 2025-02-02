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
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          BENEFITS
        </div>
      </div>
      <div className="text-center pb-20">
        <div className="text-2xl md:text-6xl font-bold">
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
              className="absolute top-40 right-5 md:top-5 md:right-24 mx-auto"
            />
            <div className="absolute top-5 left-5 md:top-20 md:left-11 text-xl md:text-5xl font-bold">
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
        <div className="md:flex mx-auto pt-10">
          <div className="relative mx-5 mb-5 md:mb-0">
            <img src={fadingbackground3} alt="" className="" />
            <img
              src={ellipse}
              alt=""
              className="absolute top-5 left-20 md:bottom-40 md:left-32 w-[200px] md:w-auto"
            />
            <img
              src={layersVertical}
              alt=""
              className="absolute top-0 left-32 md:bottom-40 md:left-60 w-[100px] md:w-auto"
            />
            <div className="md:text-[40px] absolute bottom-20 md:bottom-28 left-5 font-semibold">
              100% accurate to your design
            </div>
            <div className="hidden md:block absolute bottom-5 left-5 md:text-[28px] text-[#D9D9D9]">
              Prototypes adhere to the requirements of your design, <br /> every
              time. Import your own or try something new.
            </div>
            <div className="md:hidden absolute bottom-2 left-5 ">
              Prototypes adhere to the requirements of your design, every time.
              Import your own or try something new.
            </div>
          </div>
          <div className="relative mx-5 mb-5 md:mb-0">
            <img src={fadingbackground3} alt="" className="" />
            <img
              src={ellipse}
              alt=""
              className="absolute top-5 left-20 md:bottom-40 md:left-32 w-[200px] md:w-auto"
            />
            <img
              src={calibrate}
              alt=""
              className="absolute top-5 left-20 md:left-28 w-[200px] md:w-auto"
            />
            <div className="md:text-[40px] absolute bottom-[5rem] md:bottom-28 left-5 font-semibold">
              Calibrate, visually
            </div>
            <div className="absolute bottom-5 left-5 md:text-[28px] text-[#D9D9D9]">
              Modify components, colours, and layout at any time. Then test
              again.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="relative pt-10 mx-auto mb-52 md:mb-0">
          <img src={background2} alt="" className="mx-auto" />
          <img
            src={interactiveImg}
            alt=""
            className="absolute top-44 right-24 md:top-14 md:right-[12rem] w-[200px] md:w-auto"
          />
          <div className="absolute top-14 left-5 md:top-20 md:left-14 text-xl md:text-[64px] font-bold">
            Interactive
          </div>
          <div className="absolute top-14 left-32 md:top-40 md:left-14 text-xl md:text-[64px] font-bold">
            Prototyping
          </div>
          <div className="absolute top-24 left-5 md:top-64 md:left-14 md:text-[28px] md:w-[650px]">
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
              className="absolute top-0 left-20 md:top-[-5%] md:left-20 w-[200px] md:w-auto"
            />
            <div className="absolute bottom-36 md:bottom-56 left-7 text-[20px] md:left-7 md:text-[40px] font-semibold">
              Realistic experiments provide better data
            </div>
            <div className="absolute bottom-10 left-7 md:text-[28px]">
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
              className="absolute top-7 left-14 md:left-24 w-[250px] md:w-auto"
            />
            <div className="absolute bottom-32 md:bottom-56 left-7 text-[20px] md:text-[40px] font-semibold">
              Your Data, Your Experiment
            </div>
            <div className="absolute bottom-20 md:bottom-32 left-7 md:text-[28px]">
              Import and test with your data during development, not after.
            </div>
          </div>
          <div className="relative mx-5">
            <img src={frame} alt="" className="" />
            <img src={ellipsePink} alt="" className="absolute top-5 left-7" />
            <img
              src={visual}
              alt=""
              className="absolute top-4 left-10 md:left-28 w-[250px] md:w-auto"
            />
            <div className="absolute bottom-32 md:bottom-56 left-7 text-[20px] md:text-[40px] font-semibold">
              Drag-and-Drop visual interface
            </div>
            <div className="absolute bottom-20 left-7 md:text-[28px]">
              Generate interactive prototypes without writing (or rewriting) a
              single prompt.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-10 md:py-32 md:pb-48">
        <div className="text-2xl md:text-6xl font-bold md:pb-10">
          <div>Start prototyping today</div>
        </div>
        <div className="nunitofont bg-gradient-to-r from-[#6654B7] to-[#B754B3] text-xl py-5 my-10 w-[300px] rounded mx-auto">
          <Link to="/register">R E G I S T E R</Link>
        </div>
      </div>
    </main>
  );
}
