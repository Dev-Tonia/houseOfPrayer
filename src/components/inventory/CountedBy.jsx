import React, { Children, useEffect } from "react";
import useInput from "../../hooks/useInput";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";

export default function CountedBy({ getValue, children }) {
  // Initialize input values for each bill
  const { values, handleChange } = useInput({
    finSec1: "",
    finSec2: "",
  });
  // Call getValue only when totalAmount changes
  useEffect(() => {
    getValue({
      name: "countedBy",
      values: { ...values },
    });
  }, [values]);

  return (
    <>
      <Card>
        <h6 className=" text-center font-bold text-lg py-3">Counted By</h6>

        <div className=" gap-3">
          <CustomInput
            inputClass={"border"}
            inputData={{
              placeholder: "",
              name: "finSec1",
              label: "Name",
              value: `${values.finSec1}`,
            }}
            onChange={handleChange}
          />
          <CustomInput
            inputClass={"border"}
            inputData={{
              placeholder: "",
              name: "finSec2",
              label: "Name",
              value: `${values.finSec2}`,
            }}
            onChange={handleChange}
          />
        </div>
        {children}
      </Card>
    </>
  );
}
