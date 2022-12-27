const orderReducer = (state, { type, payload }) => {
  switch (type) {
    case "CREATE_ORDER":
      return {
        ...state,
        orders: {},
        isSuccess: true,
        isLoading: false,
      };

    case "GET_ORDER":
      return {
        ...state,
        orders: payload,
        isLoading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "RESET":
        return {
            isSuccess: false,
            isError: false,
            isLoading: false,
            message: "",
            orders: {}
        }

    default:
      return state;
  }
};

export default orderReducer;
