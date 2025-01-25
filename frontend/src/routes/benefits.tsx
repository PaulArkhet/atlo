import { createFileRoute, Link } from "@tanstack/react-router";
import benefits from "/benefits.svg";
import video1 from "/benefitsvideo1.svg";
import video2 from "/benefitsvideo2.svg";
import interactive from "/benefitsinteractive.svg";
import frame14 from "/benefitsframe14.svg";
import frame15 from "/benefitsframe15.svg";
import frame17 from "/benefitsframe17.svg";
import background1 from "/background1.svg";
import fadingbackground2 from "/fadingbackground2.svg";
import ellipse from "/ellipse.png";
import layers from "/homelayers.png";
import cube from "/homecube.png";
import layersVertical from "/benefitslayersvertical.svg";

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
        <div className="relative">
          <img src={background1} alt="" className="mx-auto mb-40 md:mb-0" />
          <img
            src={benefits}
            alt=""
            className="absolute top-40 right-5 md:top-5 md:right-44 mx-auto"
          />
          <div className="absolute top-5 left-5 md:top-20 md:left-32 text-xl md:text-5xl font-bold">
            Benefits
          </div>
          <div className="hidden md:block absolute top-10 left-5 md:top-40 md:left-32 text-left md:text-xl">
            Produce higher quality prototypes in significantly less <br /> time
            in a shift for the entire industry. Arkhet makes it <br /> easier to
            conduct rapid prototyping with higher quality <br /> and fewer
            resources.
          </div>
          <div className="md:hidden absolute top-14 left-5 text-left">
            Produce higher quality prototypes in significantly less time in a
            shift for the entire industry. Arkhet makes it easier to conduct
            rapid prototyping with higher quality and fewer resources.
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="md:flex mx-auto pt-10">
          <div className="relative mx-5 mb-5 md:mb-0">
            <img src={fadingbackground2} alt="" className="" />
            <img src={ellipse} alt="" className="absolute bottom-20 left-0" />
            <img
              src={layersVertical}
              alt=""
              className="absolute bottom-20 left-28"
            />
            <div className="md:text-[28px] absolute bottom-10 left-5">
              100% accurate to your design
            </div>
            <div className="absolute bottom-2 left-5">
              Prototypes adhere to the requirements of your design, <br /> every
              time. Import your own or try something new.
            </div>
          </div>
          <div className="relative mx-5 mb-5 md:mb-0">
            <img src={fadingbackground2} alt="" />
            <img src={ellipse} alt="" className="absolute bottom-20 left-0" />
            <img
              src={cube}
              alt=""
              className="absolute bottom-24 left-24 md:bottom-36 md:left-36 w-[170px] md:w-auto"
            />
            <div className="nunitofont md:text-[28px] absolute bottom-10 left-5">
              Identifying pain points or friction in <br />
              the prototype
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="md:flex mx-auto">
          <img src={video1} alt="" />
          <img src={video2} alt="" className="pt-4" />
        </div>
      </div>
      <img src={interactive} alt="" className="pt-10 mx-auto" />
      <div className="flex flex-col mx-auto">
        <div className="md:flex">
          <img src={frame14} alt="" className="mx-auto" />
          <img src={frame15} alt="" className="pb-16" />
          <img src={frame17} alt="" className="pb-20" />
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
