import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-md md:justify-start justify-center">
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <h3 className="font-bold">{product.title}</h3>
      <Rating />
      <h3>&#8358;{product.price}</h3>
    </Link>
  );
};

export default Product;
