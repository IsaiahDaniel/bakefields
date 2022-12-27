import React from "react";
import LoginImage from "../../assets/secure_login.png";
import { Button, Input } from "../../components";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";

const Login = () => {
  const { isSuccess, isLoading, isError, message, loginUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/dashboard");
    }

  }, [isSuccess, isError, message, navigate]);

  const [input, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(input);
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="flex-col md:flex md:flex-row items-center justify-between h-screen mt-5">
      <div className="flex-1">
        <img src={LoginImage} alt="LoginImage" />
      </div>

      <div className="flex-1 bg-[#FCFCFC] h-screen p-10 w-full md:w-[60%] mb-10">
        <div className="w-full md:w-[60%] mx-auto">
          <h2 className="text-4xl text-center font-bold">Welcome to Midbite</h2>
          <h3 className="text-center mt-5 mb-4">Sign Into Your Account</h3>

          { isError && <p className="text-red-400">{message}</p> }

          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Email Or username"
              id="email"
              onChange={(e) => handleChange(e)}
            />
            <Input
              placeholder="Enter Your Password"
              id="password"
              onChange={(e) => handleChange(e)}
            />
            <Button text="Login" inputType="submit" primaryInverse />
          </form>

          <div className="text-center mt-10">
            <Link to="/register">Not A Member?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
