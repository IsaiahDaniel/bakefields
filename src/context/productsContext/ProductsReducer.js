const productReducer = (state, { type, payload }) => {
  //   console.log("products payload", payload);
  switch (type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case "GET_PRODUCT":
      return {
        ...state,
        isLoading: false,
        product: payload,
      };

    case "FILTER_PRODUCT":
      return {
        ...state,
        isLoading: false,
        products: payload,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default productReducer;
