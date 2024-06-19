import React from "react";
import CustomInput from "../common/CustomInput";
import Card from "../common/Card";
import CustomTable from "../common/CustomTable";
import useInput from "../../hooks/useInput";

export default function CashFromOnlineApp({ getValue }) {
  const platforms = ["Cash App", "Zelle"];
  const tableHeader = ["App", "Amount", ""];

  // Initialize the useInput hook with default values for each platform
  const { values, handleChange } = useInput(
    platforms.reduce((acc, platform) => {
      acc[`${platform}amount`] = "";
      return acc;
    }, {})
  );

  // Calculate total amount
  const totalAmount = platforms.reduce((acc, platform) => {
    const amount = parseFloat(values[`${platform}amount`]) || 0;
    return acc + amount;
  }, 0);

  getValue("cashFromOnlineApps", values);

  return (
    <Card>
      <CustomTable
        headers={tableHeader}
        tableClass={"grid-cols-3"}
        title={"Cash From Online Apps"}
      >
        {platforms.map((platform) => (
          <React.Fragment key={platform}>
            <h6 className=" font-bold ">{platform}</h6>
            <div className=" col-span-2">
              <CustomInput
                inputClass={""}
                inputData={{
                  type: "number",
                  placeholder: "amount",
                  name: `${platform}amount`,
                  value: values[`${platform}amount`], // Set the value from the hook
                }}
                onChange={handleChange}
              />
            </div>
          </React.Fragment>
        ))}
      </CustomTable>
      Total Amount: <span>${totalAmount.toFixed(2)}</span>
    </Card>
  );
}
