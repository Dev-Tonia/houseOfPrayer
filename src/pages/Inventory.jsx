import React, { useState } from "react";
import EventDetails from "../components/inventory/EventDetails";
import CashReceived from "../components/inventory/CashReceived";
import ChecksReceived from "../components/inventory/ChecksReceived";
import Heading from "../components/inventory/Heading";
import CashFromMinistries from "../components/inventory/CashFromMinistries";
import CashFromOnlineApp from "../components/inventory/CashFromOnlineApp";
import FormFooter from "../components/inventory/FormFooter";
import Button from "../components/common/Button";
import CountCard from "../components/inventory/CountCard";
export default function Inventory() {
  const [formData, setFormData] = useState({
    eventDetails: {},
    cashReceived: {},
    cashFromOnlineApps: {},
    checksReceived: {},
    cashFromMinistries: {},
    countedBy: {},
  });

  const getInputValues = ({ name, values }) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: { ...values },
      };
    });
  };

  const totalAmount = [
    "cashReceived",
    "cashFromOnlineApps",
    "checksReceived",
    "cashFromMinistries",
  ]
    .map((key) => formData[key].amount)
    .reduce((acc, amount) => acc + amount, 0);

  console.log(totalAmount); // 3222
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <section className=" max-w-[600px] px-3 min-[500px]:px-5 sm:px-0 pb-10 mx-auto">
        <Heading />
        <form onSubmit={handleSubmit}>
          {/* event details */}
          <EventDetails getValue={getInputValues} />
          {/* cash received */}
          <CashReceived getValue={getInputValues} />
          {/* Cash from online apps */}
          <CashFromOnlineApp getValue={getInputValues} />
          {/* Checks received */}
          <ChecksReceived getValue={getInputValues} />
          {/* Cash from ministries */}
          <CashFromMinistries getValue={getInputValues} />
          {/* Counted by */}
          <FormFooter getValue={getInputValues}>
            <div className=" pt-3">
              <CountCard>
                Total Amount : <span>${totalAmount.toFixed(2)}</span>
              </CountCard>
            </div>
            <Button
              className={"bg-red-600 text-white mt-5 w-full sm:w-7/12"}
              type={"submit"}
            >
              Submit
            </Button>
          </FormFooter>
        </form>
      </section>
    </>
  );
}
