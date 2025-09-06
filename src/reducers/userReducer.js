const initialState = {
    isLoggedIn: false,
    userInfo: null
};
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.payload
            };
        case "GET_USER_DETAIL":
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null
            };
        default:
            return state;
    }
}
