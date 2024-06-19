import React from "react";

export default function CustomInput({ inputData, inputClass, onChange }) {
  return (
    <div className="">
      {inputData.label && (
        <label htmlFor={inputData.name} className="font-semibold text-sm">
          <span>{inputData.label}:</span>
        </label>
      )}
      <input
        className={` w-full py-1 px-2 rounded-lg border  outline-none  ${inputClass}`}
        name={inputData.name}
        id={inputData.name}
        type={inputData.type ?? "text"}
        readOnly={inputData.readOnly ?? false}
        min={inputData.min ?? null}
        value={inputData.value}
        placeholder={inputData.placeholder}
        onChange={onChange}
      />
    </div>
  );
}
