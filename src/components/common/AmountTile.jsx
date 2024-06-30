import React from "react";

export default function AmountTile({ amt, amtTileClass }) {
  return (
    <>
      <div className={`font-bold text-[#333]  ${amtTileClass}`}>
        <span>$</span>
        <span className={`  ${amtTileClass}`}>{amt}</span>
      </div>
    </>
  );
}
