import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/benefits")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      Hello "/benefits"!
    </main>
  );
}
