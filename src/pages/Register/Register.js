import React from 'react';

import LoginImage from "../../assets/secure_login.png";
import { Button, Input } from '../../components';

import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='flex-col md:flex md:flex-row items-center justify-between h-screen'>
        <div className='flex-1'>
            <img src={LoginImage} alt="LoginImage" />
        </div>

        <div className='flex-1 bg-[#FCFCFC] h-screen p-10 w-full md:w-[60%] mb-10'>
            <div className='w-full md:w-[60%] mx-auto'>
                <h2 className='text-4xl text-center font-bold'>Sign up for to Tastery</h2>
                <h3 className='text-center mt-5'>Create Your Account</h3>

                <form>
                    <Input placeholder="Enter your Email" />
                    <Input placeholder="Enter your Username" />
                    <Input placeholder="Enter Your Password" />
                    <Input placeholder="Enter Your Location" />
                    <Button text="Login" inputType="submit" primary />
                </form>

                <div className='text-center mt-10'>
                    <Link to="/login">Not A Member?</Link>
                </div>


            </div>

        </div>

    </div>
  )
}

export default Register;