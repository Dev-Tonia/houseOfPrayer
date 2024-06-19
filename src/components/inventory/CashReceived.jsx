import React, { useEffect, useState } from "react";
import CustomInput from "../common/CustomInput";
import Card from "../common/Card";
import CustomTable from "../common/CustomTable";
import useInput from "../../hooks/useInput";

export default function CashReceived({ getValue }) {
  const bills = ["100", "50", "20", "10", "5", "1"];
  const tableHeader = ["Bills", "Quantity", "Amount"];

  // Separate state initial for quantities
  const initialQuantitiesState = bills.reduce((acc, bill) => {
    acc[`${bill}input`] = "";
    return acc;
  }, {});

  // State for quantities
  const { values: quantities, handleChange } = useInput(initialQuantitiesState);

  // State for amounts
  const [amounts, setAmounts] = useState(() =>
    bills.reduce((acc, bill) => {
      acc[`${bill}amount`] = "0.00";
      return acc;
    }, {})
  );

  // Calculate amount and update state based on quantity changes
  useEffect(() => {
    const newAmounts = { ...amounts };

    bills.forEach((bill) => {
      newAmounts[`${bill}amount`] = calculateAmount(
        quantities[`${bill}input`],
        parseFloat(bill)
      ).toFixed(2);
    });

    setAmounts(newAmounts);
  }, [quantities]);

  // calculate the amount  based on the bills
  const calculateAmount = (quantity, bill) => {
    const qty = parseFloat(quantity);
    if (isNaN(qty) || qty <= 0) {
      return 0;
    }
    return qty * bill;
  };

  // getting the total amount
  const totalAmount = bills.reduce((acc, bill) => {
    const amount = parseFloat(amounts[`${bill}amount`]);
    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  // getting the total quantities
  const totalQuantities = bills.reduce((acc, bill) => {
    const quantity = parseFloat(quantities[`${bill}input`]);
    return acc + (isNaN(quantity) ? 0 : quantity);
  }, 0);

  getValue("cashReceived", {
    ...quantities,
    ...amounts,
  });

  return (
    <Card>
      <CustomTable
        headers={tableHeader}
        tableClass={"grid-cols-3"}
        title={"Cash Received"}
      >
        {bills.map((bill) => (
          <React.Fragment key={bill}>
            <h6 className="font-bold">{bill}.00</h6>
            <CustomInput
              inputClass=""
              inputData={{
                placeholder: "Quantity",
                min: 1,
                type: "number",
                name: `${bill}input`,
                value: quantities[`${bill}input`],
              }}
              onChange={handleChange}
            />
            <CustomInput
              inputClass="border-b-2 bg-gray-50"
              inputData={{
                placeholder: "Amount",
                name: `${bill}amount`,
                value: `$${amounts[`${bill}amount`]}`,
                readOnly: true,
              }}
            />
          </React.Fragment>
        ))}
      </CustomTable>
      <p>
        Total Bills Count: <span>{totalQuantities}</span>
      </p>
      <p>
        Total Amount: <span>${totalAmount.toFixed(2)}</span>
      </p>
    </Card>
  );
}
