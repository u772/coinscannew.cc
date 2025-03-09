import React from "react";
import "../../../src/generic.css";

const OutlinedTextArea = ({
  id,
  label,
  placeholder,
  required = false,
  rows = 3, // Default number of rows
  defaultValue = "",
  onChange,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`relative border-2 ${
          error ? "border-red-500" : "border-border-inputBorder"
        } rounded-md p-2 mt-2`}
      >
        <label
          htmlFor={id}
          className="absolute -top-3 left-2 px-1 text-sm text-white"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
          id={id}
          rows={rows}
          className="w-full bg-transparent p-1 text-sm focus:outline-none appearance-none resize-none text-text-light addcoinstextarea"
          required={required}
          defaultValue={value}
          placeholder={placeholder}
          onChange={onChange}
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}{" "}
    </div>
  );
};

export default OutlinedTextArea;
