import React from 'react';
import Loader from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className='flex items-center justify-center'>
      <img src={Loader} alt="Loader" style={{ width: 300, height: 300 }} />
    </div>
  )
}

export default Spinner;