// components/Navbar.js

import React from "react";

const Navbar = ({ openSidebar }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <button onClick={openSidebar} className="text-xl">
        ☰
      </button>
      <div className=" text-primary text-center">
        <h1 className="text-lg  font-bold ">House of prayer</h1>
        <p className=" text-xs">Cherubim and Seraphim church</p>
      </div>
    </nav>
  );
};

export default Navbar;
