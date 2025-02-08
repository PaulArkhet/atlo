import { Switch } from "@/components/ui/switch";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import rectangle from "/pricingrectangle.svg";

export const Route = createFileRoute("/pricing")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isMonthly, setisMonthly] = useState(true);
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <div className="md:p-10">
        <div className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          PRICING
        </div>
      </div>
      <div className="text-center">
        <div className="">
          <div className="workfont text-2xl md:text-6xl font-bold">
            Choose the plan that works best for you
          </div>
          <div
            className="relative w-[300px] md:w-[400px] h-[70px] rounded-full cursor-pointer bg-[#DCDCDC]
             mx-auto m-10"
            onClick={() => setisMonthly(!isMonthly)}
          >
            <span
              className={`absolute top-0 left-0 w-[150px] md:w-[200px] h-[70px] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] rounded-full transition-transform ${
                !isMonthly
                  ? "translate-x-[150px] md:translate-x-[200px] bg-gradient-to-r from-[#6654B7] to-[#B754B3]"
                  : ""
              }`}
            ></span>
            <span
              className={`absolute top-[20px] left-10 lg:left-[60px] text-xl ${isMonthly ? "text-black font-bold" : "text-[#6454B7]"}`}
            >
              Monthly
            </span>
            <span
              className={`absolute w-[150px] top-2 right-1 md:top-[20px] md:w-auto md:right-[20px] text-xl ${!isMonthly ? "text-white font-bold" : "text-[#6454B7]"}`}
            >
              Yearly (save 20%)
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-auto">
        <div className="lg:flex mx-auto">
          <div className="p-5 mb-5 md:m-5 text-xl border rounded-lg bg-gradient-to-b from-[#373557] to-transparent text-[#D9D9D9]">
            <div className=" tracking-widest pb-2">STARTER</div>
            {isMonthly && (
              <div className="py-2 text-white">
                <span className="workfont text-5xl font-bold">$50</span>* /month
                per user
              </div>
            )}
            {!isMonthly && (
              <div>
                <div className="py-2 text-white workfont text-5xl font-bold line-through">
                  $40
                </div>
                <div className="py-2 text-[#33BCAC]">
                  <span className="workfont text-5xl font-bold">$80</span>*
                  /month per user
                </div>
              </div>
            )}
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
            <Link to="/register">
              <div className=" py-2 px-10 m-10 rounded bg-[#9253E4] text-sm tracking-widest w-[200px] md:w-auto text-center">
                GET STARTED
              </div>
            </Link>
          </div>
          <div>
            <div className="md:mx-5 bg-gradient-to-r from-[#FFB04F] to-[#8778D7] border-t border-l border-r rounded-t text-black text-center tracking-widest pt-1 font-semibold">
              MOST POPULAR
            </div>
            <div className="p-5 mb-5 md:mx-5 text-xl border-l border-r border-b rounded-b-lg bg-gradient-to-br from-[#545AB5] via-[#475DA0] via-55% to-[#423449] text-[#D9D9D9]">
              <div className=" tracking-widest pb-2">STANDARD</div>
              {isMonthly && (
                <div className="py-2 text-white">
                  <span className="workfont text-5xl font-bold">$100</span>*
                  /month per user
                </div>
              )}
              {!isMonthly && (
                <div>
                  <div className="py-2 text-white workfont text-5xl font-bold line-through">
                    $100
                  </div>
                  <div className="py-2 text-[#33BCAC]">
                    <span className="workfont text-5xl font-bold">$80</span>*
                    /month per user
                  </div>
                </div>
              )}
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
              <Link to="/register">
                <div className=" py-2 px-10 m-10 rounded bg-[#9253E4] text-sm tracking-widest w-[200px] md:w-auto text-center">
                  GET STARTED
                </div>
              </Link>
            </div>
          </div>
          <div className="p-5 md:m-5 text-xl border rounded-lg bg-gradient-to-b from-[#373557] to-transparent text-[#D9D9D9]">
            <div className=" tracking-widest pb-2">BUSINESS</div>
            {isMonthly && (
              <div className="py-2 text-white">
                <span className="workfont text-5xl font-bold">$600</span>*
                /month per user
              </div>
            )}
            {!isMonthly && (
              <div>
                <div className="py-2 text-white workfont text-5xl font-bold line-through">
                  $600
                </div>
                <div className="py-2 text-[#33BCAC]">
                  <span className="workfont text-5xl font-bold">$500</span>*
                  /month per user
                </div>
              </div>
            )}
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
            <a href="mailto:sales@arkhet.com">
              <div className=" py-2 px-10 m-10 rounded bg-[#9253E4] text-sm tracking-widest w-[200px] md:w-auto text-center">
                CONTACT SALES
              </div>
            </a>
          </div>
        </div>
        <div className="text-[#D9D9D9] text-center py-7 italic">
          *Prices are in USD
        </div>
      </div>
    </main>
  );
}
