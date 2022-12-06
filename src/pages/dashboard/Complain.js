import React from "react";
import { Button, Input } from "../../components";
import Sidebar from "../../components/Sidebar/Sidebar";

const Complain = () => {
  return (
    <div className="mx-auto container mt-10 mb-10 p-5 md:p-5">
      <div className="flex-col md:flex-row md:flex items-start">
        <div className="flex-1">
            <Sidebar />
        </div>

        <div className="flex-col items-start w-full">

            <div className="border-top-1 w-full">
                <h3 className="text-4xl mt-10 md:mt-0">Any Problems? Let us know</h3>
                <Input placeholder="Heading" />
                <br />
                <textarea className="border rounded w-full p-5" placeholder="enter Message" id="" cols="30" rows="10"></textarea>
                
                <Button text="update Information" primaryInverse />
            </div>
        </div>


      </div>
    </div>
  );
};

export default Complain;
