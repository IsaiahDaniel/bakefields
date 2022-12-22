import React from "react";

const Button = ({ text, primary, primaryInverse, inputType, disabled }) => {
  if (primary) {
    return (
      <button className="border border-[#6C63FF] text-[#6C63FF] rounded w-full p-5 mt-4 disabled:bg-slate-500" disabled={disabled}>
        {text}
      </button>
    );
  }

  if (primaryInverse) {
    return (
      <button className="border border-[#F72238] bg-[#F72238] hover:bg-white hover:text-black text-white rounded w-full p-5 mt-4 disabled:bg-slate-500" disabled={disabled}>
        {text}
      </button>
    );
  }

  return (
    <button
      className="flex pl-5 pr-5 ptb-10 rounded border mt-4 border-red-500 text-red-600 hover:bg-red-700 hover:text-white disabled:bg-slate-500"
      type={inputType}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  inputType: "button",
  disabled: false
};

export default Button;
