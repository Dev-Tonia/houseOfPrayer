import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import Button from "../common/Button";
import CountCard from "../common/CountCard";
import CustomCheckbox from "../common/CustomCheckbox";

export default function ExpensesRecord() {
  const tableHeader = ["Mode", "", "Amount", "Purpose", "", "Date"]; //the empty space here is used to make sure that the div's are 5 columns for the custom table

  const [inputs, setInputs] = useState([
    { id: 1, purpose: "", amt: "", mode: "", date: "" },
  ]);

  // Handle input changes
  const handleChange = (e, id) => {
    const { name, value, type } = e.target;

    setInputs((prevInputs) =>
      prevInputs.map((input) => {
        if (type === "checkbox") {
          return input.id === id ? { ...input, mode: name } : input;
        }
        return input.id === id ? { ...input, [name]: value } : input;
      })
    );
  };
  // const [isChecked, setIsChecked] = useState(false);

  // Add new input row
  const addInput = () => {
    setInputs([
      ...inputs,
      { id: inputs.length + 1, purpose: "", amt: "", mode: false },
    ]);
  };

  // Calculate total number of ministries and total amount
  const totalMinistries = inputs.filter(
    (input) => input.purpose.trim() && input.amt.trim() !== ""
  ).length;
  const totalAmount = inputs.reduce((acc, input) => {
    let amount;
    // if (typeof +input.amt !== "number" || +input.amt < 0) {
    //   amount = 0;
    //   return;
    // }

    if (input.purpose.trim() && input.amt.trim() !== "") {
      amount = parseFloat(input.amt);
    }

    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  return (
    <>
      <Card>
        <CustomTable
          tableMinWidth={"min-w-[500px]"}
          headers={tableHeader}
          tableClass={"grid-cols-6"}
          title={"Expenses Record "}
        >
          {inputs.map((inputEl, index) => (
            <React.Fragment key={index + 1}>
              <div className=" col-span-2">
                <div className=" flex space-x-1">
                  <CustomCheckbox
                    label={"Cash"}
                    isChecked={inputEl.mode === "Cash"}
                    onChange={(e) => handleChange(e, inputEl.id)}
                  />
                  <CustomCheckbox
                    label={"Debit"}
                    isChecked={inputEl.mode === "Debit"}
                    onChange={(e) => handleChange(e, inputEl.id)}
                  />
                  <CustomCheckbox
                    label={"Check"}
                    isChecked={inputEl.mode === "Check"}
                    onChange={(e) => handleChange(e, inputEl.id)}
                  />
                </div>
              </div>
              <div>
                <CustomInput
                  inputClass={""}
                  inputData={{
                    placeholder: "$ amount",
                    type: "number",
                    min: 0,
                    name: `amt`,
                    value: `${inputEl.amt}`,
                  }}
                  onChange={(e) => handleChange(e, inputEl.id)}
                />
              </div>
              <div className=" col-span-2">
                <CustomInput
                  inputClass={"w-full"}
                  inputData={{
                    placeholder: "Purpose",
                    name: `purpose`,
                    value: `${inputEl.purpose}`,
                  }}
                  onChange={(e) => handleChange(e, inputEl.id)}
                />
              </div>
              <div>
                <CustomInput
                  inputClass={"w-full"}
                  inputData={{
                    placeholder: "date",
                    name: `date`,
                    type: "date",
                    value: `${inputEl.date}`,
                  }}
                  onChange={(e) => handleChange(e, inputEl.id)}
                />
              </div>
            </React.Fragment>
          ))}
        </CustomTable>
        <div>
          <Button
            className={"bg-primary text-white"}
            type={"button"}
            onClick={() => addInput()}
          >
            Add more Expenses
          </Button>
        </div>
        <div className=" py-3">
          <CountCard>
            Total Expenses: <span>${totalAmount.toFixed(2) ?? 0}</span>
          </CountCard>
        </div>
      </Card>
    </>
  );
}
