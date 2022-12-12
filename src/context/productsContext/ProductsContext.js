import axios from "axios";
import { useReducer } from "react";
import { createContext } from "react";
import productReducer from "./ProductsReducer";

const BASE_URL = "http://localhost:5000";

export const ProductContext = createContext();

const ProductsProvider = ({ children }) => {

    const initialState = {
        isSuccess: false,
        isError: true,
        isLoading: false,
        products: []
    }

    const [state, dispatch] = useReducer(productReducer, initialState);

    console.log("product Context", state);

    const getProducts = async () => {
        const response = await axios.get(`${BASE_URL}/api/v1/products`);

        console.log("response", response.data.data);

        dispatch({ type: "GET_PRODUCTS", payload: response.data.data });
    }

    return (
        <ProductContext.Provider value={{ isLoading: state.isLoading, isError: state.isError, isSuccess: state.isSuccess, products: state.products, getProducts }}>
            { children }
        </ProductContext.Provider>
    )

}

export default ProductsProvider;