import { createFileRoute, Link } from "@tanstack/react-router";
import frame54 from "/joinframe54.svg";
import externalLink from "/joinexternallink.svg";
import background from "/joinbg.svg";

export const Route = createFileRoute("/join")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] p-3 pt-[100px] text-[#D9D9D9] md:text-2xl">
      <div className="md:p-10 z-10">
        <div className="tracking-widest text-center text-xl pb-5 md:pb-0 z-10">
          JOIN
        </div>
      </div>
      <div className="workfont text-2xl md:text-6xl font-bold text-white text-center pb-0">
        Join Arkhet
      </div>
      <img src={frame54} alt="" className="mx-auto" />
      <div className="flex flex-col mx-auto mb-32">
        <div className="mx-auto md:flex">
          <div className="md:mr-10">
            <div className="pb-10 md:pb-20">
              <div className="workfont text-2xl md:text-6xl font-bold text-white md:pb-10">
                Invest
              </div>
              <div className="flex">
                <div>
                  Thank you for your interest. Inquire at{" "}
                  <span className="font-bold">invest@arkhet.com</span>
                </div>
                <img src={externalLink} alt="" className="ml-2 pt-2 w-[17px]" />
              </div>
            </div>
            <div className="pb-10 md:pb-20">
              <div className="workfont text-2xl md:text-6xl font-bold text-white md:pb-10">
                Register
              </div>
              <div>
                Start building with Arkhet.{" "}
                <Link to="/register" className="font-bold">
                  Register now.
                </Link>
              </div>
            </div>
            <div className="pb-10 md:pb-20">
              <div className="workfont text-2xl md:text-6xl font-bold text-white md:pb-10">
                Mailing list
              </div>
              <div>
                Get the latest news and updates on Arkhet.{" "}
                <Link to="/subscribe" className="font-bold">
                  Subscribe to our mailing list.
                </Link>
              </div>
            </div>
          </div>
          <div className="pb-10 md:ml-10">
            <div className="md:pb-20">
              <div className="workfont text-2xl md:text-6xl font-bold text-white md:pb-10">
                Media
              </div>
              <div className="flex">
                <div>
                  Reach us at{" "}
                  <span className="font-bold">media@arkhet.com</span>
                </div>
                <img src={externalLink} alt="" className="ml-2 pt-2 w-[17px]" />
              </div>
            </div>
            <div className="md:pb-20">
              <div className="workfont text-2xl md:text-6xl font-bold text-white md:pb-10">
                Work at Arkhet
              </div>
              <div className="flex">
                <div>
                  Let's talk. Reach us at{" "}
                  <span className="font-bold">careers@arkhet.com</span>
                </div>
                <img src={externalLink} alt="" className="ml-2 pt-2 w-[17px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
