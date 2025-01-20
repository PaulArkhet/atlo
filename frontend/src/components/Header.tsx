import { useEffect, useState } from "react";
import logo from "/arkhet-logo-white.png";
import { Link } from "@tanstack/react-router";

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
    if (window.innerWidth < 700) setNavVisible(!navVisible);
    console.log("toggle running");
  }

  return (
    <header className="fixed top-0 left-0 z-50">
      <div className="bg-gradient-to-r from-[#8778D7] via-[#2F5D5D] to-[#2A3349] h-[70px] w-screen">
        <div className="bg-[#242424] text-white p-3 xl:flex justify-between tracking-widest text-center">
          <div className="flex justify-between xl:block">
            <Link to="/" className="flex">
              <img
                src={logo}
                alt="Arkhet logo"
                className="w-[30px] h-[30px] mt-1"
              />
              <div className="nunitofont p-2 text-xl">A R K H E T</div>
            </Link>
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
            className={`${navVisible ? "visible" : ""} flex flex-col md:flex-row`}
          >
            <Link
              to="/howitworks"
              className="nunitofont p-2 px-5"
              onClick={slideToggle}
            >
              HOW IT WORKS
            </Link>
            <Link
              to="/benefits"
              className="nunitofont p-2 px-5"
              onClick={slideToggle}
            >
              BENEFITS
            </Link>
            <Link
              to="/resources"
              className="nunitofont p-2 px-5"
              onClick={slideToggle}
            >
              RESOURCES
            </Link>
            <Link
              to="/pricing"
              className="nunitofont p-2 px-5"
              onClick={slideToggle}
            >
              PRICING
            </Link>
            <div className="flex flex-col">
              <a
                href="https://arkhet-pilot.fly.dev/"
                className="xl:hidden nunitofont p-2"
              >
                LOGIN
              </a>
              <a
                href="https://arkhet-pilot.fly.dev/signup"
                className="xl:hidden nunitofont py-2 px-10 mx-10 rounded bg-[#9253E4]"
              >
                SIGN UP
              </a>
            </div>
          </div>
          <div className="xl:flex">
            <a
              href="https://arkhet-pilot.fly.dev/"
              className="hidden xl:block nunitofont p-2"
            >
              LOGIN
            </a>
            <a
              href="https://arkhet-pilot.fly.dev/signup"
              className="hidden xl:block nunitofont py-2 px-10 mx-10 rounded bg-[#9253E4]"
            >
              SIGN UP
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
