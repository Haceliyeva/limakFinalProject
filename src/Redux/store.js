// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import todoSlice from "./Slices/todoSlice";
import { apiSlice } from "./Slices/apiSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        todos: todoSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default store;