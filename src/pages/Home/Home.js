import React from "react";
import Slider from "react-slick";
import { Button, Product } from "../../components";

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

  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Showcase = () => {
    return (
      <section>
        <Slider {...settings}>
          <div className="bg-image">
            <div className="container mx-auto mt-10">
              <h3>Welcome to cake pastery</h3>
            </div>
          </div>

          <div>
            <div className="container mx-auto mt-10">
              <h3>The Best Pastery in Lagos</h3>
            </div>
          </div>
        </Slider>
      </section>
    );
  };

  const Categories = () => {
    return (
      <section className="my-[150px]">
        <h1 className="text-3xl text-center">Shop By category</h1>
        {/* <div className="flex-col justify-center md:flex md:flex-row items-center md:justify-between">
          {CATEGORIES_LIST.map((category) => (
            <div key={category.id}>
              <img src={category.image} alt="" style={{ width: "300px", height: "300px" }} />
              <h2>{category.category}</h2>
            </div>
          ))}
        </div> */}
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
