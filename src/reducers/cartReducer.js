import * as actionTypes from "../actions/actionTypes";

const initialState = {
    cartList: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            const found = state.cartList.some(el => el.id === action.payload.id);
            if (!found) {
                return { 
                    ...state, 
                    cartList: [{ ...action.payload }, ...state.cartList]
                };
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartList: state.cartList.filter((c) => c.id !== action.payload),
            };
        case actionTypes.CHANGE_CART_QTY:
            return {
                ...state,
                cartList: state.cartList.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default: return state;
    }
};

export default reducer;
  