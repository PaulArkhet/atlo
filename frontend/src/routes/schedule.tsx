import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import planet from "/scheduleplanet.svg";
import checkmark from "/checkmark.svg";
import blueCloud from "/schedulebluecloud.svg";
import greenCloud from "/schedulegreencloud.svg";
import purpleCloud from "/schedulepurplecloud.svg";
import { useCreateBookingMutation } from "@/lib/api/bookings";

export const Route = createFileRoute("/schedule")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { mutate: createBooking } = useCreateBookingMutation();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = (e.target as HTMLFormElement).username.value;
    const email = (e.target as HTMLFormElement).email.value;
    const company = (e.target as HTMLFormElement).company.value;
    const userRole = (e.target as HTMLFormElement).userrole.value;
    const info = (e.target as HTMLFormElement).info.value;
    console.log(username);
    console.log(email);
    console.log(company);
    createBooking(
      { name: username, email, company, role: userRole, info },
      {
        onSuccess: () => navigate({ to: "/thankyoudemo" }),
        onError: (error) => console.error("Booking failed:", error),
      }
    );
  }

  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      <img
        src={blueCloud}
        alt=""
        className="hidden md:block absolute top-0 right-0 z-0"
      />
      <img
        src={purpleCloud}
        alt=""
        className="hidden md:block absolute bottom-0 right-40 z-0"
      />
      <img
        src={greenCloud}
        alt=""
        className="hidden 2xl:block absolute bottom-[-10%] left-10 z-0 w-[90%] md:w-auto"
      />
      <div className="flex flex-col mx-auto md:p-10 z-20">
        <div className="md:flex mx-auto z-20">
          <div className="md:mr-20">
            <div className="text-5xl font-bold">
              Want to see it in <br /> action?
            </div>
            <div className="text-xl my-3">
              Schedule a product demonstration with <br /> Arkhet and turn ideas
              into interactions.
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="mr-2" />
              <div className="text-xl my-3">Accelerate product validation</div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="mr-2" />
              <div className="text-xl my-3">
                Reduce costs for design, development, and management.
              </div>
            </div>
            <div className="flex">
              <img src={checkmark} alt="" className="mr-2" />
              <div className="text-xl my-3">Ideate, explore, and iterate.</div>
            </div>
            <img src={planet} alt="" className="" />
          </div>
          <div className="md:ml-10 z-20">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col p-2 md:p-10 border border-[#837E98] rounded-lg w-[300px] md:w-[400px] mx-auto bg-gradient-to-br from-[#5B4874] via-[#42476D] to-[#45406D] bg-opacity-50"
            >
              <input
                name="username"
                id="username"
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Name*"
                required
              />
              <input
                name="email"
                id="email"
                type="email"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Email*"
                required
              />
              <input
                name="company"
                id="company"
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Your company/organization"
              />
              <input
                name="userrole"
                id="userrole"
                type="text"
                className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
                placeholder="Your role"
              />
              <textarea
                name="info"
                id="info"
                className="border border-[#8778D7] bg-[#242424] p-2 my-2"
                rows={4}
                cols={50}
                placeholder="Please share any info that will help us prepare for the demo"
              />
              <div className="px-5 py-3 bg-[#9253E4] tracking-widest my-2 text-center">
                <button>BOOK A DEMO</button>
              </div>
              <Link to="/pricing" className="text-xl text-center">
                Ready to buy instead?
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
