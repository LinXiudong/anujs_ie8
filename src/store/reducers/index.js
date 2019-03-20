import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import cartReducer from './cart-reducers';

const allReducers = {
    products: productsReducer,
    shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;