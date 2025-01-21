import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider, createRouter } from "@tanstack/react-router";
import "./index.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return (
      <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px]">
        <p className="text-white text-xl md:text-4xl text-center pt-10 md:pt-32">
          Whoops! This isn't what you're looking for 😅
        </p>
        <div className="flex flex-col my-10 md:my-20 mx-auto w-[250px]">
          <Link
            to="/"
            className="nunitofont py-2 px-10 rounded bg-[#9253E4] text-center tracking-widest"
          >
            LET'S GO HOME
          </Link>
        </div>
      </main>
    );
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
