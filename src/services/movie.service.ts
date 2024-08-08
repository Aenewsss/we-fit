import { EnpointEnum } from "@/enum/endpoint.enum"
import apiService from "./api.service"
import { IMovieResponse } from "@/interfaces/movie-response.interface"

class MovieService {
    async get(): Promise<IMovieResponse> {
        return await apiService.get(EnpointEnum.movies)
    }
}

const movieService = new MovieService()
export default movieService