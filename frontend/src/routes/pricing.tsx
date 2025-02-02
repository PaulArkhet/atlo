import { Switch } from "@/components/ui/switch";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import rectangle from "/pricingrectangle.svg";

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isMonthly, setisMonthly] = useState(false);
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className="nunitofont tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          PRICING
        </div>
      </div>
      <div className="text-center">
        <div className="">
          <div className="text-2xl md:text-6xl font-bold">
            Choose the plan that works best for you
          </div>
          <div
            className="relative md:w-[400px] h-[70px] rounded-full cursor-pointer bg-[#DCDCDC]
             mx-auto m-10"
            onClick={() => setisMonthly(!isMonthly)}
          >
            <span
              className={`absolute top-0 left-0 w-[175px] sm:w-[200px] h-[70px] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded-full transition-transform ${
                isMonthly ? "translate-x-[160px] md:translate-x-[200px]" : ""
              }`}
            ></span>
            <span
              className={`absolute top-[20px] left-[60px] text-xl ${!isMonthly ? "text-black font-bold" : "text-[#6454B7]"}`}
            >
              Monthly
            </span>
            <span
              className={`absolute top-[20px] right-[4px] md:right-[20px] text-xl ${isMonthly ? "text-black font-bold" : "text-[#6454B7]"}`}
            >
              Yearly (save 20%)
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="md:flex mx-auto">
          <div className="p-5 m-5 text-xl border rounded-lg bg-gradient-to-b from-[#373557] to-transparent text-[#D9D9D9]">
            <div className="nunitofont tracking-widest pb-2">STARTER</div>
            <div className="py-2 text-white">
              <span className="text-5xl font-bold">$50</span>* /month per user
            </div>
            <div className="h-[2px] bg-gradient-to-r from-white to-transparent"></div>
            <div className="py-2 italic">Explain who it's best for</div>
            <div className="flex">
              <img src={rectangle} alt="" className="mr-2 w-[15px]" />
              <div className="py-2">Up to # generations</div>
            </div>
            <div className="flex">
              <img src={rectangle} alt="" className="mr-2 w-[15px]" />
              <div className="py-2">Another line of info</div>
            </div>
            <div className="flex">
              <img src={rectangle} alt="" className="mr-2 w-[15px]" />
              <div className="py-2">Another line of info</div>
            </div>
            <div className="nunitofont py-2 px-10 m-10 rounded bg-[#9253E4] text-sm tracking-widest w-[200px] md:w-auto text-center">
              GET STARTED
            </div>
          </div>
          <div>
            <div className="mx-5 bg-gradient-to-r from-[#FFB04F] to-[#8778D7] border-t border-l border-r rounded-t text-black text-center tracking-widest pt-1 font-semibold">
              MOST POPULAR
            </div>
            <div className="p-5 mb-5 mx-5 text-xl border-l border-r border-b rounded-b-lg bg-gradient-to-br from-[#545AB5] via-[#475DA0] via-55% to-[#423449] text-[#D9D9D9]">
              <div className="nunitofont tracking-widest pb-2">STANDARD</div>
              <div className="py-2 text-white">
                <span className="text-5xl font-bold">$100</span>* /month per
                user
              </div>
              <div className="h-[2px] bg-gradient-to-r from-white to-transparent"></div>
              <div className="py-2 italic">Explain who it's best for</div>
              <div className="flex">
                <img src={rectangle} alt="" className="mr-2 w-[15px]" />
                <div className="py-2">Up to 50 generations</div>
              </div>
              <div className="flex">
                <img src={rectangle} alt="" className="mr-2 w-[15px]" />
                <div className="py-2">File hosted on arkhet.com/url</div>
              </div>
              <div className="flex">
                <img src={rectangle} alt="" className="mr-2 w-[15px]" />
                <div className="py-2">Downloadable react files</div>
              </div>
              <div className="nunitofont py-2 px-10 m-10 rounded bg-[#9253E4] text-sm tracking-widest w-[200px] md:w-auto text-center">
                GET STARTED
              </div>
            </div>
          </div>
          <div className="p-5 m-5 text-xl border rounded-lg bg-gradient-to-b from-[#373557] to-transparent text-[#D9D9D9]">
            <div className="nunitofont tracking-widest pb-2">BUSINESS</div>
            <div className="py-2 text-white">
              <span className="text-5xl font-bold">$600</span>* /month per user
            </div>
            <div className="h-[2px] bg-gradient-to-r from-white to-transparent"></div>
            <div className="py-2 italic">Explain who it's best for</div>
            <div className="flex">
              <img src={rectangle} alt="" className="mr-2 w-[15px]" />
              <div className="py-2">Up to # generations</div>
            </div>
            <div className="flex">
              <img src={rectangle} alt="" className="mr-2 w-[15px]" />
              <div className="py-2">File hosted on arkhet.com/url</div>
            </div>
            <div className="flex">
              <img src={rectangle} alt="" className="mr-2 w-[15px]" />
              <div className="py-2">Downloadable react files</div>
            </div>
            <div className="nunitofont py-2 px-10 m-10 rounded bg-[#9253E4] text-sm tracking-widest w-[200px] md:w-auto text-center">
              GET STARTED
            </div>
          </div>
        </div>
        <div className="text-[#D9D9D9] text-center py-7 italic">
          *Prices are in USD
        </div>
      </div>
    </main>
  );
}
