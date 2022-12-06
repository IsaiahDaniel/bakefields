import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="border w-full md:w-[300px] mr-40">
    <ul>
      <Link to="/dashboard" className="active:text-white active:bg-[#F72238]">
        <li className="border-b-2 p-3">Dashboard</li>
      </Link>
      <Link to="/dashboard/orders" className="active:text-white active:bg-[#F72238]">
        <li className="border-b-2 p-3" >Orders</li>
      </Link>
      <Link to="/dashboard/account">
        <li className="border-b-2 p-3">Account Details</li>
      </Link>
      <Link to="/dashboard/complain">
        <li className="border-b-2 p-3">Complain</li>
      </Link>
      <Link>
        <li className="p-3">Logout</li>
      </Link>
    </ul>
  </aside>
  )
}

export default Sidebar