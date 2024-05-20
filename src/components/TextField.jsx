import React from "react";

const TextField = ({
  label,
  type,
  name,
  register,
  validation,
  placeholder,
  error,
  errorMessage,
  inputclassName,
}) => {
  return (
    <>
      <label className="text-xl font-mono">{label}</label>
      <input
        id={name}
        className={` min-h-10 ${
          error
            ? "border-2 border-red-500 focus:border-red-500"
            : "border border-gray-400 focus:outline-none focus:border-2 focus:border-sky-500"
        } w-96 border border-solid rounded-md font-mono text-sm indent-3.5 bg-transparent`}
        name={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
      />
      <small className="text-red-500 text-xs">{errorMessage}</small>
    </>
  );
};

export default TextField;
