import * as actionTypes from "./actionTypes";

export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data,
    };
};

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    };
};



export const changeQty = (id, qty) => {
    return {
        type: actionTypes.CHANGE_CART_QTY,
        payload: {id, qty},
    };
};