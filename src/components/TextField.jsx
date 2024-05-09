import React from "react";

const TextField = ({
  label,
  type,
  name,
  register,
  validation,
  placeholder,
}) => {
  return (
    <>
      <label className="text-xl">{label}</label>
      <input
        id={name}
        className="min-h-10 border-2 border-green-900 border-solid rounded-md text-italic indent-3.5"
        name={name}
        type={type}
        {...register(name, validation)}
        placeholder={placeholder}
      />
    </>
  );
};

export default TextField;

//https://github.com/milanreji/planhub-FE.git
