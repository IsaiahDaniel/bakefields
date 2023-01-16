import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { SiCakephp } from "react-icons/si";
import { Link } from "react-router-dom";
import BackDrop from "../BackDrop/BackDrop";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { token, logout } = useContext(AuthContext);

  return (
    <div className="shadow-lg w-full">
      <header className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center md:mr-0">
            <Link to="/" className="w-[170px]">
              <img src={logo} alt="" style={{ width: "80%" }} />
            </Link>
            {/* <div className="md:flex items-center rounded border border-[#FEBD01] pt-3 pb-3 w-full md:w-[400px] hidden">
              <div className="mr-2 ml-2">
                <AiOutlineSearch />
              </div>

              <input
                type="text"
                className="bg-transparent outline-none w-full"
                placeholder="Search Cakes"
              />
            </div>
            <button className="border border-[#FEBD01] p-3 hidden md:flex hover:bg-[#FEBD01] rounded">
              Search
            </button> */}
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
            {token == null ? (
              <li>
                <Link to="/login">
                  <div className="flex items-center flex-col">
                    <AiOutlineLogin size={24} />
                    <p>Login/Register</p>
                  </div>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/dashboard">
                    <div className="flex items-center flex-col mr-4">
                      <CgProfile size={24} />
                      <p>Dashboard</p>
                    </div>
                  </Link>
                </li>

                <li onClick={() => logout()}>
                  <Link to="/login">
                    <div className="flex items-center flex-col">
                      <CgLogOut size={24} />
                      <p>Logout</p>
                    </div>
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="md:hidden pr-5" onClick={() => setShowMenu(true)}>
            <AiOutlineMenu size={34} />
          </div>

          {showMenu && <BackDrop toggleNav={setShowMenu} />}

          {showMenu && (
            <div className="bg-white shadow-lg absolute top-0 right-0 bottom-0 w-9/12 h-screen z-10 md:hidden">
              <div className="relative p-5">
                <AiOutlineClose
                  size={24}
                  color="black"
                  style={{ marginLeft: "auto" }}
                  onClick={() => setShowMenu(false)}
                />
              </div>

              <ul className="p-5 text-black">
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
                      <SiCakephp size={24}  />
                      {/* style={{ marginRight: 10 }} */}
                      <p>Products</p>
                    </div>
                  </Link>
                </li>

                <div className="mb-5" onClick={() => setShowMenu(false)}>
                  {token == null ? (
                    <li>
                      <Link to="/login">
                        <div className="flex items-center">
                          <AiOutlineLogin
                            size={24}
                            // style={{ marginRight: 10 }}
                          />
                          <p>Login/Register</p>
                        </div>
                      </Link>
                    </li>
                  ) : (
                    <>
                      <li className="mb-5">
                        <Link to="/dashboard">
                          <div className="flex items-center">
                            <CgProfile size={24} />
                            <p>Dashboard</p>
                          </div>
                        </Link>
                      </li>

                      <li onClick={() => logout()}>
                        <Link to="/login">
                          <div className="flex items-center ">
                            <CgLogOut size={24} />
                            <p>Logout</p>
                          </div>
                        </Link>
                      </li>
                    </>
                  )}
                </div>

                <div className="mt-10">
                  <h3 className="text-2xl">Connect on Social</h3>
                  <div className="flex items-center mt-4">
                    <a href="https://www.facebook.com/profile.php?id=100087998476934" target="_blank" rel="noreferrer" className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
                      <FiFacebook size={24} color="white" />
                    </a>
                    <a href="https://instagram.com/midbite.ng?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
                      <AiOutlineInstagram size={24} color="white" />
                    </a>
                    <a href="https://wa.me/message/AKIABSVUJFMZJ1" target="_blank" rel="noreferrer" className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
                      <AiOutlineWhatsApp size={24} color="white" />
                    </a>
                    
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
