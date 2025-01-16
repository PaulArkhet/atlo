import { useEffect, useState } from "react";
import logo from "/arkhet-logo-white.png";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setNavVisible(true);
      } else {
        setNavVisible(false);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function slideToggle() {
    setNavVisible(!navVisible);
  }

  return (
    <header className="fixed top-0 left-0 z-50">
      <div className="bg-gradient-to-r from-[#8778D7] via-[#2F5D5D] to-[#2A3349] h-[70px] w-screen">
        <div className="bg-[#242424] text-white p-3 xl:flex justify-between tracking-widest text-center">
          <div className="flex justify-between xl:block">
            <div className="flex">
              <img
                src={logo}
                alt="Arkhet logo"
                className="w-[30px] h-[30px] mt-1"
              />
              <div className="nunitofont p-2 text-xl">A R K H E T</div>
            </div>
            <button
              id="hamburger-menu"
              className="text-3xl xl:hidden"
              onClick={slideToggle}
            >
              &#x2630;
            </button>
          </div>
          <div
            id="main-nav"
            className={`${navVisible ? "visible" : ""} xl:flex`}
          >
            <div className="nunitofont p-2 px-5">HOW IT WORKS</div>
            <div className="nunitofont p-2 px-5">BENEFITS</div>
            <div className="nunitofont p-2 px-5">RESOURCES</div>
            <div className="nunitofont p-2 px-5">PRICING</div>
            <div className="xl:hidden nunitofont p-2">LOGIN</div>
            <div className="xl:hidden nunitofont py-2 px-10 mx-10 rounded bg-[#9253E4]">
              SIGN UP
            </div>
          </div>
          <div className="xl:flex">
            <div className="hidden xl:block nunitofont p-2">LOGIN</div>
            <div className="hidden xl:block nunitofont py-2 px-10 mx-10 rounded bg-[#9253E4]">
              SIGN UP
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
