import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import productReducer from "./ProductsReducer";
// import { useEffect } from "react";

const BASE_URL = "http://localhost:5000";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {
  const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    products: [],
    product: {},
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  const getProducts = async () => {
    try {
      setLoading();
      const response = await axios.get(`${BASE_URL}/api/v1/products`);
      dispatch({ type: "GET_PRODUCTS", payload: response.data.data });
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getProduct = async (id) => {
    try {
      setLoading();
      const response = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
      dispatch({ type: "GET_PRODUCT", payload: response.data.data });
    } catch (error) {
      console.log("get product error", error);
    }
  };

  const filterCategories = async (category) => {
    try {
      setLoading();
      console.log("request ran....");
      const response = await axios.get(`${BASE_URL}/api/v1/products/filter/${category}`);
      console.log("response", response);
      dispatch({ type: "FILTER_PRODUCT", payload: response.data.data });
    } catch (error) {
      console.log("get product error", error);
    }
  };

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //         setLoading();
  //         const response = await axios.get(`${BASE_URL}/api/v1/products`);
  //         dispatch({ type: "GET_PRODUCTS", payload: response.data.data });
  //     } catch (error) {
  //         console.log("Error", error);
  //     }
  //   };

  //   getProducts();
  // }, []);

  return (
    <ProductContext.Provider
      value={{
        isLoading: state.isLoading,
        isError: state.isError,
        isSuccess: state.isSuccess,
        products: state.products,
        product: state.product,
        filterCategories,
        getProducts,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
