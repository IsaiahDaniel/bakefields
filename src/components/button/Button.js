import React from 'react';

const Button = ({ text, primary, inputType }) => {

  if(primary){
    return (
        <button className='border border-[#6C63FF] text-[#6C63FF] rounded w-full p-5 mt-4'>
          {text}
        </button>
    )
}

  return (
    <button className='flex pl-5 pr-5 ptb-5 rounded border mt-4 border-red-500 text-red-600 hover:bg-red-700 hover:text-white' type={inputType}>
        { text }
    </button>
  )
}

Button.defaultProps = {
    inputType: "button"
}

export default Button;