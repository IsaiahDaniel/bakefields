import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import {
  // AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import { FiFacebook } from "react-icons/fi";
import { useEffect, useContext } from "react";
import { ProductContext } from "../../context/productsContext/ProductsContext";
import Spinner from "../../components/Spinner/Spinner";
import { OrderContext } from "../../context/ordersContext/OrderContext";
import { toast } from "react-toastify";

const Product = () => {
  const { id } = useParams();

  const [inputs, setInputs] = useState({
    name: "",
    price: "",
    size: "",
    flavour: "",
    message: "",
    details: "",
    quantity: ""
  })
  const [quantity, setQuantity] = useState(1);
  const { product, isLoading, getProduct, isSuccess } = useContext(ProductContext);
  const { createOrder } = useContext(OrderContext);

  useEffect(() => {  
    getProduct(id);
    
    console.log("isSuccess", isSuccess);
    
    // eslint-disable-next-line
  }, [isLoading]);
  
  // if(isSuccess){
  //   return toast("Your order has been received")
  // }

  const handleChange = (e) => {
    console.log("ran");
    setInputs(prevState => ({
      ...prevState,
      name: product.name,
      price: product.price,
      quantity: quantity,
      [e.target.id]: e.target.value
    }))

    console.log("inputs", inputs);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(inputs);
    setInputs({
      name: "",
      price: "",
      size: "",
      flavour: "",
      message: "",
      details: "",
      quantity: ""
    });
    setQuantity(1);
  };
  
  const renderBanner = () => {
    return (
      <div className="bg-[#F72238] p-5">
        <h3 className="text-4xl text-center text-white">Category Cake</h3>
      </div>
    );
  };

  const renderProductDetail = () => {
    return (
      <div className="mt-5 md:mt-10 mb-10 p-3 md:p-0">
        <div className="flex-col md:flex md:flex-row">
          <div className="mr-10 flex-1 bg-red-6000">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[600px] object-contain"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl text-[#FEBD01]">{product.name}</h2>
            <h3 className="text-2xl text-[#F72238]">&#8358;{product.price}</h3>
            <form onSubmit={handleSubmit} className="mt-5">
              <div className="w-full">
                <label htmlFor="category">Choose Size</label>
                <select
                  id="size"
                  required
                  value={inputs.size}
                  onChange={(e) => handleChange(e)}
                  className="bg-gray-50 border border-gray-300 pt-6 pb-6 mr-10 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                >
                  <option>Choose a Cake Size</option>
                  <option value="10" onChange={(e) => handleChange(e)}>10""</option>
                  <option value="20" onChange={(e) => handleChange(e)}>20""</option>
                  <option value="30" onChange={(e) => handleChange(e)}>30""</option>
                </select>
              </div>

              <br />

              <div className="w-full">
                <label htmlFor="flavour">Choose Flavour</label>
                <select
                  id="flavour"
                  onChange={(e) => handleChange(e)}
                  required
                  value={inputs.flavour}
                  className="bg-gray-50 border border-gray-300 pt-6 pb-6 mr-10 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                >
                  <option>Choose a Cake Flavour</option>
                  <option value="vanilla"  onChange={(e) => handleChange(e)}>Vanilla</option>
                  <option value="strawberry"  onChange={(e) => handleChange(e)}>strawberry</option>
                  <option value="apple"  onChange={(e) => handleChange(e)}>apple</option>
                </select>
              </div>

              <div className="mt-5 w-full">
                <label htmlFor="message">Cake Message</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Cake Message"
                  className="rounded border p-5 w-full mb-2 mt-2"
                  onChange={(e) => handleChange(e)}
                  id="message"
                  required
                  value={inputs.message}
                />
                <span>What Message would like on Your cake*</span>
              </div>

              <div className="mt-5 w-full">
                <label htmlFor="message">Order Details</label>
                <br />
                <textarea
                  placeholder="Enter Order details. e.g address and phone number"
                  className="rounded border p-5 w-full mb-2 mt-2"
                  id="details"
                  required
                  onChange={(e) => handleChange(e)}
                  value={inputs.details}
                ></textarea>
                <span>
                  Please note, some designs may incur additional cost*
                </span>
              </div>

              <div className="flex justify-center w-1/5 mt-6 pl-32">
                {quantity >= 0 && (
                  <div
                    onClick={() => setQuantity(quantity - 1)}
                    className="mt-1"
                  >
                    <svg
                      className="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                )}

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={quantity}
                  onChange={() => setQuantity(quantity - 1)}
                />

                <div onClick={() => setQuantity(quantity + 1)} className="mt-1">
                  <svg
                    className="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>

                <div className="ml-10">
                  <h3>Quantity</h3>
                </div>
              </div>

              <Button text={"Place Order"} primaryInverse />
            </form>
            <div className="mt-10">
              <h3 className="text-2xl">Talk to us on Social</h3>
              <div className="flex items-center mt-4">
                <div className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
                  <FiFacebook size={24} color="white" />
                </div>
                <div className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
                  <AiOutlineInstagram size={24} color="white" />
                </div>
                <div className="rounded-lg border border-[#F72238] bg-[#F72238] p-2 mr-3">
                  <AiOutlineWhatsApp size={24} color="white"  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {renderBanner()}
      <div className="container mx-auto">
        { isLoading && <Spinner /> }
        {renderProductDetail()}
      </div>
    </div>
  );
};

export default Product;
