import React from "react";
import AmountTile from "../common/AmountTile";
import CustomTable from "../common/CustomTable";
import Card from "../common/Card";
const tableHeader = [
  "Date",
  "Amount Collected",
  "Amount In Cash Draw",
  "Amount Deposited",
  "Amount Expend",
  "Wallet Balance",
];

const txns = [
  {
    id: 1,
    date: "1-7 may 2024",
    amountCollected: 10000,
    amtInCashDraw: 3000,
    amtDeposited: 7000,
    amtExpend: 2000,
    walletBal: 80000,
  },
  {
    id: 2,
    date: "1-7 may 2024",
    amountCollected: 10000,
    amtInCashDraw: 3000,
    amtDeposited: 7000,
    amtExpend: 2000,
    walletBal: 80000,
  },
  {
    id: 3,
    date: "1-7 may 2024",
    amountCollected: 10000,
    amtInCashDraw: 3000,
    amtDeposited: 7000,
    amtExpend: 2000,
    walletBal: 80000,
  },
  {
    id: 4,
    date: "1-7 may 2024",

    amountCollected: 10000,
    amtInCashDraw: 3000,
    amtDeposited: 7000,
    amtExpend: 2000,
    walletBal: 80000,
  },
  {
    id: 5,
    date: "1-7 may 2024",

    amountCollected: 10000,
    amtInCashDraw: 3000,
    amtDeposited: 7000,
    amtExpend: 2000,
    walletBal: 80000,
  },
];

export default function TransactionTable() {
  return (
    <Card>
      <CustomTable
        headers={tableHeader}
        tableClass={"grid-cols-6"}
        tableMinWidth={"min-w-[600px]"}
        title={"Transaction Table"}
      >
        {txns.map((txn) => (
          <React.Fragment key={txn.id}>
            <div className=" text-primary text-nowrap pr-2">{txn.date} </div>
            <AmountTile amt={txn.amountCollected} />
            <AmountTile amt={txn.amtInCashDraw} />
            <AmountTile amt={txn.amtDeposited} />
            <AmountTile amt={txn.amtExpend} amtTileClass={" text-red-500"} />
            <AmountTile amt={txn.walletBal} />
          </React.Fragment>
        ))}
      </CustomTable>
    </Card>
  );
}
