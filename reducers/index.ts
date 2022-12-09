import {combineReducers} from 'redux'
import { createReducer } from 'reduxsauce';
// import {getUsers, setLoading} from "./users";
import pagesReducer from "./pages"

const rootReducer = combineReducers({
    pagesReducer,
})

export default rootReducer
