import React from "react";
import Rating from "../Rating/Rating";

const Product = ({ product }) => {
  console.log("title", product);

  return (
    <div>
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
    </div>
  );
};

export default Product;
