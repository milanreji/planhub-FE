import React from "react";

function Button({ label }) {
  return (
    <button className="text-white font-mono bg-red-500 rounded-lg h-10 hover:bg-red-600">
      {label}
    </button>
  );
}

export default Button;
