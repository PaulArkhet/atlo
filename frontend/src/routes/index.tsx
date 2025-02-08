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
import rectangle1 from "/homerectangle1.svg";
import rectangle2 from "/homerectangle2.svg";
import rectangle3 from "/homerectangle3.svg";
import rectangle4 from "/homerectangle4.svg";
import rectangle5 from "/homerectangle5.svg";
import grid from "/homegrid.svg";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  useEffect(() => {
    const images = [
      largePlanet,
      ship1,
      purplePlanet,
      bluePlanet,
      blueCloud,
      purpleCloud,
      fadingborder,
      canvas,
      fadingbackground2,
      ellipse,
      frame,
      layers,
      cube,
      homecubes,
      styleguide,
      floatingCubes,
      ship2,
      bluePlanet2,
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const startFade = 50; // When the image starts fading (px from top)
      const endFade = 300; // When the image is fully faded (px from top)

      const progress = Math.min(
        Math.max(
          (window.scrollY - rect.top + startFade) / (endFade - startFade),
          0
        ),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px] overflow-hidden">
      <img src={blueCloud} alt="" className="absolute top-0 right-0" />
      <img src={purpleCloud} alt="" className="absolute top-0 left-0" />
      <div className="absolute top-[450px] left-[47%] sm:top-[375px] sm:left-[45%] md:top-[435px] md:left-[44%] lg:top-[475px] xl:top-[60%] xl:left-[46%] 2xl:top-[65%] 2xl:left-[47%]">
        <img
          src={ship1}
          alt=""
          ref={imgRef}
          className={`relative z-10 mx-auto w-[11vw] md:w-auto`}
          style={{
            transform: `translateY(-${scrollProgress * 50}px)`,
            opacity: 1 - scrollProgress,
          }}
        />
      </div>
      <img
        src={largePlanet}
        alt=""
        className="absolute w-[95%] top-[500px] sm:top-[475px] md:top-[70%] z-10"
      />
      <img
        src={purplePlanet}
        alt=""
        className="absolute right-[5%] top-[450px] w-[20vw] sm:top-[335px] md:top-[400px] "
      />
      <img
        src={bluePlanet}
        alt=""
        className="absolute left-[10%] top-[475px] w-[20vw] sm:top-[375px] md:top-[465px] "
      />
      <div className="z-40 relative">
        <div className="text-center pb-40 md:pb-96 z-40">
          <div className="workfont text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold py-5 md:py-10 md:pt-16 z-40">
            <div className="z-40">From idea to prototype, in</div>
            <div>moments</div>
          </div>
          <div className="pb-5 md:text-2xl">
            Validate product ideas with an all-new approach to interactive
            prototypes and build software like never before.
          </div>
          <div className="flex flex-col mx-auto">
            <div className="md:flex mx-auto tracking-widest">
              <Link
                to="/register"
                className="rounded bg-gradient-to-r from-[#6754B7] to-[#B754B3] py-2 px-[90px] m-3 z-40"
              >
                SIGN UP
              </Link>
              <div className="my-5 md:my-0"></div>
              <Link to="/schedule">
                <div className="border py-2 w-[250px] m-3">SCHEDULE A DEMO</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="workfont text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold z-40">
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
          <div className="flex flex-col">
            <div className="mx-auto">
              <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
                <div className="rounded-[8px] p-3 bg-gradient-to-b from-[#111111] to-transparent bg-opacity-40 mt-[2px] mx-[2px] from-50%">
                  <img src={canvas} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-20">
          <div className="workfont text-center text-2xl md:text-6xl font-bold">
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
            <div className="md:grid grid-cols-3 gap-3 mx-auto pt-10 ">
              <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col relative">
                <div className="rounded-[8px] p-3 bg-[#161616] mt-[2px] mx-[2px] from-50%">
                  <img src={ellipse} alt="" className="mx-auto" />
                  <img
                    src={layers}
                    alt=""
                    className="absolute left-0 top-[-15%] md:top-[-5%] 2xl:left-[5%]"
                  />
                  <div className="sm:text-2xl lg:text-xl 2xl:text-[28px] 2xl:pb-2">
                    Test real functionality that represents how the real
                    interaction should work
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col relative my-2 md:my-0">
                <div className="rounded-[8px] p-3 bg-[#161616] mt-[2px] mx-[2px] from-50%">
                  <img src={ellipse} alt="" className="mx-auto" />
                  <img
                    src={cube}
                    alt=""
                    className="absolute top-[-5%] left-[27%] w-[40vw] md:w-[14vw] md:top-0 2xl:top-[-10%]"
                  />
                  <div className="sm:text-2xl md:pb-16 lg:pb-0 lg:text-xl 2xl:text-[28px] 2xl:pb-2">
                    Identifying pain points or friction in <br />
                    the prototype
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col relative">
                <div className="rounded-[8px] p-3 bg-[#161616] mt-[2px] mx-[2px] from-50%">
                  <img src={ellipse} alt="" className="mx-auto" />
                  <img
                    src={homecubes}
                    alt=""
                    className="absolute top-0 left-[0%] 2xl:left-[10%]"
                  />
                  <div className="sm:text-2xl md:pb-8 lg:pb-0 lg:text-xl 2xl:text-[28px] 2xl:pb-2">
                    Communicate the actual experience <br /> to get actionable
                    feedback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="workfont text-2xl md:text-6xl font-bold">
            <div>Generate highly accurate prototypes that </div>
            <div>look like your product</div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className="">
              Upload or create your style guide to ensure every prototype
              generated matches your product’s look and feel perfectly.
            </div>
          </div>
          <div className="flex flex-col mx-auto">
            <div className="mx-auto">
              <div className="bg-gradient-to-b rounded-[10px] from-[#4B4378] to-transparent flex flex-col">
                <div className="rounded-[8px] pt-3 px-5 bg-gradient-to-b from-[#111111] to-transparent bg-opacity-40 mt-[2px] mx-[2px] from-50%">
                  <img src={styleguide} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pb-20">
          <div className="workfont text-2xl md:text-6xl font-bold">
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
          <div className="workfont text-2xl md:text-6xl font-bold">
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
        <div className="relative text-center pb-40 z-30">
          <div className="workfont text-2xl md:text-6xl font-bold z-30">
            <div>Start prototyping with Arkhet </div>
          </div>
          <div className="py-7 md:text-2xl">
            <div className=" z-20">
              Ready to start building? Register today.
            </div>
          </div>
          <Link to="/register" className="z-30">
            <div className="bg-gradient-to-r from-[#6654B7] to-[#B754B3] py-3 w-[300px] rounded mx-auto z-30">
              R E G I S T E R
            </div>
          </Link>
        </div>
        <div>
          <img
            src={ship2}
            alt=""
            className="absolute bottom-[-2%] sm:bottom-[-5%] md:bottom-[-3%] md:right-[0%] lg:bottom-[-3%] xl:bottom-[0%] 2xl:right-[5%]"
          />
          <img
            src={bluePlanet2}
            alt=""
            className="w-[30vw] absolute bottom-[-2%] left-[-3%] xl:bottom-[-5%]"
          />
        </div>
      </div>
    </main>
  );
}
