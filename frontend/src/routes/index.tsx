import { createFileRoute, Link } from "@tanstack/react-router";
import largePlanet from "/homelargeplanet.svg";
import ship1 from "/homeship1.svg";
import purplePlanet from "/homepurpleplanet.png";
import bluePlanet from "/homeblueplanet.png";
import blueCloud from "/homebluecloud.svg";
import purpleCloud from "/homepurplecloud.svg";
import fadingborder from "/fadingborder.svg";
import canvas from "/homecanvas.svg";
import fadingbackground2 from "/fadingbackground2.svg";
import ellipse from "/ellipse.png";
import frame from "/homeframe.svg";
import layers from "/homelayers.png";
import cube from "/homecube.png";
import homecubes from "/homecubes.png";
import styleguide from "/homestyleguide.svg";
import floatingCubes from "/homefloatingcubes.svg";
import ship2 from "/homeship.svg";
import bluePlanet2 from "/homeblueplanet2.svg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <img src={blueCloud} alt="" className="absolute top-0 right-0" />
      <img src={purpleCloud} alt="" className="absolute top-0 left-0" />
      <div className="z-0 absolute top-28 md:top-56 left-0">
        <div className="relative pt-80 w-screen md:w-[99vw]">
          <img src={ship1} alt="" className="mx-auto w-[40px] md:w-auto" />
          <img
            src={largePlanet}
            alt=""
            className="absolute top-96 w-screen z-90"
          />
          <img src={purplePlanet} alt="" className="absolute top-72 right-96" />
          <img
            src={bluePlanet}
            alt=""
            className="hidden md:block absolute top-80 md:left-96"
          />
        </div>
      </div>
      <div className="z-40 relative">
        <div className="text-center pb-40 md:pb-96 z-40">
          <div className="text-3xl md:text-8xl font-bold py-5 md:py-10 md:pt-16 z-40">
            <div className="z-40">From idea to prototype, in</div>
            <div>moments</div>
          </div>
          <div className="pb-5 md:text-2xl">
            Validate product ideas with an all-new approach to interactive
            prototypes and build software like never before.
          </div>
          <div className="flex flex-col mx-auto">
            <div className="md:flex mx-auto tracking-widest">
              <div className="rounded bg-gradient-to-r from-[#6754B7] to-[#B754B3] py-2 w-[250px] m-3 z-40">
                <a href="https://arkhet-pilot.fly.dev/signup">SIGN UP</a>
              </div>
              <Link to="/schedule">
                <div className="border py-2 w-[250px] m-3">SCHEDULE A DEMO</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="text-2xl md:text-6xl font-bold z-40">
            <div className="z-40">Faster experiments, more time with</div>
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
          <div className="relative">
            <img src={fadingborder} alt="" className="mx-auto" />
            <img src={canvas} alt="" className="absolute top-8 md:left-36" />
          </div>
        </div>
        <div className="pb-20">
          <div className="text-center text-2xl md:text-6xl font-bold">
            <div>Prototypes that accurately simulate</div>
            <div>the product experience</div>
          </div>
          <div className="text-center py-7 md:text-2xl">
            <div className="">
              Type into a text field or interact with a chatbot. Our prototypes
              feel like the real thing.
            </div>
          </div>
          <div className="flex flex-col">
            <div className="md:flex mx-auto pt-10">
              <div className="relative mx-5 mb-5 md:mb-0">
                <img src={fadingbackground2} alt="" />
                <img
                  src={ellipse}
                  alt=""
                  className="absolute bottom-20 left-0"
                />
                <img src={layers} alt="" className="absolute bottom-0 left-0" />
                <div className="nunitofont md:text-[28px] absolute bottom-10 left-5">
                  Test real functionality that represents <br />
                  how the real interaction should work
                </div>
              </div>
              <div className="relative mx-5 mb-5 md:mb-0">
                <img src={fadingbackground2} alt="" />
                <img
                  src={ellipse}
                  alt=""
                  className="absolute bottom-20 left-0"
                />
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
              <div className="relative mx-5">
                <img src={fadingbackground2} alt="" />
                <img
                  src={ellipse}
                  alt=""
                  className="absolute bottom-20 left-0"
                />
                <img src={homecubes} alt="" className="absolute top-0 left-0" />
                <div className="nunitofont md:text-[28px] absolute bottom-10 left-5">
                  Communicate the actual experience <br /> to get actionable
                  feedback
                </div>
              </div>
            </div>
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
          <div className="relative">
            <img src={fadingborder} alt="" className="mx-auto" />
            <img
              src={styleguide}
              alt=""
              className="absolute top-3 left-3 md:top-9 md:left-[9.5rem] w-[92%] md:w-auto"
            />
          </div>
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
          <img src={floatingCubes} alt="" className="mx-auto" />
        </div>
        <div className="text-center pb-40 z-30">
          <div className="text-2xl md:text-6xl font-bold z-30">
            <div>Start prototyping with Arkhet </div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className=" z-30">
              Ready to start building? Register today.
            </div>
          </div>
          <Link to="/register" className="z-30">
            <div className="nunitofont bg-gradient-to-r from-[#6654B7] to-[#B754B3] py-3 w-[300px] rounded mx-auto z-30">
              R E G I S T E R
            </div>
          </Link>
        </div>
        <img
          src={ship2}
          alt=""
          className="absolute bottom-0 md:bottom-0 md:right-20 z-0"
        />
        <img
          src={bluePlanet2}
          alt=""
          className="hidden md:block absolute bottom-[-4%] left-[-2%] z-0"
        />
      </div>
    </main>
  );
}
