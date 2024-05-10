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
      <label className="text-xl font-serif">{label}</label>
      <input
        id={name}
        className="min-h-10 w-96 border border-green-900 border-solid rounded-md font-extralight text-italic indent-3.5 bg-transparent"
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
