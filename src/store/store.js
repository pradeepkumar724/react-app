import { configureStore } from "@reduxjs/toolkit";
import conterReducer from './counter'

export default configureStore({
    reducer : {
        counter : conterReducer
    }
})