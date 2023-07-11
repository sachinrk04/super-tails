import * as actionTypes from "../actions/actionTypes";

const initialState = {
    productList: [],
    productStore: [],
    productDetails: {},
    startNumber: 0,
    endNumber: 50,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PRODUCTS_LIST:
            return {
                ...state,
                productStore: action.payload,
                productList: action.payload.slice(state.startNumber, state.endNumber),
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
        case actionTypes.PAGINATION_ACTION:
            return {
                ...state,
                productList: state.productStore.slice(action.payload.itemStart,action.payload.itemEnd),
            }
        default: return state;
    }
}

export default reducer;