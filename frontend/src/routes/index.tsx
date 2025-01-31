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

const marginBetweenRects = -150;

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
          <div className="flex flex-col">
            <div className="relative mx-auto">
              <img src={fadingborder} alt="" className="mx-auto" />
              <img src={canvas} alt="" className="absolute top-9 md:left-8" />
            </div>
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
            <div className="md:flex mx-auto pt-10 ">
              <div className="relative">
                <img src={fadingbackground2} alt="" />
                <div className="mx-5 mb-5 md:mb-0 flex flex-col gap-[-100px] w-full h-full absolute top-0 left-0">
                  <img
                    src={ellipse}
                    alt=""
                    className="absolute bottom-20 left-0"
                  />
                  <svg
                    viewBox="0 0 366 196"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-[-100px] z-[40] animate-rectangle-in"
                  >
                    <g filter="url(#filter0_bd_1907_2890)">
                      <path
                        d="M14.6665 94.5801L186.128 13.9765L351.402 94.5801L186.128 181.197L14.6665 94.5801Z"
                        fill="url(#paint0_linear_1907_2890)"
                        fill-opacity="0.75"
                        shape-rendering="crispEdges"
                      />
                      <path
                        d="M186.119 180.102L16.8872 94.6115L186.12 15.0555L349.245 94.6113L186.119 180.102Z"
                        stroke="#E0E0E0"
                        stroke-opacity="0.5"
                        stroke-width="1.94644"
                        shape-rendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bd_1907_2890"
                        x="0.846745"
                        y="0.156803"
                        width="364.374"
                        height="194.86"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="4.86611"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1907_2890"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.90988" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_1907_2890"
                          result="effect2_dropShadow_1907_2890"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1907_2890"
                          result="shape"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1907_2890"
                        x1="143.132"
                        y1="-13.4476"
                        x2="264.785"
                        y2="155.893"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#BBAEFF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    viewBox="0 0 366 195"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-[-100px]  z-[39]"
                  >
                    <g filter="url(#filter0_bdi_1907_2889)">
                      <path
                        d="M14.6665 94.4819L186.128 13.8784L351.402 94.4819L186.128 181.099L14.6665 94.4819Z"
                        fill="url(#paint0_linear_1907_2889)"
                        fill-opacity="0.5"
                        shape-rendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bdi_1907_2889"
                        x="0.846745"
                        y="0.0586586"
                        width="364.374"
                        height="194.86"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="4.86611"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1907_2889"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.90988" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_1907_2889"
                          result="effect2_dropShadow_1907_2889"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1907_2889"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-1.94644" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.270588 0 0 0 0 0.247059 0 0 0 0 0.45098 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect3_innerShadow_1907_2889"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1907_2889"
                        x1="209.311"
                        y1="166.5"
                        x2="209.311"
                        y2="45.8208"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.0589996" stop-color="#4D3D98" />
                        <stop offset="1" stop-color="#181529" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    viewBox="0 0 366 195"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-[-100px]  z-[38]"
                  >
                    <g filter="url(#filter0_bdi_1907_2888)">
                      <path
                        d="M14.6665 94.5718L186.128 13.9682L351.402 94.5718L186.128 181.189L14.6665 94.5718Z"
                        fill="url(#paint0_linear_1907_2888)"
                        fill-opacity="0.4"
                        shape-rendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bdi_1907_2888"
                        x="0.846745"
                        y="0.148502"
                        width="364.374"
                        height="194.86"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="4.86611"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1907_2888"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.90988" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_1907_2888"
                          result="effect2_dropShadow_1907_2888"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1907_2888"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-1.94644" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.270588 0 0 0 0 0.247059 0 0 0 0 0.45098 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect3_innerShadow_1907_2888"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1907_2888"
                        x1="209.311"
                        y1="158.804"
                        x2="205.418"
                        y2="16.714"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.139" stop-color="#54488F" />
                        <stop offset="1" stop-color="#8577CB" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <svg
                    viewBox="0 0 366 195"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-[-100px]"
                  >
                    <g filter="url(#filter0_bdi_1907_2886)">
                      <path
                        d="M14.6665 94.5542L186.128 13.9506L351.402 94.5542L186.128 181.171L14.6665 94.5542Z"
                        fill="url(#paint0_linear_1907_2886)"
                        fill-opacity="0.4"
                        shape-rendering="crispEdges"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_bdi_1907_2886"
                        x="0.846745"
                        y="0.130924"
                        width="364.374"
                        height="194.86"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="4.86611"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_1907_2886"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.90988" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_backgroundBlur_1907_2886"
                          result="effect2_dropShadow_1907_2886"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow_1907_2886"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="-1.94644" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.270588 0 0 0 0 0.247059 0 0 0 0 0.45098 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect3_innerShadow_1907_2886"
                        />
                      </filter>
                      <linearGradient
                        id="paint0_linear_1907_2886"
                        x1="209.311"
                        y1="158.787"
                        x2="207.365"
                        y2="82.8755"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.139" stop-color="#7C6DC9" />
                        <stop offset="1" stop-color="#BDB0FF" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="nunitofont md:text-[28px] absolute bottom-10 left-5">
                    Test real functionality that represents <br />
                    how the real interaction should work
                  </div>
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
          <div className="flex flex-col mx-auto">
            <div className="relative mx-auto">
              <img src={fadingborder} alt="" className="mx-auto" />
              <img
                src={styleguide}
                alt=""
                className="absolute top-3 left-3 md:top-9 md:left-10 w-[92%] md:w-auto"
              />
            </div>
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
          className="absolute bottom-[-2%] left-0 md:bottom-0 md:left-auto md:right-20 z-0"
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
