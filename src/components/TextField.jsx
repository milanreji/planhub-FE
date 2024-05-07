import React from "react";

const TextField = ({
  id,
  type,
  label,
  placeholder,
  inputClassName,
  labelClassName,
}) => {
  return (
    <>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>{" "}
      <input
        className={inputClassName}
        type={type}
        id={id}
        placeholder={placeholder}
        alt=""
      />
    </>
  );
};

export default TextField;
