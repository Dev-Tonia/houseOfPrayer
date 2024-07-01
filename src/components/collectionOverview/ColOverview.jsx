import React from "react";
import CustomTable from "../common/CustomTable";
import Card from "../common/Card";
import AmountTile from "../common/AmountTile";

const tableHeader = [
  "Event Date",
  "Cash Received",
  "Cash From Online App",
  "Cash From Checks",
  "Cash From Other Ministry",
  "Total Amount",
];

const txns = [
  {
    id: 1,
    date: "7 may 2024",
    cash: 10000,
    onlineApp: 3000,
    checks: 7000,
    ministry: 2000,
    total: 22000,
  },
  {
    id: 2,
    date: "7 may 2024",
    cash: 10000,
    onlineApp: 3000,
    checks: 7000,
    ministry: 2000,
    total: 22000,
  },
  {
    id: 3,
    date: "7 may 2024",
    cash: 10000,
    onlineApp: 3000,
    checks: 7000,
    ministry: 2000,
    total: 22000,
  },
  {
    id: 4,
    date: "7 may 2024",
    cash: 10000,
    onlineApp: 3000,
    checks: 7000,
    ministry: 2000,
    total: 22000,
  },
  {
    id: 5,
    date: "7 may 2024",
    cash: 10000,
    onlineApp: 3000,
    checks: 7000,
    ministry: 2000,
    total: 22000,
  },
];

export default function CollectionOverview() {
  return (
    <>
      <Card>
        <CustomTable
          headers={tableHeader}
          tableClass={"grid-cols-6"}
          tableMinWidth={"min-w-[600px]"}
          title={"Collection Overview Table"}
        >
          {txns.map((txn) => (
            <React.Fragment key={txn.id}>
              <div className=" text-primary text-nowrap pr-2">{txn.date} </div>
              <AmountTile amt={txn.cash} />
              <AmountTile amt={txn.onlineApp} />
              <AmountTile amt={txn.checks} />
              <AmountTile amt={txn.ministry} />
              <AmountTile amt={txn.total} amtTileClass={"text-primary"} />
            </React.Fragment>
          ))}
        </CustomTable>
      </Card>
    </>
  );
}
