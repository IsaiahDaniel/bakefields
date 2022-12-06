import React, { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';

const Dashboard = () => {

  const context = useContext(AuthContext);

  useEffect(() => {
    console.log("user dashboard", context);
}, [context]);


  return (
    <div>Dashboard - </div>
  )
}

export default Dashboard;