import { createFileRoute } from "@tanstack/react-router";
import maskGroup from "/aboutmaskgroup.svg";
import nate from "/aboutnate.png";
import randall from "/aboutrandall.png";
import vitor from "/aboutvitor.png";
import paul from "/aboutpaul.png";
import selina from "/aboutselina.png";
import steph from "/aboutsteph.png";
import frame from "/aboutteammateframe.svg";
import nateImg from "/aboutnateimg.png";
import randallImg from "/aboutrandallimg.png";
import vitorImg from "/aboutvitorimg.png";
import paulImg from "/aboutpaulimg.png";
import selinaImg from "/aboutselinaimg.png";
import stephImg from "/aboutstephimg.png";
import linkedIn from "/aboutlinkedin.svg";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] p-3 pt-[100px] text-[#D9D9D9] md:text-2xl">
      <div className="md:p-10">
        <div className=" tracking-widest text-center text-xl pb-5 md:pb-0">
          ABOUT
        </div>
      </div>
      <div className="text-center pb-10 md:pb-20">
        <div className="workfont text-2xl md:text-6xl font-bold text-white ">
          <div>The humanity of design cannot be automated</div>
        </div>
        <div className="py-7 pb-10">
          <div className="">
            We're on a mission to transform the future of the design industry by
            making it possible for anyone to <br /> build fully interactive
            design prototypes without any design or technical expertise.{" "}
          </div>
        </div>
        <img src={maskGroup} alt="" className="mx-auto" />
        <div className="">
          Arkhet applies AI at specific points in the product process to and
          accelerate meaningful experiences. <br /> And unlike "AI Design Tools"
          that require prompt (re)writing, Arkhet products let you build out
          your <br /> idea visually.
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="md:flex mx-auto">
          <div className="workfont text-xl md:text-4xl font-bold text-white md:mr-10 pb-10 md:pb-0">
            Product leaders can now <br /> design and build <br /> software
            products like <br /> never before
          </div>
          <div className="md:w-[550px] md:ml-10">
            <div className="mb-10">
              Arkhet products empower product teams to build great products.
              Have an idea for great software? Now you can bring it to life in
              moments with interactive prototypes.{" "}
            </div>
            <div className="my-10">
              Invite users to interact with your idea, in real time, in a single
              sitting.{" "}
            </div>
            <div className="my-10">
              The effort (and pain) to build great software, de-risk and test
              it, apply feedback, and do it all again, (and again), required
              resources unavailable to many.
            </div>
            <div>Until now.</div>
          </div>
        </div>
      </div>
      <div className="workfont py-10 md:py-20 text-xl md:text-3xl font-bold text-center">
        Building great software is easier with better tools. <br /> Arkhet
        builds tools for builders.
      </div>
      <div className="h-[1px] bg-white md:w-[500px] mx-auto md:mb-20"></div>
      <div className=" text-center py-10 tracking-widest">TEAM</div>
      <div className="workfont text-xl md:text-6xl font-bold text-white text-center mb-5 md:mb-20">
        We’re shaping the future of generative <br />
        software design with a mission-driven team
      </div>
      <div className="flex flex-col mx-auto pb-16 md:pb-32">
        <div className="md:grid grid-cols-3 gap-6 lg:gap-9 mx-auto">
          <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col my-2 lg:my-0">
            <div className="rounded-[8px] pt-3 px-5 bg-[#161616] mt-[2px] mx-[2px] shadow-[0_2px_10px_0px_rgba(0,0,0,1)]">
              <img src={nateImg} alt="" className="mx-auto py-5" />
              <div className="md:pt-5">
                <div className="text-center text-2xl 2xl:text-[32px] font-bold tracking-wider 2xl:mb-2 lg:px-24">
                  NATHAN NGAI
                </div>
                <div className=" text-center lg:text-[18px] 2xl:text-[22px] text-[#B2B2B2] tracking-wider 2xl:mb-5">
                  Founder & CEO
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] font-bold tracking-wider 2xl:mb-2">
                  Favourite question:
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] tracking-wider">
                  Answer to question
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <a
                  href="https://www.linkedin.com/in/ngainathan/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="" className="py-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col my-2 lg:my-0">
            <div className="rounded-[8px] pt-3 px-5 bg-[#161616] mt-[2px] mx-[2px] shadow-[0_2px_10px_0px_rgba(0,0,0,1)]">
              <img src={randallImg} alt="" className="mx-auto py-5" />
              <div className="pt-5">
                <div className=" text-center text-2xl 2xl:text-[32px] font-bold tracking-wider 2xl:mb-2">
                  RANDALL HERD
                </div>
                <div className=" text-center lg:text-[18px] 2xl:text-[22px] text-[#B2B2B2] tracking-wider 2xl:mb-5">
                  VP of Marketing
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] font-bold tracking-wider 2xl:mb-2">
                  Favourite question:
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] tracking-wider">
                  Answer to question
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <a
                  href="https://www.linkedin.com/in/randallherd/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="" className="py-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col my-2 lg:my-0">
            <div className="rounded-[8px] pt-3 px-5 bg-[#161616] mt-[2px] mx-[2px] shadow-[0_2px_10px_0px_rgba(0,0,0,1)]">
              <img src={vitorImg} alt="" className="mx-auto py-5" />
              <div className="pt-5">
                <div className=" text-center text-2xl 2xl:text-[32px] font-bold tracking-wider 2xl:mb-2">
                  VITOR AKIYAMA
                </div>
                <div className=" text-center lg:text-[18px] 2xl:text-[22px] text-[#B2B2B2] tracking-wider 2xl:mb-5">
                  Founding Engineer
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] font-bold tracking-wider 2xl:mb-2">
                  Favourite question:
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] tracking-wider">
                  Answer to question
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/vitor-akiyama/"
                target="_blank"
              >
                <div className="flex justify-between">
                  <div></div>
                  <a
                    href="https://www.linkedin.com/in/vitor-akiyama/"
                    target="_blank"
                  >
                    <img src={linkedIn} alt="" className="py-3" />
                  </a>
                </div>
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col my-2 lg:my-0">
            <div className="rounded-[8px] pt-3 px-5 bg-[#161616] mt-[2px] mx-[2px] shadow-[0_2px_10px_0px_rgba(0,0,0,1)]">
              <img src={paulImg} alt="" className="mx-auto py-5" />
              <div className="pt-5">
                <div className=" text-center text-2xl 2xl:text-[32px] font-bold tracking-wider 2xl:mb-2">
                  PAUL KIM
                </div>
                <div className=" text-center lg:text-[18px] 2xl:text-[22px] text-[#B2B2B2] tracking-wider 2xl:mb-5">
                  Founding Engineer
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] font-bold tracking-wider 2xl:mb-2">
                  Favourite question:
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] tracking-wider">
                  Answer to question
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <a
                  href="https://www.linkedin.com/in/paul-sunghun-kim/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="" className="py-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col my-2 lg:my-0">
            <div className="rounded-[8px] pt-3 px-5 bg-[#161616] mt-[2px] mx-[2px] shadow-[0_2px_10px_0px_rgba(0,0,0,1)]">
              <img src={selinaImg} alt="" className="mx-auto py-5" />
              <div className="pt-5">
                <div className=" text-center text-2xl 2xl:text-[32px] font-bold tracking-wider 2xl:mb-2">
                  SELINA PARK
                </div>
                <div className=" text-center lg:text-[18px] 2xl:text-[22px] text-[#B2B2B2] tracking-wider 2xl:mb-5">
                  Founding Engineer
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] font-bold tracking-wider 2xl:mb-2">
                  Favourite question:
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] tracking-wider">
                  Answer to question
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <a
                  href="https://www.linkedin.com/in/selinasein/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="" className="py-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b rounded-[10px] from-[#9080eb] to-[#232323] flex flex-col my-2 lg:my-0">
            <div className="rounded-[8px] pt-3 px-5 bg-[#161616] mt-[2px] mx-[2px] shadow-[0_2px_10px_0px_rgba(0,0,0,1)]">
              <img src={stephImg} alt="" className="mx-auto py-5" />
              <div className="pt-5">
                <div className=" text-center text-2xl 2xl:text-[32px] font-bold tracking-wider 2xl:mb-2">
                  STEPHANIE LOUIE
                </div>
                <div className=" text-center lg:text-[18px] 2xl:text-[22px] text-[#B2B2B2] tracking-wider 2xl:mb-5">
                  Product Designer
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] font-bold tracking-wider 2xl:mb-2">
                  Favourite question:
                </div>
                <div className=" text-center lg:text-[20px] 2xl:text-[24px] text-[#B2B2B2] tracking-wider">
                  Answer to question
                </div>
              </div>
              <div className="flex justify-between">
                <div></div>
                <a
                  href="https://www.linkedin.com/in/stephanie-louie-71178a25/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="" className="py-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
