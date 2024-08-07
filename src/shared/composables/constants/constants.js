const MAIN_URL = "https://kinopoiskapiunofficial.tech";
// const KINOPOISK_API_KEY = "58ccc5e7-782a-494c-9785-2b8fc3cac7a6";
// const KINOPOISK_API_KEY = '1728ce40-48b6-4662-862b-4a85a1bc4fc4';
// const KINOPOISK_API_KEY = '7fddf082-a1de-4d8d-a44c-5ce54af88328';
// const KINOPOISK_API_KEY = 'decae270-cf5d-4432-b3ba-72deb3dfff74';
const KINOPOISK_API_KEY = 'e9e27996-69f7-4829-9855-6b73710c2b48';
const MOVIES_URL = '/api/v2.2/films';
const FILTERS_DATA = '/api/v2.2/films/filters';

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
    FILTERS_DATA,
    MAIN_URL,
    MOVIES_URL,
    QUERY_DATA,
    MOVIE_TYPES,
    KINOPOISK_API_KEY,
    MOVIE_REQUEST_DATA,
    TVSHOW_REQUEST_DATA,
    MINISERIES_REQUEST_DATA,
    SLIDER_ADAPTIVE_SETTINGS,
    NOVELTIES_REQUEST_DATA,
}