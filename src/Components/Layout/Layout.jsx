import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <span className="min-vh-100">
        <Outlet />
      </span>
      <Footer />
    </>
  );
}
