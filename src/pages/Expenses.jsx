import React from "react";
import Heading from "../components/common/Heading";
import ExpensesRecord from "../components/expenses/ExpensesRecord";

export default function Expenses() {
  return (
    <section className=" max-w-[800px] px-3 min-[500px]:px-5 sm:px-0 pb-10 mx-auto">
      <Heading
        title={"House Of Prayer Expenses"}
        subtitle={"Expenses Recording "}
      />
      <ExpensesRecord />
    </section>
  );
}
