import { useReducer } from "react";
import { createContext } from "react";

import axios from "axios";
import authReducer from "./AuthReducer";

const BASE_URL = "http://localhost:5000";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
    user: "",
    token: "",
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/auth/register`, userData, {
            headers: {
                "Content-type": "application/json"
            }
        });

        console.log("response", response);

        if(response.status === 201){
            localStorage.setItem("token", JSON.stringify(response.data.token));
        }

        dispatch({ type: "REGISTER_USER", payload: { user: response.data.data, token: response.data.token } })

    } catch (error) {
        console.log("error", error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isSuccess: state.isSuccess,
        isError: state.isError,
        message: state.message,
        registerUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
