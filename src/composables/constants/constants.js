const MAIN_URL = "https://kinopoiskapiunofficial.tech";
const KINOPOISK_API_KEY = "1728ce40-48b6-4662-862b-4a85a1bc4fc4";
const MOVIES_URL = '/api/v2.2/films';

const MOVIE_TYPES = {
    FILM: "FILM",
    TV_SHOW: "TV_SHOW",
    TV_SERIES: "TV_SERIES",
    MINI_SERIES: "MINI_SERIES",
    ALL: "ALL"
}

const MOVIE_REQUEST_DATA = {
    type: MOVIE_TYPES.FILM,
    ratingFrom: 9,
}
 
export  {
    MAIN_URL,
    MOVIES_URL, 
    KINOPOISK_API_KEY,
    MOVIE_REQUEST_DATA,
}