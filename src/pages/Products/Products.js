import { useEffect, useContext } from "react";

import { Button, Product } from "../../components";
import { ProductContext } from "../../context/productsContext/ProductsContext";

const Products = () => {
  const { getProducts, products, filterCategories } = useContext(ProductContext);


  useEffect(() => {
    getProducts();
    // console.log("products", products);
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    filterCategories(e.target.value);
  }

  return (
    <div className="container mx-auto">
      <div className="flex-col md:flex md:flex-row justify-center items-center mt-10">
        <div className="pl-5 pr-5">
          <select
            id="category"
            // value={productCategory}
            onChange={(e) => handleChange(e)}
            className="bg-gray-50 border border-gray-300 pt-6 pb-6 mr-10 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option>Choose a Category</option>
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
      </div>
      <h2 className="text-4xl mb-6 text-center mt-5 md:p-0">Our cakes</h2>
      <div className="grid grid-cols-2 gap-8 p-5 md:p-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
        {!products && <h3 className="text-center p-4">No Products yet.</h3>}
        {products &&
          products.map((product) => (
            <div className="mb-10" key={product._id}>
              <Product product={product} />
              <Button text="Order Now" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;