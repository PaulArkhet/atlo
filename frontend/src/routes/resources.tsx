import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/resources")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
      Hello "/resources"!
    </main>
  );
}
