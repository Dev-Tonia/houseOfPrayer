import React, { useState } from "react";
import DeleteIcon from "./DeleteIcon.jsx";
export default function Toast({ children, closeToast }) {
  return (
    <>
      <div className=" bg-slate-200 py-5 px-7 inline-block rounded">
        <div className=" flex justify-end">
          <button className=" w-fit cursor-pointer my-3 " onClick={closeToast}>
            <DeleteIcon className={"  "} />
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
