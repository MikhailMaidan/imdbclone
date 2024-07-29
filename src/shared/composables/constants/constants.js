const MAIN_URL = "https://kinopoiskapiunofficial.tech";
const KINOPOISK_API_KEY = "58ccc5e7-782a-494c-9785-2b8fc3cac7a6";
const MOVIES_URL = '/api/v2.2/films';

const MOVIE_TYPES = {
    FILM: "FILM",
    TV_SHOW: "TV_SHOW",
    TV_SERIES: "TV_SERIES",
    MINI_SERIES: "MINI_SERIES",
    ALL: "ALL"
}


const SLIDER_ADAPTIVE_SETTINGS = {
    1024: { 
        slidesPerView: 3,
        spaceBetween: 30,
    },                    
    768: { 
        slidesPerView: 2,
        spaceBetween: 30,
    },
    360: { 
        slidesPerView: 1,
        spaceBetween: 30,
    },
}

const SECTIONS = {
    movies: 'movies',
    miniSiries: 'minisiries',
    tvshow: 'tvshow',
    novelties: 'novelties',
}

const MOVIE_REQUEST_DATA = {
    type: MOVIE_TYPES.FILM,
    ratingFrom: 9,
}

const TVSHOW_REQUEST_DATA = {
    type: MOVIE_TYPES.TV_SHOW,
    ratingFrom: 8,
}

const MINISERIES_REQUEST_DATA = {
    type: MOVIE_TYPES.MINI_SERIES,
    ratingFrom: 8,
}

const NOVELTIES_REQUEST_DATA = {
    type: MOVIE_TYPES.ALL,
    yearFrom: 2024,
}

const QUERY_DATA = {
    keyword: '',
    ratingFrom: 8,
}
 
export  {
    SECTIONS,
    MAIN_URL,
    MOVIES_URL,
    QUERY_DATA,
    KINOPOISK_API_KEY,
    MOVIE_REQUEST_DATA,
    TVSHOW_REQUEST_DATA,
    MINISERIES_REQUEST_DATA,
    SLIDER_ADAPTIVE_SETTINGS,
    NOVELTIES_REQUEST_DATA,
}