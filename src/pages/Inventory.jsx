import React, { useState } from "react";
import EventDetails from "../components/inventory/EventDetails";
import CashReceived from "../components/inventory/CashReceived";
import ChecksReceived from "../components/inventory/ChecksReceived";
import Heading from "../components/inventory/Heading";
import CashFromMinistries from "../components/inventory/CashFromMinistries";
import CashFromOnlineApp from "../components/inventory/CashFromOnlineApp";
import CountedBy from "../components/inventory/CountedBy";
import Button from "../components/common/Button";
import CountCard from "../components/inventory/CountCard";
import Offertories from "../components/inventory/Offertories";
import DepositedBy from "../components/inventory/DepositedBy";

export default function Inventory() {
  const [formData, setFormData] = useState({
    eventDetails: {},
    cashReceived: {},
    Offertories: {},
    cashFromOnlineApps: {},
    checksReceived: {},
    cashFromMinistries: {},
    countedBy: {},
    depositedBy: {},
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
    "Offertories",
    "cashFromOnlineApps",
    "checksReceived",
    "cashFromMinistries",
  ]
    .map((key) => formData[key].amount)
    .reduce((acc, amount) => acc + amount, 0);

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
          <Offertories getValue={getInputValues} />
          {/* Cash from online apps */}
          <CashFromOnlineApp getValue={getInputValues} />
          {/* Checks received */}
          <ChecksReceived getValue={getInputValues} />
          {/* Cash from ministries */}
          <CashFromMinistries getValue={getInputValues} />
          {/* Counted by */}
          <CountedBy getValue={getInputValues}>
            <div className=" pt-3">
              <CountCard>
                Total Amount : <span>${totalAmount.toFixed(2)}</span>
              </CountCard>
            </div>
            <DepositedBy getValue={getInputValues} />
            <Button
              className={"bg-red-600 text-white mt-5 w-full sm:w-7/12"}
              type={"submit"}
            >
              Submit
            </Button>
          </CountedBy>
        </form>
      </section>
    </>
  );
}
