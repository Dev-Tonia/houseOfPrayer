// ExpensesRecord.jsx
import React, { useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTable from "../common/CustomTable";
import Button from "../common/Button";
import CountCard from "../common/CountCard";
import CustomCheckbox from "../common/CustomCheckbox";
import DeleteIcon from "../common/DeleteIcon";
import Toast from "../common/Toast";

export default function ExpensesRecord() {
  const tableHeader = ["Mode", "", "", "Amount", "Purpose", "", "Date", ""]; //the empty space here is used to make sure that the div's are 5 columns for the custom table
  const userString = sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const initial = { id: 1, purpose: "", amt: "", mode: "", date: "" };
  const [inputs, setInputs] = useState([initial]);
  const [errors, setErrors] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const body = [];
  const apiUrl = import.meta.env.VITE_API_URL;
  // handle the input
  const handleChange = (e, id) => {
    const { name, value, type } = e.target;

    // setting the the input fields
    setInputs((prevInputs) =>
      prevInputs.map((input) => {
        if (type === "checkbox") {
          return input.id === id ? { ...input, mode: name } : input;
        }
        return input.id === id ? { ...input, [name]: value } : input;
      })
    );
  };

  // add extra input filed
  const addInput = () => {
    setInputs([
      ...inputs,
      { id: inputs.length + 1, purpose: "", amt: "", mode: false },
    ]);
  };
  // remove an input
  const removeInput = (id) => {
    if (inputs.length === 1) {
      return;
    }
    const newInputs = inputs.filter((input) => input.id !== id);
    setInputs([...newInputs]);
  };

  // getting the total amount spend
  const totalAmount = inputs.reduce((acc, input) => {
    let amount;
    if (input.purpose.trim() && input.amt.trim() !== "") {
      amount = parseFloat(input.amt);
    }

    return acc + (isNaN(amount) ? 0 : amount);
  }, 0);

  // performing validation
  const validation = () => {
    const newErrors = [];
    // checking the inputs for error
    inputs.forEach((input) => {
      if (
        !input.amt.trim() &&
        !input.date &&
        !input.mode &&
        !input.purpose.trim()
      ) {
        newErrors.push({
          id: input.id,
          errMsg: "Remove empty input set",
        });
        return;
      }
      if (
        input.amt === "" ||
        input.date === "" ||
        input.mode === "" ||
        input.purpose === ""
      ) {
        newErrors.push({
          id: input.id,
          errMsg: "All the fields are required",
        });
        return;
      }
      body.push({
        amount: input.amt,
        purpose: input.purpose,
        mode: input.mode,
        date: input.date,
      });
    });

    setErrors([...newErrors]);
    if (newErrors.length > 0) {
      setIsOpen(true);
    }
    return newErrors.length === 0;
  };
  // submitting the data
  const submit = async (e) => {
    e.preventDefault();
    console.log(!validation());
    if (!validation()) return;

    // storing the data
    try {
      const res = await fetch(`${apiUrl}/v1/expenses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.api_token}`,
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.status === "failed") {
        setErrors([
          ...errors,
          { id: Date.now(), errMsg: "Invalid credential" },
        ]);
      }

      if (data.status === "success") {
        // setErrors({ general:  });
        setErrors([...errors, { id: Date.now(), errMsg: data.message }]);
        setInputs([initial]);
      }
    } catch (error) {
      setErrors([
        ...errors,
        {
          id: Date.now(),
          errMsg: "An unexpected error occurred. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const closeToast = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Card>
        {isOpen && (
          <Toast closeToast={closeToast}>
            {errors.map((error) => (
              <div className="text-red-500" key={error.errMsg}>
                {error.errMsg}
              </div>
            ))}
          </Toast>
        )}
        <form action="" onSubmit={submit}>
          <CustomTable
            tableMinWidth={"min-w-[500px]"}
            headers={tableHeader}
            tableClass={"grid-cols-8 items-center"}
            title={"Expenses Record "}
          >
            {inputs.map((inputEl, index) => (
              <React.Fragment key={index}>
                <div className="col-span-3">
                  <div className="flex space-x-1">
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
                      name: "amt",
                      value: inputEl.amt,
                    }}
                    onChange={(e) => handleChange(e, inputEl.id)}
                  />
                </div>
                <div className="col-span-2">
                  <CustomInput
                    inputClass={"w-full"}
                    inputData={{
                      placeholder: "Purpose",
                      name: "purpose",
                      value: inputEl.purpose,
                    }}
                    onChange={(e) => handleChange(e, inputEl.id)}
                  />
                </div>
                <div className="w-full">
                  <CustomInput
                    inputClass={"w-full"}
                    inputData={{
                      placeholder: "date",
                      name: "date",
                      type: "date",
                      value: inputEl.date,
                    }}
                    onChange={(e) => handleChange(e, inputEl.id)}
                  />
                </div>
                <button
                  className="w-fit"
                  onClick={() => removeInput(inputEl.id)}
                >
                  <DeleteIcon
                    className={"text-red-600 text-xl cursor-pointer"}
                  />
                </button>
              </React.Fragment>
            ))}
          </CustomTable>
          <div>
            <Button
              className={"bg-primary text-white"}
              type={"button"}
              onClick={addInput}
            >
              Add more Expenses
            </Button>
          </div>
          <div className="py-3">
            <CountCard>
              Total Expenses: <span>${totalAmount.toFixed(2) ?? 0}</span>
            </CountCard>
          </div>
          <Button
            className={"bg-primary text-white w-full my-3"}
            type={"submit"}
          >
            {isLoading ? "Loading ..." : "Submit"}
          </Button>
        </form>
      </Card>
    </>
  );
}
