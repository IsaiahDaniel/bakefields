import React from "react";
import { Button, Product } from "../../components";
// import { AiOutlineSearch } from "react-icons/ai";

const Products = () => {
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

  return (
    <div className="container mx-auto">
      <div className="flex-col md:flex md:flex-row justify-center items-center mt-10">
        <div className="pl-5 pr-5">
          <select
            id="category"
            class="bg-gray-50 border border-gray-300 pt-6 pb-6 mr-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose a Category</option>
            <option value="birthdays">Birthdays</option>
            <option value="children">Children</option>
            <option value="buttercream">Buttercream</option>
            <option value="dessert">Dessert</option>
            <option value="wedding">Wedding</option>
            <option value="sport-lover">Sport Lover</option>
            <option value="christmas">Christmas</option>
            <option value="pasteries">Pasteries</option>
          </select>
        </div>

        {/* <div className="flex items-center justify-center rounded border pl-3 pt-5 pb-5 w-8/12 pr-5 mt-5 md:ml-36">
          <div className="mr-3">
            <AiOutlineSearch />
          </div>

          <input
            type="text"
            className="bg-transparent outline-none w-full h-max"
            placeholder="Search Cakes"
          />
        </div> */}
      </div>
      <h2 className="text-4xl mb-6 text-center mt-5 md:p-0">Our cakes</h2>
      <div className="grid grid-cols-2 gap-8 p-5 md:p-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
        {PRODUCTS_LIST.map((product) => (
          <div className="mb-10" key={product.id}>
            <Product product={product} key={product.id} />
            <Button text="Order Now" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
