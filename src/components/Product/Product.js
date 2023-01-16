import React from "react";
import { Link } from "react-router-dom";
// import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`} className="mb-10">
      {/* shadow-lg */}
      <div className="md:justify-start justify-center">
        <img
          src={product.image}
          alt={product.title}
          // style={{ width: "270px", height: "270px" }}
          className="object-contain w-[400px] h-[380px] mb-4"
        />
      </div>
      <h3 className="font-bold text-2xl">{product.name}</h3>
      <h3 className="font-bold">Category: <span className="font-lighttt">{product.category}</span></h3>
      {/* <Rating /> */}
      <h3>&#8358;{product.price}</h3>
    </Link>
  );
};

export default Product;
