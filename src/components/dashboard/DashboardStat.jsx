import React from "react";
import AmountTile from "../common/AmountTile";

export default function DashboardStat({ children, title, amount }) {
  return (
    <>
      <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="uppercase text-gray-500 font-medium">{title}</h2>
            {children ? children : <AmountTile amt={amount} />}
          </div>
        </div>
      </div>
    </>
  );
}
