import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/Cart";
import ProductsSlice from "./slices/Products";
import { TypedUseSelectorHook, useDispatch , useSelector as useReduxSelector } from "react-redux";

import logger from 'redux-logger';
export const store = configureStore({
    reducer : {
        'cart' : CartSlice.reducer,
        'products' : ProductsSlice.reducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      (process.env.NODE_ENV ==='development' && typeof window !== "undefined")
        ? getDefaultMiddleware({ serializableCheck: false }).concat(logger)
        : getDefaultMiddleware({ serializableCheck: false }).concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
