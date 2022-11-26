import React from "react";
import { Button, Product } from "../../components";
import Banner from "../../assets/banner.png";
import Refer from "../../assets/refer-and-earn.png";
import Bite from "../../assets/love-at-first bite.png";

import { motion } from "framer-motion";

import "./Home.css";

const Home = () => {
  const PRODUCTS_LIST = [
    {
      id: 1,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-1.jpg"),
    },
    {
      id: 2,
      price: "6.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-2.jpg"),
    },
    {
      id: 3,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-2.jpg"),
    },
    {
      id: 4,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-2.jpg"),
    },
    {
      id: 5,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-2.jpg"),
    },
  ];

  const CATEGORIES_LIST = [
    {
      id: 1,
      category: "birthday",
      image: require("../../assets/birthday.jpeg"),
    },
    {
      id: 2,
      category: "Wedding",
      image: require("../../assets/naming.jpeg"),
    },
    {
      id: 3,
      category: "naming",
      image: require("../../assets/wedding.jpeg"),
    }
  ];

  const Showcase = () => {
    return (
      <section className="flex-col-reverse md:flex md:flex-row items-center justify-between mt-10">

        <div className="mr-5 mb-10 md:mb-0 mx-auto">
          <img src={Banner} alt="" style={{ width: "100%" }} />
        </div>

        <div className="mr-10 flex justify-between md:flex-col">
          <img src={Bite} alt="" className="w-[50%] md:w-[260px]" />
          <br />
          <img src={Refer} alt="" className="w-[50%] md:w-[260px]" />
        </div>

      </section>
    );
  };

  const Categories = () => {
    return (
      <section className="my-[150px]">
        <h1 className="text-3xl text-center">Shop By category</h1>
        <div className="flex items-center md:justify-between justify-center flex-wrap">
            {CATEGORIES_LIST.map((category) => (
              <div key={category.id}>
                <img src={category.image} alt="" style={{ width: "300px", height: "300px" }} />
                <h2>{category.category}</h2>
              </div>
            ))}
        </div>
      </section>
    );
  };

  const ProductsList = () => {
    return (
      <section className="container mx-auto mt-20">
        <h2 className="text-4xl text-center mt-10 mb-10">Top Selling Products</h2>
        <div className="flex items-center md:justify-between justify-center  flex-wrap">
          {PRODUCTS_LIST.map((product) => (
            <div className="mb-10" key={product.id}>
              <Product product={product} key={product.id} />
              <Button text="Order Now" />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="container mx-auto">
      {Showcase()}

      <div>
        {Categories()}
        {ProductsList()}
      </div>
    </div>
  );
};

export default Home;
