import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ScrollToTop } from "../ScrollToTop";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  );
}
