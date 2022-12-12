import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AuthContext } from "../../context/authContext/AuthContext";

const Dashboard = () => {
  const { token, isSuccess, isError, isMessage, user } = useContext(AuthContext);

  useEffect(() => {
    // console.log("user dashboard", token, isSuccess, isError, isMessage, user);
  }, [token, isSuccess, isError, isMessage, user]);

  const renderBanner = () => {
    return (
      <div className="bg-[#F72238] p-5">
        <h3 className="text-4xl text-center text-white">Dashboard</h3>
      </div>
    );
  };

  return <div> 
    { renderBanner() }  
    <div className="mt-10 p-5 md:p-0 mb-10 mx-auto container flex-col md:flex md:flex-row items-start">
    
      <Sidebar />

      <section className="mt-10 md:mt-0">
        <h3 className="text-4xl">Hello {user.username} </h3>
        <p className="mt-4">
          Welcome to your dashboard
        </p>
        <div className="mt-10">
          <Link to="/dashboard/orders" className="mr-4 text-blue-600">See All your Orders</Link>
          <Link to="/dashboard/account" className="mr-4 text-blue-600">View your profile</Link>
        </div>
      </section>
    </div>
  </div>;
};

export default Dashboard;
