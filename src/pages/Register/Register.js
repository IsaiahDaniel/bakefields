import React, { useState } from 'react';

import LoginImage from "../../assets/secure_login.png";
import { Button, Input } from '../../components';

import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

const Register = () => {

    const navigate = useNavigate();

    const { registerUser } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        email: "",
        username: "",
        password: "",
        location: ""
    })

    const handleChange = (e) => {
        console.log("e.target.value", e.target.value);
        setInputs(prevState => ({
            ...prevState,
            [e.target.id]: e.target.value
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        registerUser(inputs);
        navigate("/dashboard");
    }



  return (
    <div className='flex-col md:flex md:flex-row items-center justify-between h-screen'>
        <div className='flex-1'>
            <img src={LoginImage} alt="LoginImage" />
        </div>

        <div className='flex-1 bg-[#FCFCFC] h-screen p-10 w-full md:w-[60%] mb-10'>
            <div className='w-full md:w-[60%] mx-auto'>
                <h2 className='text-4xl text-center font-bold'>Sign up for to Midbite</h2>
                <h3 className='text-center mt-5'>Create Your Account</h3>

                <form onSubmit={onSubmitHandler}>
                    <Input placeholder="Enter your Email" onChange={(e) => handleChange(e)} id="email" />
                    <Input placeholder="Enter your Username" onChange={(e) => handleChange(e)} id="username" />
                    <Input placeholder="Enter Your Password" onChange={(e) => handleChange(e)} id="password" />
                    <Input placeholder="Enter Your Location" onChange={(e) => handleChange(e)} id="location" />
                    <Input placeholder="Enter Your Phone no." onChange={(e) => handleChange(e)} id="phone" />
                    <Button text={"Place Order"} inputType="submit" primaryInverse />
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