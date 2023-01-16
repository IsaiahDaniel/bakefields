import { useEffect, useContext } from "react";

import { Button, Product } from "../../components";
import { ProductContext } from "../../context/productsContext/ProductsContext";
import { getProducts } from "../../context/productsContext/ProductsActions";
import Spinner from "../../components/Spinner/Spinner";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, filterCategories, dispatch, isLoading } = useContext(ProductContext);

  useEffect(() => {
    const allProduct = async () => {
      dispatch({ type: "SET_LOADING" });
      const item = await getProducts();
      dispatch({ type: "GET_PRODUCTS", payload: item.data.data });
    }
    allProduct();
  }, [dispatch]);

  const handleChange = (e) => {
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
            <option value="special">Special Cakes</option>
          </select>

          
        </div>
      </div>
      <h2 className="text-4xl mb-6 text-center mt-5 md:p-0">Our cakes</h2>
      { isLoading && <Spinner /> }
      <div className="grid grid-cols-1 gap-8 p-5 md:p-0 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3">
        {!products && <h3 className="text-center p-4">No Products yet.</h3>}
        {products &&
          products.map((product) => (
            <div className="shadow-lg p-5 mb-10 w-full" key={product._id}>
              <Product product={product} />
              <Link to={`/product/${product._id}`}>
                <Button text="Order Now" />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Products;