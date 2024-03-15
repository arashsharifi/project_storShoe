import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routes/Routers";

export default function Layout() {
  return (
    <div className="flex flex-col font-comfortaa">
      <Header />
      <div className="mt-32">
        <Routers />
      </div>
      <Footer />
    </div>
  );
}
