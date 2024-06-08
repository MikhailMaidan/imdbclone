import { BaseFetcher } from "@/shared/composables/fetcher/BaseFetcher.js";
import { MOVIES_URL } from "@/shared/composables/constants/constants";


export const MovieService = () => {
    const movieService = new BaseFetcher(MOVIES_URL);

    const getMovies = async (moviesOptions) => {
        const moviesData = await movieService.getData(moviesOptions);
        const parsedMovie = moviesData.splice(0, 9);
        return parseMovies(parsedMovie); 
    }

    const parseMovies = (moviesData) => {
        return moviesData.map((movie) => {
            const genresArray = movie.genres.map((item)=>item.genre);
            const countriesArray = movie.countries.map((item) => item.country); 
            return {
                id: movie.kinopoiskId || movie.imdbId,
                name:  movie.nameRu || movie.nameOriginal,
                imageUrl: movie.posterUrlPreview,
                rating: `Rating from the Kinopoisk: ${movie.ratingKinopoisk}`,
                genre: `Genres: ${genresArray.join(", ")}`,
                year: `Year: ${movie.year}`,
                countries: `Countries: ${countriesArray.join(', ')}`,
            }
        })
    }

    return {
        getMovies,
    }
}