import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import Button from "../common/Button";
import CountCard from "./CountCard";

export default function ChecksReceived({ getValue }) {
  const tableHeader = ["Check No", "Contributor", "Amount"];
  const [inputs, setInputs] = useState([
    { id: 1, checkNo: "", checkContributor: "", checkAmt: "" },
  ]);

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, [name]: value } : input
      )
    );
  };
  // Function to handle adding a new input element
  const addInput = () => {
    setInputs([
      ...inputs,
      {
        id: inputs.length + 1,
        checkNo: "",
        checkContributor: "",
        checkAmt: "",
      },
    ]);
  };

  // Calculate total number of checks
  const totalChecks = inputs.filter(
    (input) =>
      input.checkNo.trim() &&
      input.checkContributor.trim() &&
      input.checkAmt.trim() !== ""
  ).length;

  // Calculate total amount of checks
  const totalAmount = inputs.reduce((acc, input) => {
    let amount;
    if (
      input.checkNo.trim() &&
      input.checkContributor.trim() &&
      input.checkAmt.trim() !== ""
    ) {
      amount = parseFloat(input.checkAmt);
    }
    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Call getValue only when totalAmount changes
  useEffect(() => {
    getValue({
      name: "checksReceived",
      values: { ...inputs, amount: totalAmount },
    });
  }, [totalAmount]);

  return (
    <Card>
      <CustomTable
        headers={tableHeader}
        tableClass={"grid-cols-3"}
        title={"Check Received"}
      >
        {inputs.map((inputEl, index) => (
          <React.Fragment key={index + 1}>
            <CustomInput
              inputClass={""}
              inputData={{
                placeholder: "Check no",
                name: `checkNo`,
                value: `${inputEl.checkNo}`,
              }}
              onChange={(e) => handleChange(e, inputEl.id)}
            />
            <CustomInput
              inputClass={""}
              inputData={{
                placeholder: "contributor name",
                name: `checkContributor`,
                value: `${inputEl.checkContributor}`,
              }}
              onChange={(e) => handleChange(e, inputEl.id)}
            />
            <CustomInput
              inputClass={""}
              inputData={{
                type: "number",
                placeholder: "Check Amount",
                min: 0,
                name: `checkAmt`,
                value: `${inputEl.checkAmt}`,
              }}
              onChange={(e) => handleChange(e, inputEl.id)}
            />
          </React.Fragment>
        ))}
      </CustomTable>
      <div>
        <Button
          className={"bg-[#04367D] text-white"}
          type={"button"}
          onClick={() => addInput()}
        >
          Add more check
        </Button>
      </div>

      <div className=" py-3">
        <CountCard>
          Total Checks: <span>{totalChecks}</span>
        </CountCard>
        <CountCard>
          Total Amount: <span>${totalAmount.toFixed(2)}</span>
        </CountCard>
      </div>
    </Card>
  );
}
