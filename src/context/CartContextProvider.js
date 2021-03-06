import React, { createContext, useReducer } from "react";

const initialState = {
    selectedItem: [],
    itemCounter: 0,
    total: 0,
    checkout: false,
    token: "",
};
const sumItems = (item) => {
    const itemCounter = item.reduce(
        (total, product) => total + product.quantity,
        0
    );
    const total = item
        .reduce((total, product) => total + product.quantity * product.price, 0)
        .toFixed(2);
    return { itemCounter, total };
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (
                !state.selectedItem.find(
                    (item) => item.id === action.payload.id
                )
            ) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            return {
                ...state,
                selectedItem: [...state.selectedItem],
                ...sumItems(state.selectedItem),
                checkout: false,
            };
        case "REMOVE_ITEM":
            const newSelectedItem = state.selectedItem.filter(
                (item) => item.id !== action.payload.id
            );
            return {
                ...state,
                selectedItem: [...newSelectedItem],
                ...sumItems(newSelectedItem),
            };
        case "INCREASE":
            const indexI = state.selectedItem.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItem[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItem),
            };
        case "DECREASE":
            const indexD = state.selectedItem.findIndex(
                (item) => item.id === action.payload.id
            );
            state.selectedItem[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItem),
            };
        case "CHECKOUT":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: true,
            };

        case "CLEAR":
            return {
                selectedItem: [],
                itemCounter: 0,
                total: 0,
                checkout: false,
            };
        case "LOGIN":
            return { ...state, token: action.payload };
        case "LOGOUT":
            return { ...state, token: "" };
        default:
            return state;
    }
};
export const CartContext = createContext();
const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
