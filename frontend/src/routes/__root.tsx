import * as React from "react";
import {
  Outlet,
  createRootRoute,
  createRootRouteWithContext,
  useRouterState,
} from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../ScrollToTop";
import { type QueryClient } from "@tanstack/react-query";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  const routerState = useRouterState();
  const [currentPath, setCurrentPath] = React.useState(
    routerState.location.pathname
  );

  React.useEffect(() => {
    setCurrentPath(routerState.location.pathname);
  }, [routerState.location.pathname]); // Ensures re-render on navigation

  const hideLayout = currentPath === "/register";

  return (
    <div className="flex flex-col min-h-screen nunitofont bg-[#242424]">
      <ScrollToTop />
      {!hideLayout && <Header />}
      <Outlet />
      {!hideLayout && <Footer />}
    </div>
  );
}
