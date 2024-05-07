import React from "react";

const TextField = ({
  label,
  name,
  type = "text",
  register,
  validation
}) => {
  return (
    <div>
      <label className="text-xl">{label}</label>
      <input
        id={name}
        className="min-h-10 border-2 border-green-900 border-solid rounded-md text-italic indent-3.5"
        name={name}
        type={type}
        {...register(name, validation)}
      />
    </div>
  );
};

export default TextField;

//https://github.com/milanreji/planhub-FE.git
