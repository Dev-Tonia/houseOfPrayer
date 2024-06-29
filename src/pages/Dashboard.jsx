import React from "react";
import DashboardStat from "../components/dashboard/DashboardStat";

export default function Dashboard() {
  return (
    <>
      <div className=" py-9">
        <div>
          <h4 className=" text-xl font-bold">Weekly Report</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <DashboardStat title={"Wallet balance"} amount={"4,454"} />
          <DashboardStat title={"Expense"} amount={"4,545"} />
          <DashboardStat title={"Total Money Deposited"} amount={"20,000"} />
          <DashboardStat title={"Amount In Cash Draw"} amount={"30,00"} />
          <DashboardStat title={"Total Cash Received "} amount={"50,00"} />
          <DashboardStat title={"Total Cash From Apps"} amount={"255"} />
          <DashboardStat title={"Total Cash From Checks"} amount={"255"} />
          <DashboardStat
            title={"Total Cash From other ministries"}
            amount={"255"}
          />
        </div>
      </div>
      <div className=" py-9">
        <div>
          <h4 className=" text-xl font-bold">Monthly Report</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <DashboardStat title={"Wallet balance"} amount={"4,454"} />
          <DashboardStat title={"Expense"} amount={"4,545"} />
          <DashboardStat title={"Total Money Deposited"} amount={"20,000"} />
          <DashboardStat title={"Amount In Cash Draw"} amount={"30,00"} />
          <DashboardStat title={"Total Cash Received "} amount={"50,00"} />
          <DashboardStat title={"Total Cash From Apps"} amount={"255"} />
          <DashboardStat title={"Total Cash From Checks"} amount={"255"} />
          <DashboardStat
            title={"Total Cash From other ministries"}
            amount={"255"}
          />
        </div>
      </div>
    </>
  );
}
