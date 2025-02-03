import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import logo from "/arkhet-logo-white.png";
import rectangle from "/registerrectangle.svg";
import group17 from "/subscribegroup17.svg";
import { useCreateRegistrationMutation } from "../lib/api/registrations";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { mutate: createRegistration } = useCreateRegistrationMutation();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;
    console.log(username);
    console.log(email);
    console.log(password);
    createRegistration(
      { name: username, email, password },
      {
        onSuccess: () => navigate({ to: "/thankyouregister" }),
        onError: (error) => console.error("Registration failed:", error),
      }
    );
  }
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 md:pt-[70px] relative overflow-hidden">
      <img src={group17} alt="" className="absolute bottom-0 right-0 z-0" />
      <img
        src={rectangle}
        alt=""
        className="hidden md:block z-0 absolute top-0 md:top-0 left-0 lg:left-[24%] 2xl:top-[-10] 2xl:left-[33%] opacity-40"
      />
      <div className="z-10 pb-20">
        <img src={logo} alt="" className="mx-auto md:pt-32" />
        <div className="text-center text-5xl py-2 z-20">Create an account</div>
        <div className="text-center py-2">
          Accelerated Experimentation starts today
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-2 pb-32 b w-[300px] md:w-[400px] mx-auto"
        >
          <input
            name="username"
            id="username"
            type="text"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2 z-20"
            placeholder="Name"
            required
          />
          <input
            name="email"
            id="email"
            type="email"
            className="border border-[#8778D7] bg-[#242424] py-2 px-2 my-2 z-20"
            placeholder="Email"
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
          <button className="nunitofont px-5 py-3 bg-[#9253E4] tracking-widest my-2 text-center z-20">
            CREATE
          </button>
          {window.innerWidth > 600 && (
            <div className="text-xl text-center py-3 z-20">
              Already have an account?{" "}
              <a href="https://arkhet-pilot.fly.dev/" className="font-bold">
                Log in
              </a>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
