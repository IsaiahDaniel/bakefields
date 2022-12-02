import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg md:justify-start justify-center">
        <img
          src={product.image}
          alt={product.title}
          // style={{ width: "270px", height: "270px" }}
          className="object-cover w-full"
        />
      </div>
      <h3 className="font-bold">{product.title}</h3>
      <Rating />
      <h3>&#8358;{product.price}</h3>
    </Link>
  );
};

export default Product;
