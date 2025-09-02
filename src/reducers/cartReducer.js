const cartInitialState = {
    cartList: [],
    total: 0
};
export const cartReducer = (state = cartInitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: payload.products,
                total: payload.total
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList: payload.products,
                total: payload.total
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cartList: payload.products,
                total: payload.total
            };

        default:
            return state;
    }
}