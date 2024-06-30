import React from "react";

export default function Header({ title, subTitle }) {
  return (
    <>
      <div className=" bg-gray-200 text-center rounded-lg py-2 px-3 shadow-md my-4">
        <h1 className=" text-lg md:text-xl font-bold text-center">{title} </h1>
        <h6 className=" font-semibold text-lg">
          Collection count for tithe and offering
        </h6>
      </div>
    </>
  );
}
