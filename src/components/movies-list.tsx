import movieService from "@/services/movie.service"
import MovieCard from "./movie-card/movie-card"
import { useEffect, useState } from "react";
import { IMovie } from "@/interfaces/movie.interface";
import { FlexContainer } from "./flex-container";
import { Loading } from "./loading/loading";

export default function MoviesList() {
    const [movies, setMovies] = useState<IMovie[]>();

    useEffect(() => {
        getData()
        async function getData() {
            const { products } = (await movieService.get())
            setMovies(products)
        }
    }, []);

    if(!movies) return <Loading />

    return (
        <FlexContainer flexWrap="wrap" gapRow={24} gapColumn={16}>
            {movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </FlexContainer>
    )
}