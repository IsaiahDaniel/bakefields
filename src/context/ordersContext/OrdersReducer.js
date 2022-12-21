const orderReducer = (state, { type, payload }) => {
    switch(type){

        case "CREATE_ORDER":
            return {
                ...state,
                orders: {},
                isLoading: false
            }

        default:
            return state;
    }
}


export default orderReducer;
