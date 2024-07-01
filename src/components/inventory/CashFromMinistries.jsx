import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import Button from "../common/Button";
import CountCard from "../common/CountCard";

export default function CashFromMinistries({ getValue }) {
  const tableHeader = ["Amount", " Ministry", ""];

  const [inputs, setInputs] = useState([{ id: 1, ministry: "", amt: "" }]);

  // Handle input changes
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setInputs((prevInputs) =>
      prevInputs.map((input) =>
        input.id === id ? { ...input, [name]: value } : input
      )
    );
  };

  // Add new input row
  const addInput = () => {
    setInputs([...inputs, { id: inputs.length + 1, ministry: "", amt: "" }]);
  };

  // Calculate total number of ministries and total amount
  const totalMinistries = inputs.filter(
    (input) => input.ministry.trim() && input.amt.trim() !== ""
  ).length;
  const totalAmount = inputs.reduce((acc, input) => {
    let amount;
    if (input.ministry.trim() && input.amt.trim() !== "") {
      amount = parseFloat(input.amt);
    }
    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Call getValue only when totalAmount changes
  useEffect(() => {
    getValue({
      name: "cashFromMinistries",
      values: { ...inputs, amount: totalAmount },
    });
  }, [totalAmount]);

  return (
    <>
      <Card>
        <CustomTable
          headers={tableHeader}
          tableClass={"grid-cols-3"}
          title={"Income from other ministries Included in the deposit "}
        >
          {inputs.map((inputEl, index) => (
            <React.Fragment key={index + 1}>
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
                    placeholder: "ministry name",
                    name: `ministry`,
                    value: `${inputEl.ministry}`,
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
            Add more Ministry
          </Button>
        </div>
        <div className=" py-3">
          <CountCard>
            Total Ministry: <span>{totalMinistries}</span>
          </CountCard>
          <CountCard>
            Total Amount: <span>${totalAmount.toFixed(2)}</span>
          </CountCard>
        </div>
      </Card>
    </>
  );
}
