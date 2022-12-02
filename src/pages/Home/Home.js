import React from "react";
import { Button, Product } from "../../components";
import Carousel from "react-elastic-carousel";
import { AiOutlineSearch } from "react-icons/ai";
import showcase from "../../assets/showcase-1.jpeg";
import needHelp from "../../assets/help-order.gif";

import "./Home.css";

const Home = () => {
  const PRODUCTS_LIST = [
    {
      id: "1",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/sport-1.jpg"),
    },
    {
      id: "2",
      price: "6.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/sport-2.jpg"),
    },
    {
      id: "3",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/sport-3.jpg"),
    },
    {
      id: "4",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/sport-4.jpg"),
    },
    {
      id: "5",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/sport-5.jpg"),
    },
    {
      id: "6",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/children-1.jpg"),
    },
    {
      id: "6",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/children-2.jpg"),
    },
    {
      id: "7",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/children-3.jpg"),
    },
    {
      id: "8",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/children-4.jpg"),
    },
    {
      id: "9",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/children-5.jpg"),
    },
    {
      id: "10",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/children-6.jpg"),
    },
    {
      id: "11",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-1.jpg"),
    },
    {
      id: "12",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-2.jpg"),
    },
    {
      id: "13",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-3.jpg"),
    },
    {
      id: "14",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-4.jpg"),
    },
    {
      id: "15",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-5.jpg"),
    },
    {
      id: "16",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-6.jpg"),
    },
    {
      id: "17",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-7.jpg"),
    },
    {
      id: "18",
      price: "2.99",
      title: "New Cake",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, quis veniam! Blanditiis perspiciatis quas, modi molestias, tempore aliquid nihil id commodi incidunt veritatis explicabo aut laborum, animi quidem obcaecati dicta!",
      image: require("../../assets/categories/birthday-1.jpg"),
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

  const renderShowcase = () => {
    return (
      <>
        <section className="flex items-start">
          <div className="bg-white p-3 hidden mr-3 w-[250px] shadow-lg md:block">
            <h3 className="text-2xl mb-3">Our Categories</h3>
            <ul>
              <li>Birthday</li>
              <li>Buttercream</li>
              <li>Children</li>
            </ul>
          </div>
          
          <div className="mr-3 flex-1">
            <img src={showcase} alt="banner" className="h-full w-full shadow-lg" />
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
                className="sm:w-full h-[300px] md:min-w-full"
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
