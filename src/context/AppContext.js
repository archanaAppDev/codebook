import { createContext, useContext, useReducer, useMemo, useCallback } from "react";
import { rootReducers } from "../reducers";
import { type } from "@testing-library/user-event/dist/type";

const rootInitialState = {
    cart: {
        cartList: [],
        total: 0
    },
    filter: {
        productList: [],
        onlyInStock: false,
        bestSellerOnly: false,
        sortBy: null,
        ratings: null
    }
};

const AppContext = createContext(rootInitialState);

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducers, rootInitialState);

    function addToCart(product) {
        const updatedList = state.cart.cartList.concat(product);
        const updatedTotal = state.cart.total + product.price;

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function removeFromCart(product) {
        const updatedList = state.cart.cartList.filter(item => item.id !== product.id);
        const updatedTotal = state.cart.total - product.price;

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedList,
                total: updatedTotal
            }
        });
    }

    function clearCart() {
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                total: 0
            }
        });
    }

    const initialProductList = useCallback((products) => {
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });
    }, [dispatch]);


    function bestSeller(products) {
        return state.filter.bestSellerOnly ? products.filter(product => product.best_seller === true) : products;
    }
    function inStock(products) {
        return state.filter.onlyInStock ? products.filter(product => product.in_stock === true) : products;
    }
    function sort(products) {
        if (state.filter.sortBy === "lowtohigh") {
            return products.slice().sort((a, b) => Number(a.price) - Number(b.price));
        }
        if (state.filter.sortBy === "hightolow") {
            return products.slice().sort((a, b) => Number(b.price) - Number(a.price));
        }
        return products;
    }
    function rating(products) {

        if (!state.filter.ratings) {
            return products;
        }
        const ratingThreshold = Number(state.filter.ratings.charAt(0));
        return products.filter(product => product.rating >= ratingThreshold);
    }

    const filteredProductList = useMemo(() => {
        console.log("State filter:", state.filter);

        if (!state.filter || !state.filter.productList) {
            return [];
        }

        let processedList = bestSeller(state.filter.productList);
        processedList = inStock(processedList);
        processedList = sort(processedList);
        processedList = rating(processedList);
        return processedList;
    }, [state.filter]);

    const value = {
        state,
        dispatch,
        addToCart,
        removeFromCart,
        clearCart,
        initialProductList,
        filteredProductList
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
export const useAppContext = () => {
    return useContext(AppContext);
};  