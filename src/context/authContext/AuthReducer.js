const authReducer = (state, { type, payload }) => {
  console.log("payload", payload);
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
      console.log("REGISTER_ERROR CALLED");
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
        isSuccess: true
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
        isError: true,
        message: payload
      };

    case "LOGOUT":
      return {
        ...state,
        token: null,
        user: null,
        isLoading: false,
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
