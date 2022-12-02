import React from "react";
import {
  // AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FiFacebook } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t-2 pt-10 h-full pb-10 md:mt-0 mt-48">
      <div className="w-[60%] mx-auto flex-col md:flex md:flex-row items-center justify-between">
        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl">Company</h3>
          <p className="pt-5">About Us</p>
          <p className="pt-5">Contact Us</p>
        </div>

        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl">Policy</h3>
          <p className="pt-5">Return Policy</p>
          <p className="pt-5">Terms and conditions</p>
        </div>

        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl">Connect on Social</h3>
          <div className="flex items-center justify-between mt-4">
            <div className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
              <FiFacebook size={24} color="white" />
            </div>
            <div className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
              <AiOutlineInstagram size={24} color="white" />
            </div>
            <div className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
              <AiOutlineWhatsApp size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
