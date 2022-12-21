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
    token: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // console.log("Auth state", state);

  const registerUser = async (userData) => {
    setLoading();
    try {
      const response = await axios.post(
        `${BASE_URL}/api/v1/auth/register`,
        userData,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      dispatch({
        type: "REGISTER_USER",
        payload: { user: response.data.data, token: response.data.token },
      });

    } catch (error) {
      console.log(error.response.data.error);
      dispatch({ type: "REGISTER_ERROR", payload: error.response.data.error });
    }
  };

  const loginUser = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, userData, {
        headers: {
          "Content-type": "application/json"
        }
      });
  
      console.log(response);
  
      if(response.status === 200){
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }
  
      dispatch({ type: "LOGIN_USER", payload: { user: response.data.data, token: response.data.token } });

    } catch (error) {
      console.log("Error", error);
      dispatch({ type: "LOGIN_ERROR", payload: error.response.data.error });
    }

  }

  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isSuccess: state.isSuccess,
        isError: state.isError,
        isLoading: state.isLoading,
        message: state.message,
        registerUser,
        loginUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
