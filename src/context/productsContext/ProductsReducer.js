const productReducer = (state, { type, payload }) => {
    console.log("products payload", payload);
    switch(type){
        case "GET_PRODUCTS":
            return {
                ...state,
                products: payload
            }

        default:
            return state;
    }
}

export default productReducer;