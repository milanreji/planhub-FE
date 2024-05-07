import React from "react";

function Button({ buttonType, buttonContent, className }) {
  return (
    <>
      <button type={buttonType}>{buttonContent}</button>
    </>
  );
}

export default Button;
