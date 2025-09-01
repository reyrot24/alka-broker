import React from "react";

import { Navbar1 } from "./pages/home/Navbar";
import { Footer4 } from "./pages/home/Footer4";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar1 />
      {children}
      <Footer4 />
    </>
  );
};

export default Layout;
