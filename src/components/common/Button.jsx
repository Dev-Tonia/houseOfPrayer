import React from "react";

export default function Button({ children, className, onClick, type }) {
  return (
    <button
      type={type}
      className={`  py-2 px-3 rounded-lg outline-none ${className}`}
      onClick={onClick}
    >
      {children}{" "}
    </button>
  );
}
