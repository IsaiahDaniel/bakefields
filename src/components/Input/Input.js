import React from 'react';

const Input = ({ primary, ...otherProps }) => {

  return (
    <div className='mt-8'>
        <input className='border rounded w-full p-5 focus:border-[#ccc]' { ...otherProps } />
    </div>
  )
}

export default Input;