import React, { useState } from "react";
import EventDetails from "../components/inventory/EventDetails";
import CashReceived from "../components/inventory/CashReceived";
import ChecksReceived from "../components/inventory/ChecksReceived";
import Heading from "../components/inventory/Heading";
import CashFromMinistries from "../components/inventory/CashFromMinistries";
import CashFromOnlineApp from "../components/inventory/CashFromOnlineApp";
export default function Inventory() {
  const formData = {
    eventDetails: {},
    cashReceived: {},
    cashFromOnlineApps: {},
    checksReceived: {},
    cashFromMinistries: {},
  };

  const getInputValues = (name, value) => {
    formData[`${name}`] = { ...value };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(JSON.stringify(formData));
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
          <button type="submit">submit</button>
        </form>
      </section>
    </>
  );
}
