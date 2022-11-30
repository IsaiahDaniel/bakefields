import React from "react";
import { Button, Product } from "../../components";
import Banner from "../../assets/banner.png";
import Refer from "../../assets/refer-and-earn.png";
import Bite from "../../assets/love-at-first bite.png";
import Carousel from "react-elastic-carousel";
import { AiOutlineSearch } from "react-icons/ai";

import "./Home.css";

const Home = () => {
  const PRODUCTS_LIST = [
    {
      id: 1,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-3.jpg"),
    },
    {
      id: 2,
      price: "6.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-4.jpg"),
    },
    {
      id: 3,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-5.jpg"),
    },
    {
      id: 4,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-6.jpg"),
    },
    {
      id: 5,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/cake-7.jpg"),
    },
  ];

  const CATEGORIES_LIST = [
    {
      id: 1,
      category: "birthday",
      image: require("../../assets/bread-1.jpg"),
    },
    {
      id: 2,
      category: "Wedding",
      image: require("../../assets/bread-2.jpg"),
    },
    {
      id: 3,
      category: "naming",
      image: require("../../assets/bread-1.jpg"),
    },
    {
      id: 4,
      category: "naming",
      image: require("../../assets/cake-9.jpg"),
    },
    {
      id: 5,
      category: "naming",
      image: require("../../assets/cake-8.jpg"),
    },
    {
      id: 3,
      category: "naming",
      image: require("../../assets/cake-3.jpg"),
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const Showcase = () => {
    return (
      <section className="flex-col-reverse md:flex md:flex-row items-center justify-between my-[10px] pl-[18px] xl:pl-0">
        <div className="mr-5 mb-3 md:mb-0 mx-auto">
          <img
            src={Banner}
            alt=""
            style={{ width: "100%" }}
            className="md:w-[100%] md:h-[100%] shadow-lg rounded-lg"
          />
        </div>

        <div className="mr-10 flex justify-between md:flex-col mt-3">
          <img
            src={Bite}
            alt=""
            className="w-[50%] mb-3 mr-3 md:w-[260px] shadow-md rounded-lg"
          />
          <img
            src={Refer}
            alt=""
            className="w-[50%] mb-3 mr-3 md:w-[260px] shadow-md rounded-lg"
          />
        </div>
      </section>
    );
  };

  const ProductsList = () => {
    return (
      <section className="container mx-auto my-[10px]">
        <h2 className="text-4xl text-center mt-10 mb-10">
          Top Selling Products
        </h2>
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

  const renderCarousel = () => {
    return (
      <section className="my-[10px]">
        <h1 className="text-3xl text-center mb-5">Shop By category</h1>
        <div className="flex items-center md:justify-between justify-center">
          <Carousel breakPoints={breakPoints}>
            {CATEGORIES_LIST.map((category) => (
              <img
                src={category.image}
                alt=""
                style={{ width: "300px", height: "300px", marginRight: "40px" }}
              />
            ))}
          </Carousel>
        </div>
      </section>
    );
  };

  return (
    <div className="container mx-auto">
      <div className="md:hidden flex my-5 items-center rounded border border-[#FEBD01] pl-3 pt-3 pb-3 w-full md:w-[400px]">
        <div className="mr-3">
          <AiOutlineSearch />
        </div>

        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search Cakes"
        />
      </div>
      {/* <button className="border border-[#FEBD01] p-3 hidden md:flex hover:bg-[#FEBD01] rounded">
        Search
      </button> */}
      {Showcase()}

      <div>
        {renderCarousel()}
        {ProductsList()}
      </div>
    </div>
  );
};

export default Home;
