import React from 'react';
import LoginImage from "../../assets/secure_login.png";
import { Button, Input } from '../../components';

import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex-col md:flex md:flex-row items-center justify-between h-screen'>
        <div className='flex-1'>
            <img src={LoginImage} alt="LoginImage" />
        </div>

        <div className='flex-1 bg-[#FCFCFC] h-screen p-10 w-full md:w-[60%] mb-10'>
            <div className='w-full md:w-[60%] mx-auto'>
                <h2 className='text-4xl text-center font-bold'>Welcome to Tastery</h2>
                <h3 className='text-center mt-5'>Sign Into Your Account</h3>

                <form>
                    <Input placeholder="Email Or username" />
                    <Input placeholder="Enter Your Password" />
                    <Button text="Login" inputType="submit" primary/>
                </form>

                <div className='text-center mt-10'>
                    <Link to="/register">Already A Member?</Link>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Login;