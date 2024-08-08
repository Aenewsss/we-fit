import { createSlice } from "@reduxjs/toolkit"
import { CartInitialState } from "./state"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: CartInitialState,
    reducers: {
        addMovieToCart(state, action) {
            const alreadyAdded = state.movies.find(el => el.id == action.payload.id)

            if (alreadyAdded) {
                state.movies = state.movies.map(el =>
                    el.id === action.payload.id
                        ? { ...el, quantity: el.quantity + 1 }
                        : el
                );
            } else state.movies.push({ ...action.payload, quantity: 1 });

        },
        removeMovieFromCart(state, action) {
            const updatedList = state.movies.filter(el => el.id !== action.payload.id)
            state.movies = updatedList
        },
        setMoviesList(state, action) {
            state.movies = action.payload
        },
        increaseMovieQuantity(state, action) {
            state.movies = state.movies.map(el =>
                el.id === action.payload.id
                    ? { ...el, quantity: el.quantity + 1 }
                    : el
            );
        },
        decreaseMovieQuantity(state, action) {
            state.movies = state.movies.map(el =>
                el.id === action.payload.id
                    ? { ...el, quantity: el.quantity - 1 }
                    : el
            );
        },
        changeMovieQuantity(state,action){
            state.movies = state.movies.map(el =>
                el.id === action.payload.id
                    ? { ...el, quantity: action.payload.quantity }
                    : el
            );
        }
    },
})

export const { addMovieToCart, removeMovieFromCart, setMoviesList,decreaseMovieQuantity,increaseMovieQuantity,changeMovieQuantity } = cartSlice.actions
export const cartReducer = cartSlice.reducer