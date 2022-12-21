import { useReducer } from "react";
import { createContext } from "react";
import orderReducer from "./OrdersReducer";
import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {

    const initialState = {
        isSuccess: false,
        isError: false,
        isLoading: false,
        message: "",
        order: {},
    }

    const [state, dispatch] = useReducer(orderReducer, initialState)

    const createOrder = async (order) => {
        const response =  await axios.post(`${BASE_URL}/api/v1/orders`, order);

        console.log("response", response);

        dispatch({ type: "CREATE_ORDER", payload: response.data.data });
    }

    return (
        <OrderContext.Provider value={{ isSuccess: state.isSuccess, isError: state.isError, isLoading: state.isLoading, message: state.message, order: state.order, createOrder }}>
            { children }
        </OrderContext.Provider>
    );
}

export default OrderProvider;