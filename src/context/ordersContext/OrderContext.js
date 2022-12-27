import { useReducer } from "react";
import { createContext } from "react";
import orderReducer from "./OrdersReducer";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_ENV === 'development' ? "http://localhost:5000" : process.env.REACT_APP_BASE_URL_PROD 

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {

    const initialState = {
        isSuccess: false,
        isError: false,
        isLoading: false,
        message: "",
        orders: {},
    }

    const [state, dispatch] = useReducer(orderReducer, initialState);


    console.log("state", state);

    const createOrder = async (order) => {
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response =  await axios.post(`${BASE_URL}/api/v1/orders`, order, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("response", response);

        dispatch({ type: "CREATE_ORDER", payload: response.data.data });

        setTimeout(() => dispatch({ type: "RESET" }), 4000 );
    }

    const getOrder = async () => {
        dispatch({ type: "SET_LOADING" });
        const token = JSON.parse(localStorage.getItem("token")).token;
        const response =  await axios.get(`${BASE_URL}/api/v1/orders`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        console.log("response", response);

        dispatch({ type: "GET_ORDER", payload: response.data.data });
    }

    return (
        <OrderContext.Provider value={{ ...state, createOrder, getOrder }}>
            { children }
        </OrderContext.Provider>
    );
}

export default OrderProvider;