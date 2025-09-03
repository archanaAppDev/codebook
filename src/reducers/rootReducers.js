import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
import { userReducer } from "./userReducer";
export const rootReducers = combineReducers({
    cart: cartReducer,
    filter: filterReducer,
    user: userReducer
});
