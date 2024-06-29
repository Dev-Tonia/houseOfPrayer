import React from "react";

export default function Card({ children, cardClass = "overflow-x-auto" }) {
  return (
    <>
      <div className={` bg-white p-3 rounded-lg shadow-md mt-5 ${cardClass} `}>
        {children}
      </div>
    </>
  );
}
