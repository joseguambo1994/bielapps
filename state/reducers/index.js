import { combineReducers } from 'redux';
import accountReducer from './accountReducer'; 
import productReducer from './productReducer';

const reducers = combineReducers(
    {
        account: accountReducer, 
        product: productReducer
    }
);

export default reducers;