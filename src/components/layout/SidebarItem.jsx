// SidebarItem.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const SidebarItem = ({ title, list, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        onClick={toggleItem}
        className="flex items-center w-full py-2.5 px-4 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 group transition-all duration-200"
      >
        <div className="bg-white shadow-lg text-dark-700 w-8 h-8 p-1.5 mr-1 rounded-lg flex items-center justify-center">
          <Icon icon={icon} className="text-4xl font-bold text-primary" />
        </div>
        <span className="ml-3 text-dark-500 text-sm font-medium">{title}</span>
        <span className="ml-auto">{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && (
        <ul className="pl-4">
          {list.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className="flex items-center py-2 px-4 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 group transition-all duration-200"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarItem;
