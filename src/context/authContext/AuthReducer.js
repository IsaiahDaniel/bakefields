const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "REGISTER_USER":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoading: false,
        isSuccess: true,
      };

    case "REGISTER_ERROR":
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isError: true,
        message: payload,
      };

    case "LOGIN_USER":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoading: false,
        isSuccess: true,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isError: true,
        message: payload,
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
      };

    case "RESET":
      return {
        ...state,
        isSuccess: false,
        isError: false,
        isLoading: false,
        message: "",
        user: "",
        token: null
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

export default authReducer;
