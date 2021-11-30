import { configureStore } from "@reduxjs/toolkit";
import sittersSlice from './sittersSlice'

const store = configureStore({
    reducer: {
        sitters: sittersSlice
    }
})

export default store;