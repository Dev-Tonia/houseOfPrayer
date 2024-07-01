import React from "react";

export default function CustomCheckbox({ isChecked, onChange, label }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={onChange}
        className={`w-4 h-4 accent-primary rounded border-gray-300`}
      />
      <label htmlFor="custom-checkbox" className="ml-2 text-gray-700">
        {label}
      </label>
    </div>
  );
}
