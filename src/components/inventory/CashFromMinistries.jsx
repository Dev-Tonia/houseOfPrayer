import React, { useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";

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
    (input) => input.ministry.trim() !== ""
  ).length;
  const totalAmount = inputs.reduce((acc, input) => {
    const amount = parseFloat(input.amt);
    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  getValue("cashFromMinistries", inputs);

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
          <button
            type="button"
            className=" bg-blue-600 text-white py-2 px-3 rounded-lg outline-none"
            onClick={addInput}
          >
            Add more Ministry
          </button>
        </div>
        <p>
          Total Ministry: <span>{totalMinistries}</span>
        </p>
        <p>
          Total Amount: <span>${totalAmount.toFixed(2)}</span>
        </p>
      </Card>
    </>
  );
}
