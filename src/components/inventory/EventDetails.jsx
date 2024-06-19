import React from "react";
import CustomInput from "../common/CustomInput";
import Card from "../common/Card";
import useInput from "../../hooks/useInput";

export default function EventDetails({ getValue }) {
  // Initialize input values for each bill
  const { values, handleChange } = useInput({
    eventDate: "",
    eventName: "",
  });

  getValue("eventDetails", values);
  return (
    <>
      {/* Event details */}
      <Card>
        <h6 className=" text-center font-bold text-lg py-3">Event Details</h6>

        <div className=" min-[400px]:flex justify-between items-center gap-3">
          <CustomInput
            inputClass={"border"}
            inputData={{
              placeholder: "",
              type: "date",
              name: "eventDate",
              label: "Event Date",
              value: `${values.eventDate}`,
            }}
            onChange={handleChange}
          />
          <CustomInput
            inputClass={"border"}
            inputData={{
              placeholder: "",
              name: "eventName",
              label: "Ministry Event ",
              value: `${values.eventName}`,
            }}
            onChange={handleChange}
          />
        </div>
      </Card>
    </>
  );
}
