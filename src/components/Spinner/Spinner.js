import React from 'react';
import Loader from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <img src={Loader} alt="Loader" style={{ width: 25, height: 25 }} />
  )
}

export default Spinner