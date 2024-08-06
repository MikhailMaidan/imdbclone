import {  MOVIE_TYPES } from '@/shared/composables/constants/constants';

export const useMoviesFilters = () => {
    const typeOptions = [
        { value: MOVIE_TYPES.FILM, label: 'Film' },
        { value: MOVIE_TYPES.TV_SHOW, label: 'TV Show' },
        { value: MOVIE_TYPES.TV_SERIES, label: 'TV Series' },
        { value: MOVIE_TYPES.MINI_SERIES, label: 'Mini Series' },
        { value: MOVIE_TYPES.ALL, label: 'All' },
    ];

    const moviesTypeField = {
        name: 'movieType',
        type: 'select',
        value: null,
        options: typeOptions,
    }

    const movieCountryField = {
        name: 'movieCountry',
        type: 'select',
        value: null,
        options: typeOptions,
    }

    const movieGenreField = {
        name: 'movieGenre',
        type: 'select',
        value: null,
        options: typeOptions,
    }

    const allFields = [
        moviesTypeField,
        movieCountryField,
        movieGenreField,
    ];

    return {
        allFields,
        fields: {
            moviesTypeField,
            movieCountryField,
            movieGenreField,
        }
    };
};







