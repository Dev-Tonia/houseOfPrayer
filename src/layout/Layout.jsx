import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { useSidebarState } from "../hooks/useSidebarState";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { isSidebarOpen, updateIsOpen } = useSidebarState();

  return (
    <div className=" flex">
      <Sidebar isSidebarOpen={isSidebarOpen} updateIsOpen={updateIsOpen} />
      <main
        className={`bg-[#F2F2F2] w-full px-3 md:px-5 xl:px-7 py-6 overflow-hidden ${
          isSidebarOpen ? "xl:ml-80" : ""
        }`}
      >
        <Navbar openSidebar={updateIsOpen} />

        <Outlet />
      </main>
    </div>
  );
}
