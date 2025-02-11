import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import logo from "/arkhet-logo-white.png";
import rectangle from "/registerrectangle.svg";
import group17 from "/subscribegroup17.svg";
import arrowLeft from "/arrowleft.svg";
import { useEffect, useState } from "react";
import useAuthStore from "@/store/AuthStore";

export const Route = createFileRoute("/blogger/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const [loadingMessage, setLoadingMessage] = useState("");
  const [message, setMessage] = useState("");
  const {
    isBloggerLoggedIn,
    setIsBloggerLoggedIn,
    loginService,
    authLoading,
    user,
  } = useAuthStore((state) => state);

  useEffect(() => {
    if (!!user) {
      navigate({ to: "/blogger/dashboard" });
    }
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const password = (e.target as HTMLFormElement).password.value;
    loginService(username, password);
    if (authLoading) setLoadingMessage("Loading...");
    if (!user) {
      setTimeout(() => {
        setMessage("Whoops, that's not it!");
      }, 700);
    }
  }

  return (
    <main className="flex-1 bg-[#242424] text-white relative overflow-hidden h-screen">
      <Link to="/" className="absolute top-5 left-5">
        <div className="flex">
          <img src={arrowLeft} alt="" />
          <div className="ml-2">Go back</div>
        </div>
      </Link>
      <img
        src={group17}
        alt=""
        className="w-auto absolute bottom-0 right-0 z-0"
      />
      <img
        src={rectangle}
        alt=""
        className="hidden lg:block z-0 absolute top-0 md:top-0 left-0 lg:left-[24%] 2xl:top-[-10] 2xl:left-[33%] opacity-40"
      />
      <div className="z-10 md:pb-20 pt-16 md:pt-0">
        <img src={logo} alt="" className="mx-auto md:pt-32" />
        <div className="workfont text-center text-5xl py-2 z-20">Login</div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-2 pb-32 b w-[300px] md:w-[400px] mx-auto"
        >
          <input
            name="username"
            id="username"
            type="text"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2 z-20"
            placeholder="Username"
            required
          />
          <input
            name="password"
            id="password"
            type="password"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2 z-20"
            placeholder="Password"
            required
          />
          <button className="px-5 py-3 bg-[#9253E4] tracking-widest my-2 text-center z-20">
            LOGIN
          </button>
          <div className="text-center z-20">{loadingMessage}</div>
          <div className="text-center z-20 text-red-400">{message}</div>
        </form>
      </div>
    </main>
  );
}
