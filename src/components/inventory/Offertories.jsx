import React, { useEffect, useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import Button from "../common/Button";
import CountCard from "./CountCard";

export default function Offertories({ getValue }) {
  const tableHeader = ["Amount", " Purpose", ""];

  const [inputs, setInputs] = useState([{ id: 1, OfferingType: "", amt: "" }]);

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
    setInputs([
      ...inputs,
      { id: inputs.length + 1, OfferingType: "", amt: "" },
    ]);
  };

  // Calculate total number of ministries and total amount

  const totalAmount = inputs.reduce((acc, input) => {
    let amount;
    if (input.OfferingType.trim() && input.amt.trim() !== "") {
      amount = parseFloat(input.amt);
    }
    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  // Call getValue only when totalAmount changes
  useEffect(() => {
    getValue({
      name: "Offertories",
      values: { ...inputs, amount: totalAmount },
    });
  }, [totalAmount]);

  return (
    <>
      <Card>
        <CustomTable
          headers={tableHeader}
          tableClass={"grid-cols-3"}
          title={"Offering Purpose "}
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
                    placeholder: "OfferingType name",
                    name: `OfferingType`,
                    value: `${inputEl.OfferingType}`,
                  }}
                  onChange={(e) => handleChange(e, inputEl.id)}
                />
              </div>
            </React.Fragment>
          ))}
        </CustomTable>
        <div>
          <Button
            className={"bg-[#04367D] text-white"}
            type={"button"}
            onClick={() => addInput()}
          >
            Add more Offering Type
          </Button>
        </div>
        <div className=" py-3">
          <CountCard>
            Total Amount: <span>${totalAmount.toFixed(2)}</span>
          </CountCard>
        </div>
      </Card>
    </>
  );
}
