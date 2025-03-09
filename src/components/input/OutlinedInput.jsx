import "../../../src/generic.css";

const OutlinedInput = ({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  onChange,
  error,
  value,
}) => {
  return (
    <div className="flex flex-col">
      <div
        className={`relative border-2 ${
          error ? "border-red-500" : "border-border-inputBorder"
        } rounded-md p-3 mt-2`}
      >
        <label
          htmlFor={id}
          className="absolute text-white bg-secondary px-1 font-bold"
          style={{ top: "-10px", left: "10px", fontSize: "0.875rem" }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent p-1 text-sm focus:outline-none text-white addcoinsfeilds"
          required={required}
          onChange={onChange}
          value={value ? value : ""}
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}{" "}
    </div>
  );
};

export default OutlinedInput;
