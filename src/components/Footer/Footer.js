import React from 'react';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='bg-[#262626] text-white pt-10 min-h-full pb-10 md:mt-0 mt-48'>
        <div className="w-[70%] mx-auto flex-col md:flex md:flex-row items-center justify-between">
            <div className='mb-10 md:mb-0'>
                <h3 className='text-2xl'>Categories</h3>
                <p className='pt-5'>
                    Two step cake
                </p>
                <p className='pt-5'>
                    Three step cake
                </p>
            </div>

            <div className='mb-10 md:mb-0'>
                <h3 className='text-2xl'>Company</h3>
                <p className='pt-5'>
                    About Us
                </p>
                <p className='pt-5'>
                    Contact Us
                </p>
            </div>

            <div className='mb-10 md:mb-0'>
                <h3 className='text-2xl'>Policy</h3>
                <p className='pt-5'>
                    Return Policy
                </p>
                <p className='pt-5'>
                    Pivacy Policy
                </p>
                <p className='pt-5'>
                    Terms and conditions
                </p>
            </div>

            <div className='mb-10 md:mb-0'>
                <h3 className='text-2xl'>Connect on Social</h3>
                <div className='flex items-center justify-between mt-4'>
                    <AiFillFacebook size={24} />
                    <AiOutlineInstagram size={24} />
                    <AiOutlineWhatsApp size={24} />
                </div>
            </div>

        </div>
    </footer>
  )
}

export default Footer