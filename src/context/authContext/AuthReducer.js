const authReducer = (state, { action, payload }) => {
  switch (action) {
    case "REGISTER_USER":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoading: false,
      };

    case "LOGIN_USER":
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
