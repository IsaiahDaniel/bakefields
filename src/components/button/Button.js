import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ text, primary, primaryInverse, inputType, iconButton, icon, light, disabled }) => {
  if (primary) {
    return (
      <button className="border border-[#6C63FF] text-[#6C63FF] rounded w-full p-5 mt-4 disabled:bg-slate-500" disabled={disabled}>
        {text}
      </button>
    );
  }

  if(iconButton){
    return (
    <div className="bg-[#F72238] hover:bg-[#fcb900]  pl-8 pr-8 pt-5 pb-5 text-white flex items-end justify-center">
      <button type={inputType} className="mr-3">{text}</button>
      { icon && <BsArrowRight size={20} /> }
    </div>
    )
  }

  if (light) {
    return (
        <div  className="bg-white text-black pl-8 pr-8 pt-5 pb-5 flex items-end justify-center hover:bg-[#fcb900]">
            <button type={inputType} className="mr-3">{text}</button>
            { icon && <BsArrowRight size={20} color="#333" /> }
        </div>
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
