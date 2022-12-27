import React, { useContext } from "react";
import { Button, Input } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AuthContext } from "../../context/authContext/AuthContext";

const Account = () => {

  const { user } = useContext(AuthContext);

  return (
    <div className="mx-auto container mt-10 mb-10 p-5 md:p-5">
      <div className="flex-col md:flex-row md:flex items-start">
        <div className="flex-1">
            <Sidebar />
        </div>

        <div className="mt-10 md:mt-10 flex-col items-start w-full">
            <div className="grid grid-cols-2 gap-5">
                <div>
                    <h3 className="text-2xl">First name</h3>
                    <p>{user.username}</p>
                </div>
                <div>
                    <h3 className="text-2xl">Phone</h3>
                    <p>{ user.phone }</p>
                </div>
                <div>
                    <h3 className="text-2xl">Email</h3>
                    <p>{user.email}</p>
                </div>
                <div>
                    <h3 className="text-2xl">Location</h3>
                    <p>{user.location}</p>
                </div>
            </div>

            <div className="border-top-1 mt-10 w-full">
                <h3 className="text-2xl">Update Information</h3>
                <Input placeholder="first name" />
                <Input placeholder="Username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Button text="update Information" primaryInverse />
            </div>
        </div>


      </div>
    </div>
  );
};

export default Account;
