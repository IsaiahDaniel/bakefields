import React from "react";
import {
  // AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FiFacebook } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black border-t-2 pt-10 h-full pb-10 md:mt-0 mt-[300px]">
      <div className="w-[60%] mx-auto flex-col md:flex md:flex-row items-center justify-between">
        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl">Company</h3>
          <Link to="/about">
            <p className="pt-5">About Us</p>
          </Link>
          <p className="pt-5">Contact Us</p>
        </div>

        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl">Policy</h3>
          <Link to="/return-policy">
            <p className="pt-5">Return Policy</p>
          </Link>
          <Link to="/return-policy">
            <p className="pt-5">Terms and conditions</p>
          </Link>
        </div>

        <div className="mb-10 md:mb-0">
          <h3 className="text-2xl">Connect on Social</h3>
          <div className="flex items-center justify-between mt-4">
            <a
              href="https://www.facebook.com/profile.php?id=100087998476934"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3"
            >
              <FiFacebook size={24} color="white" />
            </a>
            <a
              href="https://instagram.com/midbite.ng?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3"
            >
              <AiOutlineInstagram size={24} color="white" />
            </a>
            <a
              href="https://wa.me/message/AKIABSVUJFMZJ1"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3"
            >
              <AiOutlineWhatsApp size={24} color="white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
