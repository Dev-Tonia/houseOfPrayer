import React, { useEffect } from "react";
import CustomInput from "../common/CustomInput";
import Card from "../common/Card";
import useInput from "../../hooks/useInput";

export default function DepositedBy({ getValue }) {
  // Initialize input values for each bill
  const { values, handleChange } = useInput({
    amountDeposited: "",
    amountInCashDraw: "",
    depositedBy: "",
  });
  // Call getValue only when totalAmount changes
  useEffect(() => {
    getValue({
      name: "depositedBy",
      values: { ...values },
    });
  }, [values]);

  // getValue("eventDetails", values);
  return (
    <>
      <div className=" min-[400px]:flex justify-between items-center gap-3">
        <CustomInput
          inputClass={"border"}
          inputData={{
            placeholder: "",
            type: "number",
            min: 0,
            name: "amountDeposited",
            label: "Amount Deposited",
            value: `${values.amountDeposited}`,
          }}
          onChange={handleChange}
        />
        <CustomInput
          inputClass={"border"}
          inputData={{
            placeholder: "",
            type: "number",
            min: 0,
            name: "amountInCashDraw",
            label: "Amount In Cash Draw ",
            value: `${values.amountInCashDraw}`,
          }}
          onChange={handleChange}
        />
      </div>
      <CustomInput
        inputClass={""}
        inputData={{
          placeholder: "",
          min: 0,
          name: "depositedBy",
          label: "Deposited By ",
          value: `${values.depositedBy}`,
        }}
        onChange={handleChange}
      />
    </>
  );
}
