import { createFileRoute } from "@tanstack/react-router";
import largePlanet from "/largeplanet.svg";
import ship1 from "/ship1.svg";
import image23 from "/image23.svg";
import greenPlanet from "/greenplanet.svg";
import blueCommet from "/bluecommet.svg";
import blueCommet2 from "/bluecommet2.svg";
import frame14 from "/frame14.svg";
import frame15 from "/frame15.svg";
import frame17 from "/frame17.svg";
import fadingborder from "/fadingborder.svg";
import frame from "/frame.svg";
import banner from "/banner.svg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="z-0 absolute top-28 md:top-56 left-0">
        <div className="relative pt-80 w-screen">
          <img src={ship1} alt="" className="mx-auto w-[40px] md:w-auto" />
          <img
            src={largePlanet}
            alt=""
            className="absolute top-96 w-screen z-30"
          />
        </div>
      </div>
      <div className="z-40">
        <div className="text-center pb-40 md:pb-96">
          <div className="text-3xl md:text-8xl font-bold py-5 md:py-10 md:pt-16">
            <div>From idea to prototype, in</div>
            <div>moments</div>
          </div>
          <div className="pb-5 md:text-2xl">
            Validate product ideas with an all-new approach to interactive
            prototypes and build software like never before.
          </div>
          <div className="flex flex-col mx-auto">
            <div className="md:flex mx-auto tracking-widest">
              <div className="rounded bg-gradient-to-r from-[#6754B7] to-[#B754B3] py-2 w-[250px] m-3">
                SIGN UP
              </div>
              <div className="border py-2 w-[250px] m-3">SCHEDULE A DEMO</div>
            </div>
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Faster experiments, more time with</div>
            <div>customers</div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">
              Prototype more ideas and find better signals, all in a fraction of
              the time. The
            </div>
            <div className="">
              Arkhet Platform is for product teams to speed up the product
              validation process.
            </div>
          </div>
          <img
            src={image23}
            alt=""
            className="mx-auto border-t-2 border-r-2 border-l-2 border-[#635998] rounded-xl"
          />
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Prototypes that accurately simulate</div>
            <div>the product experience</div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">
              Type into a text field or interact with a chatbot. Our prototypes
              feel like the real thing.
            </div>
          </div>
          <div className="md:grid grid-cols-3 mx-auto">
            <img src={frame14} alt="" className="w-[300px] md:w-auto mx-auto" />
            <img
              src={frame15}
              alt=""
              className="w-[300px] md:w-auto mx-auto md:pt-3"
            />
            <img
              src={frame17}
              alt=""
              className="w-[300px] md:w-auto mx-auto md:pt-16"
            />
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Generate highly accurate prototypes that </div>
            <div>look like your product</div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">
              Upload or create your style guide to ensure every prototype
              generated matches your product’s look and feel perfectly.
            </div>
            <div>look and feel perfectly.</div>
          </div>
          <img src={fadingborder} alt="" className="mx-auto" />
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Build the wireframe. We take care of the rest</div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">
              No need to move every single pixel. We translate your lo-fi ideas
              to high-fi prototypes
            </div>
          </div>
          <img src={frame} alt="" className="mx-auto" />
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Increase your team's design capacity and output</div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">
              By reducing design barriers and the time it takes to create
              high-quality prototypes, we help teams accomplish more with less.
            </div>
            <div>more with less.</div>
          </div>
          <img src={banner} alt="" className="mx-auto" />
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Start prototyping with Arkhet </div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">Ready to start building? Register today.</div>
          </div>
          <div className="nunitofont bg-gradient-to-r from-[#6654B7] to-[#B754B3] py-3 w-[300px] rounded mx-auto">
            R E G I S T E R
          </div>
        </div>
      </div>
    </main>
  );
}
