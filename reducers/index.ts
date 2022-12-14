import {combineReducers} from 'redux'
// import { createReducer } from 'reduxsauce';
// import {getUsers, setLoading} from "./users";
import shopifyReducer from "./shopify"

const rootReducer = combineReducers({
    shopifyReducer,
})

export default rootReducer
