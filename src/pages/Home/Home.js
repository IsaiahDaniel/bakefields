import React, { useEffect } from "react";
import { Button, Product } from "../../components";
import Carousel from "react-elastic-carousel";
import { AiOutlineSearch } from "react-icons/ai";

import { AiOutlineRight } from "react-icons/ai";
import { FaBirthdayCake, FaChild, FaBreadSlice } from "react-icons/fa";
import { GiButterToast } from "react-icons/gi";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../context/productsContext/ProductsContext";
import { getProducts } from "../../context/productsContext/ProductsActions";
import Spinner from "../../components/Spinner/Spinner";
import Slider from "react-slick";
import "./Home.css";

const Home = () => {
  const { products, dispatch, isLoading } = useContext(ProductContext);

  useEffect(() => {
    const allProducts = async () => {
      dispatch({ type: "SET_LOADING" });
      const item = await getProducts();
      dispatch({ type: "GET_PRODUCTS", payload: item.data.data });
    };

    allProducts();
  }, [dispatch]);

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
      id: 6,
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderShowcase = () => {
    return (
      <>
        <section className="flex items-start">
          <div className="bg-white p-3 hidden mr-3 w-[250px] shadow-lg md:block">
            <h3 className="mb-3 text-center font-bold mt-4">Our Categories</h3>
            <ul className="flex-1">
              <Link className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <FaBirthdayCake className="mr-2" />
                  <li>Birthday Cakes</li>
                </div>
                <AiOutlineRight />
              </Link>
              <Link className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <GiButterToast className="mr-2" size={20} />
                  <li>Buttercream</li>
                </div>
                <AiOutlineRight />
              </Link>
              <Link className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <FaChild className="mr-2" />
                  <li>Children</li>
                </div>
                <AiOutlineRight />
              </Link>
              <Link className="flex items-center justify-between p-3">
                <div className="flex items-center">
                  <FaBreadSlice className="mr-2" />
                  <li>Midbite Loaf</li>
                </div>
                <AiOutlineRight />
              </Link>
            </ul>
          </div>

          <div className="mr-3 flex-1">
            {/* <div>
              <img
                src={require("../../assets/banner.png")}
                alt="banner"
                className="h-full xl:w-full md:w-full shadow-lg"
              />
            </div> */}
            <div className="w-[325px] md:w-[700px] xl:w-[770px]">
              <Slider {...settings}>
                <div>
                  <img
                    src={require("../../assets/banner.png")}
                    alt="banner"
                    className="h-full xl:w-full md:w-full shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/slide-2.jpeg")}
                    alt="banner"
                    className="h-full xl:w-full md:w-full shadow-lg"
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/slide-3.jpeg")}
                    alt="banner"
                    className="h-full xl:w-full md:w-full shadow-lg"
                  />
                </div>
              </Slider>
            </div>
            <div className="shadow-lg p-3 flex items-center justify-between mt-4">
              <div>
                <img
                  src={require("../../assets/believably-tasty.png")}
                  alt="phone"
                  style={{ width: 200 }}
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/baked-fresh.png")}
                  alt="phone"
                  style={{ width: 200 }}
                  className="rounded"
                />
              </div>
              <div>
                <img
                  src={require("../../assets/believably-tasty.png")}
                  alt="phone"
                  style={{ width: 200 }}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          <div className="md:grid gap-2 grid-cols-2 hidden">
            <div>
              <a
                href="https://wa.me/message/AKIABSVUJFMZJ1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../../assets/help-order.jpeg")}
                  alt="needHelp"
                  style={{ height: "200px", width: "200px" }}
                />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/message/AKIABSVUJFMZJ1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../../assets/lets-chat.png")}
                  alt="needHelp"
                  style={{ height: "200px", width: "200px" }}
                />
              </a>
            </div>

            <div>
              <a
                href="https://wa.me/message/AKIABSVUJFMZJ1"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../../assets/refer-and-earn-1.png")}
                  alt="needHelp"
                  style={{ height: "200px", width: "200px" }}
                />
              </a>
            </div>

            <div>
              <img
                src={require("../../assets/maybe.png")}
                alt="needHelp"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
          </div>
        </section>
        {/* New section */}
        <div className="md:hidden grid grid-cols-2 items-center mt-5">
          <img
            src={require("../../assets/maybe.png")}
            alt="needHelp"
            style={{ height: "150px", width: "200px" }}
            className="mb-5"
          />
          <a
            href="https://wa.me/message/AKIABSVUJFMZJ1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/lets-chat.png")}
              alt="needHelp"
              style={{ height: "150px", width: "200px" }}
              className="mb-5"
            />
          </a>
          <a
            href="https://wa.me/message/AKIABSVUJFMZJ1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/refer-and-earn-1.png")}
              alt="needHelp"
              style={{ height: "150px", width: "200px" }}
              // className="mb-5"
            />
          </a>
          <a
            href="https://wa.me/message/AKIABSVUJFMZJ1"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../../assets/help-order.jpeg")}
              alt="needHelp"
              style={{ height: "150px", width: "200px" }}
            />
          </a>
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

        {isLoading && <Spinner />}

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
          {products.slice(0,6).map((product) => (
            <div className="shadow-lg p-5 mb-10" key={product._id}>
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
                key={category.id}
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
    <>
      <section className="home__bg">
        <div className="container mx-auto flex flex-col items-center justify-start">
        <div className="flex flex-col justify-center mt-10 md:mt-[150px] container mx-auto w-[100%]">
          <h1 className="text-4xl md:text-6xl text-white text-center md:text-left font-extrabold uppercase leading-relaxed p-10 md:p-0">
            Welcome to <br /> Midbite
          </h1>
          <p className="text-white md:mt-10 leading-relaxed text-center md:text-justify md:p-0 px-5">
            Cras eu elit congue, placerat dui ut, tincidunt nislnulla leo elit,
            <br />
            pharetra bibendum justo quiscursus consectetur erat.
          </p>
          <div className="flex-col md:flex md:flex-row items-center md:mt-10 p-10 md:p-0 text-center">
            <Button text="Get Started" to="/products" iconButton icon />
            <div className="mr-8"></div>
            <br />
            <Button text="About Us" to="/about" light icon />
          </div>
        </div>
        </div>
      </section>
      <div className="container mx-auto pl-4 pr-4 pt-5">
        {/* <div className="md:hidden flex my-5 items-center rounded border border-[#FEBD01] pt-3 pb-3 w-full md:w-[400px]">
        <div className="mr-1 ml-2">
          <AiOutlineSearch />
        </div>

        <input
          type="text"
          className="bg-transparent outline-none w-full"
          placeholder="Search Cakes"
        />
      </div> */}

        {/* {renderShowcase()} */}

        <div>
          {renderCarousel()}
          {/* <div className="my-5">
          { isLoading && <Spinner /> }
        </div> */}
          {ProductsList()}

          <section className="w-[100%] md:w-[80%] mx-auto bg-[#DEF3F9] p-8 mb-10 flex-col-reverse md:flex md:flex-row-reverse items-center justify-between">
            <img src={require("../../assets/delivery-1.png")} className="w-[100%] md:w-[50%] mb-10 md:mb-0" alt="" />
            <div>
              <h2 className="text-2xl leading-[70px] text-center md:text-left">Stay Home and get your Daily Needs from Our Shop</h2>
              <Link to="/products">
                <Button
                  text={"Place Order"}
                  primaryInverse
                />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
