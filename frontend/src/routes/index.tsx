import { createFileRoute } from "@tanstack/react-router";
import largePlanet from "/largeplanet.svg";
import ship1 from "/ship1.svg";
import greenPlanet from "/greenplanet.svg";
import blueCommet from "/bluecommet.svg";
import blueCommet2 from "/bluecommet2.svg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="z-0 absolute top-56 left-0">
        <div className="relative pt-80 w-screen">
          <img src={ship1} alt="" className="mx-auto" />
          <img
            src={largePlanet}
            alt=""
            className="absolute top-96 w-screen z-30"
          />
        </div>
      </div>
      <div className="z-40">
        <div className="text-center pb-96">
          <div className="text-3xl md:text-8xl font-bold py-10">
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
        <div className="text-center">
          <div className="text-2xl md:text-6xl font-bold">
            <div>Faster experiments, more time with</div>
            <div>customers</div>
          </div>
          <div className="py-5 md:text-2xl">
            <div className="">
              Prototype more ideas and find better signals, all in a fraction of
              the time. The
            </div>
            <div className="">
              Arkhet Platform is for product teams to speed up the product
              validation process.
            </div>
          </div>
        </div>
        <div className="text-center">
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
          <div>More content</div>
        </div>
      </div>
    </main>
  );
}
