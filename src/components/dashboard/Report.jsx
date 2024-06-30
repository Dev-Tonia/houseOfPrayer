import React from "react";
import DashboardStat from "./DashboardStat";

export default function Report({ title, reports }) {
  return (
    <div className=" pt-9 pb-4">
      <div className=" mb-2">
        <h4 className=" text-xl font-bold">{title}</h4>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {reports.map((report) => (
          <DashboardStat
            title={report.title}
            amount={report.amount}
            key={report.id}
          />
        ))}
      </div>
    </div>
  );
}
