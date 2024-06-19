import React from "react";
import logo from "../../assets/img/logo.jpeg";

export default function Header() {
  return (
    <>
      <div className=" h-40 flex items-center justify-center">
        <img src={logo} alt="" className=" h-full" />
      </div>
      <div className=" bg-gray-200 text-center rounded-lg py-2 px-3 shadow-md my-4">
        <h1 className=" text-lg md:text-xl font-bold text-center">
          House Of Prayer Inventory
        </h1>
        <h6 className=" font-semibold text-lg">
          Collection count for tithe and offering
        </h6>
      </div>
    </>
  );
}
