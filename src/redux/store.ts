import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart/slice"

export const store = () => {
    return configureStore({
        reducer: {
            cart: cartReducer
        }
    })
}

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];