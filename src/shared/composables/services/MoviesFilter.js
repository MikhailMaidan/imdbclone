import { BaseFetcher } from "@/shared/composables/fetcher/BaseFetcher.js";
import { MOVIES_URL } from "@/shared/composables/constants/constants";
// import { useMoviesFilters } from "@/shared/modules/movies/use/useMoviesFilters";

export const MoviesFilter = () => {
    const movieService = new BaseFetcher(MOVIES_URL);

    const getMovies = async (moviesOptions) => {
        const { type = 'ALL', ratingFrom = 0, ratingTo = 10, country = 'ALL', yearFrom = 1980, yearTo = 2024, genre = 'ALL' } = moviesOptions;

        const queryParams = {
            type,
            ratingFrom,
            ratingTo,
            country,
            yearFrom,
            yearTo,
            genre, 
        };

        try {
            const moviesData = await movieService.getData(queryParams);
            const parsedMovies = moviesData.splice(0, 12);
            return parseMovies(parsedMovies);
        } catch (error) {
            console.error('Error fetching movies:', error);
            return [];
        }
    };

    const parseMovies = (moviesData) => {
        return moviesData.map((movie) => {
            const genresArray = movie.genres.map((item) => item.genre);
            const countriesArray = movie.countries.map((item) => item.country);
            return {
                id: movie.kinopoiskId || movie.imdbId,
                name: movie.nameRu || movie.nameOriginal,
                imageUrl: movie.posterUrlPreview,
                rating: `Rating from the Kinopoisk: ${movie.ratingKinopoisk}`,
                genre: `Genres: ${genresArray.join(", ")}`,
                year: `Year: ${movie.year}`,
                countries: `Countries: ${countriesArray.join(', ')}`,
            };
        });
    };

    return {
        getMovies,
    };
};







