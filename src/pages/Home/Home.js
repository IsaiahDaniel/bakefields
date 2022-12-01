import React from "react";
import { Button, Product } from "../../components";
import Banner from "../../assets/banner.png";
import Refer from "../../assets/refer-and-earn.png";
import Bite from "../../assets/love-at-first bite.png";
import Carousel from "react-elastic-carousel";
import { AiOutlineSearch } from "react-icons/ai";
import showcase from "../../assets/showcase-1.jpeg";
import needHelp from "../../assets/help-order.gif";

import "./Home.css";

const Home = () => {
  const PRODUCTS_LIST = [
    {
      id: 1,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/d216_1.jpeg"),
    },
    {
      id: 2,
      price: "6.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/d21.jpeg"),
    },
    {
      id: 3,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/d78_1.jpeg"),
    },
    {
      id: 4,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/triple_treat.png"),
    },
    {
      id: 5,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/c29_600_2_1.jpeg"),
    },
    {
      id: 6,
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/choc_splash.png"),
    },
  ];

  const CATEGORIES_LIST = [
    {
      id: 1,
      category: "birthday",
      image: require("../../assets/birthday.png"),
    },
    {
      id: 2,
      category: "Wedding",
      image: require("../../assets/buttercream.png"),
    },
    {
      id: 3,
      category: "naming",
      image: require("../../assets/children.png"),
    },
    {
      id: 4,
      category: "naming",
      image: require("../../assets/midbite-loaf.png"),
    },
    {
      id: 5,
      category: "naming",
      image: require("../../assets/special-loaf.png"),
    },
    {
      id: 3,
      category: "naming",
      image: require("../../assets/weddings.png"),
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  // const Showcase = () => {
  //   return (
  //     <section className="flex-col-reverse md:flex md:flex-row items-center justify-between my-[10px] pl-[18px] xl:pl-0">
  //       <div className="mr-5 mb-3 md:mb-0 mx-auto">
  //         <img
  //           src={Banner}
  //           alt=""
  //           style={{ width: "100%" }}
  //           className="md:w-[100%] md:h-[100%] shadow-lg rounded-lg"
  //         />
  //       </div>

  //       <div className="mr-10 flex justify-between md:flex-col mt-3">
  //         <img
  //           src={Bite}
  //           alt=""
  //           className="w-[50%] mb-3 mr-3 md:w-[260px] shadow-md rounded-lg"
  //         />
  //         <img
  //           src={Refer}
  //           alt=""
  //           className="w-[50%] mb-3 mr-3 md:w-[260px] shadow-md rounded-lg"
  //         />
  //       </div>
  //     </section>
  //   );
  // };

  // const renderShowcase = () => {
  //   return (
  //     <section className="grid grid-cols-1 md:grid-cols-3">
  //       <div className="bg-red-500 p-3 hidden mr-3 w-[100px] md:block">
  //         <ul>
  //           <li>Birthday</li>
  //           <li>Buttercream</li>
  //           <li>Children</li>
  //         </ul>
  //       </div>
  //       <div className="mr-3 bg-green-600 h-[400px]">
  //         <img
  //           src={showcase}
  //           alt="banner"
  //           className="h-[400px] w-full md:w-[500px]"
  //         />
  //       </div>
  //       <div className="bg-red-400 grid grid-cols-2">
  //         <img src={needHelp} alt="needHelp" style={{ height: "150px" }} />
  //         <img src={needHelp} alt="needHelp" style={{ height: "150px" }} />
  //         <img src={needHelp} alt="needHelp" style={{ height: "150px" }} />
  //         <img src={needHelp} alt="needHelp" style={{ height: "150px" }} />
  //       </div>
  //     </section>
  //   );
  // };

  const renderShowcase = () => {
    return (
      <>
        <section className="flex items-start">
          <div className="bg-white p-3 hidden mr-3 w-[250px] md:block">
            <h3 className="text-2xl mb-3">Our Categories</h3>
            <ul>
              <li>Birthday</li>
              <li>Buttercream</li>
              <li>Children</li>
            </ul>
          </div>
          
          <div className="mr-3 flex-1">
            <img src={showcase} alt="banner" className="h-full w-full" />
          </div>

          <div className="md:grid gap-2 grid-cols-2 hidden">
            <div
            >
              <img
                src={needHelp}
                alt="needHelp"
                style={{ height: "200px", width: "150px" }}
              />
            </div>
            <div>
              <img
                src={require("../../assets/banner-2.jpg")}
                alt="needHelp"
                style={{ height: "200px", width: "150px" }}
              />
            </div>

            <div>
              <img
                 src={require("../../assets/banner-3.jpeg")}
                alt="needHelp"
                style={{ height: "200px", width: "150px" }}
              />
            </div>

            <div className="bg-green-500">
              <img
                src={require("../../assets/banner-4.jpeg")}
                alt="needHelp"
                style={{ height: "200px", width: "150px" }}
              />
            </div>
          </div>
        </section>
        {/* New section */}
        <div className="md:hidden grid grid-cols-2 items-center mt-5">
          <img
            src={require("../../assets/banner-2.jpg")}
            alt="needHelp"
            style={{ height: "150px", width: "200px" }}
            className="mb-5"
          />
          <img
            src={require("../../assets/banner-3.jpeg")}
            alt="needHelp"
            style={{ height: "150px", width: "200px" }}
            className="mb-5"
          />
          <img
            src={require("../../assets/banner-4.jpeg")}
            alt="needHelp"
            style={{ height: "150px", width: "200px" }}
            className="mb-5"
          />
          <img
            src={needHelp}
            alt="needHelp"
            style={{ height: "150px", width: "200px" }}
          />
        </div>
      </>
    );
  };

  const ProductsList = () => {
    return (
      <section className="container mx-auto my-[10px]">
        <h2 className="text-4xl text-center mt-10 mb-10">
          Top Selling Products
        </h2>

        <div className="grid grid-cols-2 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
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
      <section className="my-[40px]">
        <h1 className="text-3xl text-center mb-5">Shop By category</h1>
        <div className="flex items-center md:justify-between justify-center">
          <Carousel breakPoints={breakPoints}>
            {CATEGORIES_LIST.map((category) => (
              <img
                src={category.image}
                alt=""
                style={{ marginRight: "40px" }}
                className="w-[600px] md:min-w-full"
              />
            ))}
          </Carousel>
        </div>
      </section>
    );
  };

  return (
    <div className="container mx-auto pl-4 pr-4 pt-5">
      <div className="md:hidden flex my-5 items-center rounded border border-[#FEBD01] pt-3 pb-3 w-full md:w-[400px]">
        <div className="mr-1 ml-2">
          <AiOutlineSearch />
        </div>

        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search Cakes"
        />
      </div>

      {/* {Showcase()} */}

      {renderShowcase()}

      <div>
        {renderCarousel()}
        {ProductsList()}
      </div>
    </div>
  );
};

export default Home;
