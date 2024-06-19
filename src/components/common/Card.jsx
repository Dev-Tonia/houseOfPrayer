import React from "react";

export default function Card({ children }) {
  return (
    <>
      <div className=" bg-white p-3 rounded-lg sha shadow-md mt-5 overflow-x-auto">
        {children}
      </div>
    </>
  );
}
