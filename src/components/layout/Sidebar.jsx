import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import SidebarItem from "./SidebarItem";
import logo from "../../assets/img/brand-logo-removebg-preview.png";

const expenseManagement = [
  {
    title: "Expenses",
    link: "/expenses",
  },
  {
    title: "Expense Overview",
    link: "/expense-overview",
  },
];
const collectionManagement = [
  {
    title: "Collection",
    link: "/collection",
  },
  {
    title: "Collection Overview",
    link: "/collection-overview",
  },
];

export default function Sidebar({ isSidebarOpen, updateIsOpen }) {
  return (
    <>
      <aside
        id="sidebar"
        className={`shadow-lg fixed top-0 left-0 z-20 flex-col flex-shrink-0 w-80  h-full duration-200 transition-width ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        aria-label="Sidebar"
      >
        <div className="flex relative flex-col flex-1 pt-0 min-h-full bg-gray-50">
          <div className="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
            <div className=" h-40 flex items-center justify-center">
              <img src={logo} alt="" className=" h-full" />
            </div>
            <div
              className="flex-1 bg-gray-50"
              id="sidebar-items"
              style={{
                paddingRight: isSidebarOpen ? "12px" : "0",
                paddingLeft: isSidebarOpen ? "6px" : "12px",
              }}
            >
              <ul className="pb-2 pt-1">
                <li>
                  <Link
                    to="/"
                    className="flex items-center py-2.5 px-4 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 group transition-all duration-200"
                  >
                    <div className="bg-white shadow-lg text-dark-700 w-8 h-8 p-1.5 mr-1 rounded-lg flex items-center justify-center">
                      <Icon
                        icon="mage:dashboard-fill"
                        className="text-4xl font-bold text-primary"
                      />
                    </div>
                    <span className="ml-3 text-dark-500 text-sm font-medium">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <SidebarItem
                  title="Collections Management"
                  list={collectionManagement}
                  icon="fluent:collections-24-filled"
                />
                <SidebarItem
                  title="Expense Management"
                  list={expenseManagement}
                  icon="uil:transaction"
                />
                <li>
                  <Link
                    to="/agent/profile"
                    className="flex items-center py-2.5 px-4 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 group transition-all duration-200"
                  >
                    <div className="bg-white shadow-lg text-dark-700 w-8 h-8 p-1.5 mr-1 rounded-lg flex items-center justify-center">
                      <Icon
                        icon="material-symbols:settings-account-box-outline-rounded"
                        className="text-4xl font-bold text-primary"
                      />
                    </div>
                    <span className="ml-3 text-dark-500 text-sm font-medium">
                      Account Setting
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        onClick={updateIsOpen}
        className={`fixed top-0 inset-0 z-10 bg-gray-900 opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        id="sidebarBackdrop"
      ></div>
    </>
  );
}
