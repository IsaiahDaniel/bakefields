import { useReducer } from "react";
import { createContext } from "react";

import axios from "axios";
import authReducer from "./AuthReducer";
import { useEffect } from "react";

const BASE_URL = process.env.REACT_APP_ENV === 'development' ? "http://localhost:5000" : process.env.REACT_APP_BASE_URL_PROD 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
    user: "",
    token: JSON.parse(localStorage.getItem("token")) ? JSON.parse(localStorage.getItem("token")) : null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("token"));

    if(user){
      dispatch({ type: "LOGIN_USER", payload: { user: user.data, token: user.token } });
    }

  }, []);

  const setLoading = () => dispatch({ type: "SET_LOADING" });

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
  
      if(response.status === 200){
        localStorage.setItem("token", JSON.stringify(response.data));
      }
  
      dispatch({ type: "LOGIN_USER", payload: { user: response.data.data, token: response.data.token } });

    } catch (error) {
      console.log("Error", error);
      dispatch({ type: "LOGIN_ERROR", payload: error.response.data.error });
    }

  }

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "RESET" });
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
