import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import group17 from "/subscribegroup17.svg";
import { useCreateSubscriptionMutation } from "@/lib/api/subscriptions";

export const Route = createFileRoute("/subscribe")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const { mutate: createSubscription } = useCreateSubscriptionMutation();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;
    createSubscription(
      { email },
      {
        onSuccess: () => navigate({ to: "/thankyousubscribe" }),
        onError: (error) => console.error("Subscription failed:", error),
      }
    );
  }

  return (
    <main className="flex-1 bg-[#242424] p-3 pt-[100px] text-[#D9D9D9] md:text-2xl overflow-hidden">
      <img
        src={group17}
        alt=""
        className="absolute bottom-60 sm:bottom-40 md:bottom-10 lg:bottom-[-7%] xl:bottom-[-8%] right-0 z-0"
      />
      <div className="flex flex-col mx-auto pb-52 sm:pb-72 md:pb-96 z-10">
        <div className="pt-10 md:pt-20 lg:pt-44 mx-auto">
          <div className="workfont text-2xl pb-10 sm:text-3xl md:text-4xl md:pb-12 xl:text-5xl text-center">
            Subscribe to get the latest updates
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[300px] mx-auto"
          >
            <input
              type="email"
              name="email"
              id="email"
              className="border border-[#8778D7] bg-[#242424] py-1 px-2 my-2"
              placeholder="Email*"
              required
            />
            <button className="text-center px-5 py-3 bg-[#9253E4] tracking-widest my-2 z-10">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
