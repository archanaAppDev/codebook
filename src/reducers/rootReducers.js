import { combineReducers } from "redux";
import { cartReducer } from "./cartReducer";
import { filterReducer } from "./filterReducer";
export const rootReducers = combineReducers({
    cart: cartReducer,
    filter: filterReducer
});
