import axios from 'axios';
import * as actionTypes from "./actionTypes";
import { ApiUrls } from '../services/apis';

export const setProductDatas = (data) => {
    return {
        type: actionTypes.PRODUCTS_LIST,
        payload: data,
    };
};

export const setProductDetails = (data) => {
    return {
        type: actionTypes.PRODUCT_DETAILS,
        payload: data,
    };
};

export const fetchProducts = () => {
    return dispatch => {
        axios.get(ApiUrls.products).then((response) => {
            if (response.status === 200 && response?.data?.products.length) {
                dispatch(setProductDatas(response.data.products))
            }
        }).catch((error) => {
            new Error(error)
        })
    }
};

export const fetchProductDetails = (id) => {
    return dispatch => {
        axios.get(ApiUrls.products).then((response) => {
            if (response.status === 200 && response?.data?.products.length) {
                dispatch(setProductDetails(response.data.products[id]))
            }
        }).catch((error) => {
            new Error(error)
        })
    }
};

export const searchData = (text) => {
    return {
        type: actionTypes.SEARCH_ACTION,
        payload: text,
    };
};