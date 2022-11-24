import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { SiCakephp } from "react-icons/si";
import { Link } from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="shadow-lg w-full">
      <header className="container mx-auto p-5">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-2xl mr-10">cake</h2>
            <div className="flex items-center rounded border pl-3 pt-5 pb-5 w-full md:w-[700px]">
              <div className="mr-3">
                <AiOutlineSearch />
              </div>

              <input
                type="text"
                className="bg-transparent outline-none w-full"
                placeholder="Search Cakes"
              />
            </div>
          </div>

          <ul className="hidden md:flex items-center justify-between">
            <li className="items-center text-center mr-10">
              <Link to="/">
                <div className="flex items-center flex-col">
                  <AiOutlineHome size={24} />
                  <p>Home</p>
                </div>
              </Link>
            </li>
            <li className="mr-10">
              <Link to="/products">
                <div className="flex items-center flex-col">
                  <SiCakephp size={24} />
                  <p>Products</p>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/login">
                <div className="flex items-center flex-col ">
                  <AiOutlineLogin size={24} />
                  <p>Login/Register</p>
                </div>
              </Link>
            </li>
          </ul>


          <div className="md:hidden" onClick={() => setShowMenu(true)}>
            <AiOutlineMenu size={34} />
          </div>


          {showMenu && <BackDrop />}

          {showMenu && (
            <div className="bg-[#262626] absolute top-0 right-0 bottom-0 w-9/12 h-screen z-10 md:hidden">

              <div className="relative p-5">
                <AiOutlineClose size={24} color="white" style={{ marginLeft: "auto" }} onClick={() => setShowMenu(false)} />
              </div>

              <ul className="p-5 text-white">
                <li className="mb-5" onClick={() => setShowMenu(false)}>
                  <Link to="/">
                    <div className="flex items-center">
                      <AiOutlineHome size={24} style={{ marginRight: 10 }} />
                      <p>Home</p>
                    </div>
                  </Link>
                </li>

                <li className="mb-5" onClick={() => setShowMenu(false)}>
                  <Link to="/products">
                    <div className="flex items-center">
                      <SiCakephp size={24} style={{ marginRight: 10 }} />
                      <p>Products</p>
                    </div>
                  </Link>
                </li>

                <li className="mb-5" onClick={() => setShowMenu(false)}>
                  <Link to="/login">
                    <div className="flex items-center ">
                      <AiOutlineLogin size={24} style={{ marginRight: 10 }} />
                      <p>Login/Register</p>
                    </div>
                  </Link>
                </li>

                <div className="mt-10">
                  <h3 className='text-2xl'>Connect on Social</h3>
                  <div className='flex items-center justify-between mt-4'>
                    <AiFillFacebook size={24} />
                    <AiOutlineInstagram size={24} />
                    <AiOutlineWhatsApp size={24} />
                  </div>
                </div>

              </ul>
            </div>
          )}


        </nav>
      </header>
    </div>
  );
};

export default Header;
