import React from 'react';
import { IoIosStar, IoIosStarOutline, IoIosStarHalf } from "react-icons/io";

const Rating = ({ color }) => {
  return (
    <div className='flex items-center'>
        <IoIosStar style={{ color }} size="24" />
        <IoIosStar style={{ color }} size="24" />
        <IoIosStarHalf style={{ color }} size="24" />
        <IoIosStarOutline style={{ color }} size="24" />
    </div>
  )
}

Rating.defaultProps = {
    color: "#FAB814"
}

export default Rating;