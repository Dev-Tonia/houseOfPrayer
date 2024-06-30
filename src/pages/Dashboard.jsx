import React from "react";
import DashboardStat from "../components/dashboard/DashboardStat";
import Report from "../components/dashboard/Report";
import TransactionTable from "../components/dashboard/TransactionTable";
const reports = [
  { id: 1, title: "Wallet balance", amount: "4,454" },
  { id: 2, title: "Expense", amount: "4,454" },
  { id: 3, title: "Total Cash Received", amount: "4,454" },
  { id: 4, title: "Total Money Deposited", amount: "4,454" },
  { id: 5, title: "Amount In Cash Draw", amount: "4,454" },
  { id: 6, title: "Total Cash From Apps", amount: "4,454" },
  { id: 7, title: "Total Cash From Checks", amount: "4,454" },
  { id: 8, title: "Total Cash From other ministries", amount: "4,454" },
];

export default function Dashboard() {
  return (
    <>
      {/* Weekly report */}
      <Report title={"Weekly Report"} reports={reports} />
      {/* monthly report */}
      <Report title={"Monthly Report"} reports={reports} />

      {/* ALl transactions table
       */}
      <TransactionTable />
    </>
  );
}
