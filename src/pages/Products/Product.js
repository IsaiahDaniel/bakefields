import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Product = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const PRODUCTS_LIST = [
    {
      id: "1",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-3.jpg"),
    },
    {
      id: "2",
      price: "6.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-4.jpg"),
    },
    {
      id: "3",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-5.jpg"),
    },
    {
      id: "4",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-6.jpg"),
    },
    {
      id: "5",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-7.jpg"),
    },
  ];

  const product = PRODUCTS_LIST.find((product) => product.id === id);

  console.log("product", product);

  const renderBanner = () => {
    return (
      <div className="bg-gradient-to-r from-[#FEBD01] to-[#F72238] p-10">
        <h3 className="text-4xl text-center text-white">Category Cake</h3>
      </div>
    );
  };

  const renderProductDetail = () => {
    return (
      <div className="mt-10 mb-10 p-3 md:p-0">
        <div className="flex-col md:flex md:flex-row">
          <div className="mr-10">
            <img
              src={product.image}
              alt={product.title}
              className="w-[900px]"
            />
          </div>
          <div className="w-full">
            <h2 className="text-4xl text-[#FEBD01]">{product.title}</h2>
            <h3 className="text-2xl text-[#F72238]">&#8358;{product.price}</h3>
            <form action="#" className="mt-5">
              <div className="w-full">
                <label htmlFor="category">Choose Size</label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 pt-6 pb-6 mr-10 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                >
                  <option selected>Choose a Cake Size</option>
                  <option value="10">10""</option>
                  <option value="20">20""</option>
                  <option value="30">30""</option>
                </select>
              </div>

              <div className="mt-5 w-full">
                <label htmlFor="message">Cake Message</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Cake Message"
                  className="rounded border p-5 w-full mb-2 mt-2"
                />
                <span>What Message would like on Your cake*</span>
              </div>

              <div className="mt-5 w-full">
                <label htmlFor="message">Order Details</label>
                <br />
                <textarea
                  placeholder="Enter Cake Message"
                  className="rounded border p-5 w-full mb-2 mt-2"
                ></textarea>
                <span>
                  Please note, some designs may incur additional cost*
                </span>
              </div>

              <div class="flex justify-center w-1/5 mt-6 pl-20">
                {quantity >= 0 && (
                  <div
                    onClick={() => setQuantity(quantity - 1)}
                    className="mt-1"
                  >
                    <svg
                      class="fill-current text-gray-600 w-3"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                )}

                <input
                  class="mx-2 border text-center w-8"
                  type="text"
                  value={quantity}
                />

                <div onClick={() => setQuantity(quantity + 1)} className="mt-1">
                  <svg
                    class="fill-current text-gray-600 w-3"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </div>

                <div className="ml-10">
                  <h3>Quantity</h3>
                </div>
              </div>

              <Button text={"Place Order"} />
            </form>
            <div className="mt-10">
              <h3 className="text-2xl">Talk to us on Social</h3>
              <div className="flex items-center mt-4">
                <AiFillFacebook size={24} />
                <AiOutlineInstagram size={24} />
                <AiOutlineWhatsApp size={24} />
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
      <div className="container mx-auto">{renderProductDetail()}</div>
    </div>
  );
};

export default Product;
