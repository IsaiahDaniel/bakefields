import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import productReducer from "./ProductsReducer";

const BASE_URL = process.env.REACT_APP_ENV === 'development' ? "http://localhost:5000" : process.env.REACT_APP_BASE_URL_PROD 

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

  const filterCategories = async (category) => {
    try {
      // setLoading();
      // console.log("request ran....");
      const response = await axios.get(`${BASE_URL}/api/v1/products/filter/${category}`);
      console.log("response", response);
      dispatch({ type: "FILTER_PRODUCT", payload: response.data.data });
    } catch (error) {
      console.log("get product error", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        dispatch,
        filterCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsProvider;
