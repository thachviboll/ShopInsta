import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { itemDetailsReducer, itemListReducer } from './reducers/itemReducer';
import {cartReducer} from './reducers/cartReducers';

const initialState = {};
const reducer = combineReducers({
    itemList: itemListReducer,
    itemDetails: itemDetailsReducer,
    cart: cartReducer
})

const composeEnhancer = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;


