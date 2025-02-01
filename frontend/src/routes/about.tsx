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
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0">
          ABOUT
        </div>
      </div>
      <div className="text-center pb-20">
        <div className="text-2xl md:text-6xl font-bold text-white ">
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
          <div className="text-4xl font-bold text-white md:mr-10">
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
      <div className="py-20 text-3xl font-bold text-center">
        Building great software is easier with better tools. <br /> Arkhet
        builds tools for builders.
      </div>
      <div className="h-[1px] bg-white md:w-[500px] mx-auto mb-20"></div>
      <div className="nunitofont text-center py-10 tracking-widest">TEAM</div>
      <div className="text-2xl md:text-6xl font-bold text-white text-center mb-20">
        We’re shaping the future of generative <br />
        software design with a mission-driven team
      </div>
      <div className="flex flex-col mx-auto pb-32">
        <div className="md:grid grid-cols-3 gap-6 mx-auto">
          <div className="relative">
            <img src={frame} alt="" />
            <img
              src={nateImg}
              alt=""
              className="absolute top-2 left-[4.5rem] md:top-10 md:left-32"
            />
            <div className="nunitofont absolute bottom-36 left-[6.5rem] md:bottom-56 md:left-32 text-2xl md:text-[32px] font-bold tracking-wider">
              NATHAN NGAI
            </div>
            <div className="nunitofont absolute bottom-[7.5rem] left-32 md:bottom-44 md:left-40 md:text-[22px] text-[#B2B2B2] tracking-wider">
              Founder & CEO
            </div>
            <div className="nunitofont absolute bottom-24 left-28 md:bottom-[8rem] md:left-[8.5rem] md:text-[24px] text-[#B2B2B2] font-bold tracking-wider">
              Favourite question:
            </div>
            <div className="nunitofont absolute bottom-20 left-28 md:bottom-[5.5rem] md:left-[8.5rem] md:text-[24px] text-[#B2B2B2] tracking-wider">
              Answer to question
            </div>
            <img src={linkedIn} alt="" className="absolute bottom-7 right-6" />
          </div>
          <div className="relative">
            <img src={frame} alt="" />
            <img
              src={randallImg}
              alt=""
              className="absolute top-5 left-[4.5rem] md:top-10 md:left-32"
            />
            <div className="nunitofont absolute bottom-32 left-[6rem] md:bottom-56 md:left-32 text-2xl md:text-[32px] font-bold tracking-wider">
              RANDALL HERD
            </div>
            <div className="nunitofont absolute bottom-[6.5rem] left-32 md:bottom-44 md:left-40 md:text-[22px] text-[#B2B2B2] tracking-wider">
              VP of Marketing
            </div>
            <div className="nunitofont absolute bottom-20 left-28 md:bottom-[8rem] md:left-[8.5rem] md:text-[24px] text-[#B2B2B2] font-bold tracking-wider">
              Favourite question:
            </div>
            <div className="nunitofont absolute bottom-16 left-28 md:bottom-[5.5rem] md:left-[8.5rem] md:text-[24px] text-[#B2B2B2] tracking-wider">
              Answer to question
            </div>
            <img src={linkedIn} alt="" className="absolute bottom-7 right-6" />
          </div>
          <div className="relative">
            <img src={frame} alt="" />
            <img
              src={vitorImg}
              alt=""
              className="absolute top-5 left-[4.5rem] md:top-10 md:left-32"
            />
            <div className="nunitofont absolute bottom-56 left-28 md:text-[32px] font-bold tracking-wider">
              VITOR AKIYAMA
            </div>
            <div className="nunitofont absolute bottom-44 left-36 md:text-[22px] text-[#B2B2B2] tracking-wider">
              Founding Engineer
            </div>
            <div className="nunitofont absolute bottom-[8rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] font-bold tracking-wider">
              Favourite question:
            </div>
            <div className="nunitofont absolute bottom-[5.5rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] tracking-wider">
              Answer to question
            </div>
            <img src={linkedIn} alt="" className="absolute bottom-7 right-6" />
          </div>
          <div className="relative">
            <img src={frame} alt="" />
            <img
              src={paulImg}
              alt=""
              className="absolute top-5 left-[4.5rem] md:top-10 md:left-32"
            />
            <div className="nunitofont absolute bottom-56 left-40 md:text-[32px] font-bold tracking-wider">
              PAUL KIM
            </div>
            <div className="nunitofont absolute bottom-44 left-36 md:text-[22px] text-[#B2B2B2] tracking-wider">
              Founding Engineer
            </div>
            <div className="nunitofont absolute bottom-[8rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] font-bold tracking-wider">
              Favourite question:
            </div>
            <div className="nunitofont absolute bottom-[5.5rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] tracking-wider">
              Answer to question
            </div>
            <img src={linkedIn} alt="" className="absolute bottom-7 right-6" />
          </div>
          <div className="relative">
            <img src={frame} alt="" />
            <img
              src={selinaImg}
              alt=""
              className="absolute top-5 left-[4.5rem] md:top-10 md:left-32"
            />
            <div className="nunitofont absolute bottom-56 left-[8.5rem] md:text-[32px] font-bold tracking-wider">
              SELINA PARK
            </div>
            <div className="nunitofont absolute bottom-44 left-36 md:text-[22px] text-[#B2B2B2] tracking-wider">
              Founding Engineer
            </div>
            <div className="nunitofont absolute bottom-[8rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] font-bold tracking-wider">
              Favourite question:
            </div>
            <div className="nunitofont absolute bottom-[5.5rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] tracking-wider">
              Answer to question
            </div>
            <img src={linkedIn} alt="" className="absolute bottom-7 right-6" />
          </div>
          <div className="relative">
            <img src={frame} alt="" />
            <img
              src={stephImg}
              alt=""
              className="absolute top-5 left-[4.5rem] md:top-10 md:left-32"
            />
            <div className="nunitofont absolute bottom-56 left-24 md:text-[32px] font-bold tracking-wider">
              STEPHANIE LOUIE
            </div>
            <div className="nunitofont absolute bottom-44 left-40 md:text-[22px] text-[#B2B2B2] tracking-wider">
              Product Designer
            </div>
            <div className="nunitofont absolute bottom-[8rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] font-bold tracking-wider">
              Favourite question:
            </div>
            <div className="nunitofont absolute bottom-[5.5rem] left-[8.5rem] md:text-[24px] text-[#B2B2B2] tracking-wider">
              Answer to question
            </div>
            <img src={linkedIn} alt="" className="absolute bottom-7 right-6" />
          </div>
        </div>
      </div>
    </main>
  );
}
