import { IMovie } from "@/interfaces/movie.interface";

export interface IStore {
    cart: ICartInitialState
}

export interface ICartInitialState {
    movies: IMoviesCart[]
}

export interface IMoviesCart extends IMovie {
    quantity: number
}