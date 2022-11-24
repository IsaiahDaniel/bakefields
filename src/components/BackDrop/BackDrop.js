import React from 'react';
import "./BackDrop.css";

const BackDrop = ({ toggleNav }) => {

    const toggleNavHandler = () => {
        toggleNav(false);
    }


  return (
    <div className='backdrop z-10' onClick={toggleNavHandler}></div>
  )
}

export default BackDrop