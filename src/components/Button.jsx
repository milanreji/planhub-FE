import React from "react";

function Button({ label }) {
  return (
    <button className="text-white bg-red-400 rounded-lg w-96 h-10">
      {label}
    </button>
  );
}

export default Button;
