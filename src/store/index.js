import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { actionReducer } from "./action";
import cartReducer from "./cart";





const rootReducers = combineReducers({
    items:actionReducer,
    cart:cartReducer,

   
})


const store = configureStore({
    reducer:rootReducers,
})
export default store