import { configureStore } from "@reduxjs/toolkit";
import cartslice from './Slice'

const store = configureStore({
    reducer : {
        app : cartslice
    }
})
export default store;