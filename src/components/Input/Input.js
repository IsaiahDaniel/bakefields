import React from 'react';

const Input = ({ primary, ...otherProps }) => {

  return (
    <div className='mt-8'>
        <input className='border rounded w-full p-5' { ...otherProps } />
    </div>
  )
}

export default Input;