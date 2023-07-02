import * as actionTypes from "../actions/actionTypes";

const initialState = {
    productList: [],
    productStore: [],
    productDetails: {},
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PRODUCTS_LIST:
            return {
                ...state,
                productList: action.payload,
                productStore: action.payload,
            };

        case actionTypes.PRODUCT_DETAILS:
            return {
                ...state,
                productDetails: action.payload,
            };
        case actionTypes.SEARCH_ACTION:
            return {
                ...state,
                productList: state.productStore.filter((item) => {
                    return item.title.toLowerCase().includes(action.payload.toLowerCase());
                }),
            };
        default: return state;
    }
}

export default reducer;