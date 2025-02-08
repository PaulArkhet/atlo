import { useEffect, useState } from "react";
import logo from "/arkhet-logo-white.png";
import { Link } from "@tanstack/react-router";

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
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
    if (window.innerWidth < 760) setNavVisible(!navVisible);
  }

  return (
    <header className="fixed top-0 left-0 z-[99] nunitofont">
      <div className="bg-gradient-to-r from-[#8778D7] via-[#2F5D5D] to-[#2A3349] h-[70px] w-screen">
        <div className="bg-[#242424] text-white p-3 md:flex justify-between tracking-widest text-center">
          <div className="flex justify-between">
            <Link
              to="/"
              className="flex"
              onClick={() => window.innerWidth < 721 && setNavVisible(false)}
            >
              <img
                src={logo}
                alt="Arkhet logo"
                className="w-[30px] h-[30px] mt-1"
              />
              <div className="p-2 lg:text-xl">A R K H E T</div>
            </Link>
            <button
              id="hamburger-menu"
              className="text-3xl md:hidden text-[#8778D7]"
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
              className="p-2 xl:px-5"
              onClick={slideToggle}
            >
              HOW IT WORKS
            </Link>
            <Link to="/benefits" className="p-2 xl:px-5" onClick={slideToggle}>
              BENEFITS
            </Link>
            <Link to="/resources" className="p-2 xl:px-5" onClick={slideToggle}>
              RESOURCES
            </Link>
            <Link to="/pricing" className="p-2 xl:px-5" onClick={slideToggle}>
              PRICING
            </Link>
            <Link to="/register" onClick={slideToggle}>
              <div className="lg:hidden py-2 px-5 lg:px-10 rounded bg-[#9253E4]">
                SIGN UP
              </div>
            </Link>
          </div>
          <div className="lg:flex">
            <a
              href="https://arkhet-pilot.fly.dev/"
              className="hidden lg:block p-2"
            >
              LOGIN
            </a>
            <Link
              to="/register"
              className="hidden lg:block py-2 px-5 xl:px-10 mx-10 rounded bg-[#9253E4]"
            >
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
