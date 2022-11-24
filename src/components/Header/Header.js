import React from "react";
import { AiOutlineSearch, AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { SiCakephp } from "react-icons/si";
import { Link } from "react-router-dom";

const Header = () => {
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
        </nav>
      </header>
    </div>
  );
};

export default Header;
