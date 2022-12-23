import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_ENV === "development"
    ? "http://localhost:5000"
    : process.env.REACT_APP_BASE_URL_PROD;

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/products`);

    return response;
  } catch (error) {
    console.log("Error", error);
  }
};

export const getProduct = async (id) => {
  try {
    // setLoading();
    const response = await axios.get(`${BASE_URL}/api/v1/products/${id}`);
    return response;
  } catch (error) {
    console.log("get product error", error);
  }
};

