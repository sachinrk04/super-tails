import * as actionTypes from "../actions/actionTypes";

const initialState = {
    productList: [],
    productDetails: {},
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PRODUCTS_LIST:
        return {
            ...state,
            productList: action.payload,
        };

        case actionTypes.PRODUCT_DETAILS:
        return {
            ...state,
            productDetails: action.payload,
        };

        default: return state;
    }
}

export default reducer;