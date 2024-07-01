import React from "react";
import AmountTile from "../common/AmountTile";
import CustomTable from "../common/CustomTable";
import Card from "../common/Card";
const tableHeader = ["Date", "Mode", "Amount", "Purpose"];

const expenses = [
  {
    id: 1,
    date: "7 may 2024",
    mode: "Check",
    amt: 3000,
    purpose: "Equipment fix",
  },
  {
    id: 2,
    date: "7 may 2024",
    mode: "Check",
    amt: 3000,
    purpose: "Equipment fix",
  },
  {
    id: 3,
    date: "7 may 2024",
    mode: "Check",
    amt: 3000,
    purpose: "Equipment fix",
  },
  {
    id: 4,
    date: "7 may 2024",
    mode: "Check",
    amt: 3000,
    purpose: "Equipment fix",
  },
  {
    id: 5,
    date: "7 may 2024",
    mode: "Check",
    amt: 3000,
    purpose: "Equipment fix",
  },
];
export default function ExOverview() {
  return (
    <>
      <Card>
        <CustomTable
          headers={tableHeader}
          tableClass={"grid-cols-4"}
          tableMinWidth={"min-w-[600px]"}
          title={"Expenses Overview Table"}
        >
          {expenses.map((expense) => (
            <React.Fragment key={expense.id}>
              <div className=" text-primary text-nowrap pr-2">
                {expense.date}{" "}
              </div>
              <div className=" text-gray-950 font-medium text-nowrap pr-2">
                {expense.mode}{" "}
              </div>
              <div className=" text-gray-950 font-medium text-nowrap pr-2">
                {expense.amt}{" "}
              </div>
              <div className=" text-gray-950 font-medium text-nowrap pr-2">
                {expense.purpose}{" "}
              </div>
            </React.Fragment>
          ))}
        </CustomTable>
      </Card>
    </>
  );
}
