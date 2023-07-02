import { combineReducers } from 'redux';
import productReducers from "./productReducer";
import cartReducers from "./cartReducer";

const rootReducer = combineReducers({
    products: productReducers,
    carts: cartReducers,
});
 
export default rootReducer;