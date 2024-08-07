import { MOVIE_TYPES } from '@/shared/composables/constants/constants';
// import { FiltersDataService } from '@/shared/composables/services/FiltersDataService.js';

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
    };

    const movieCountryField = {
        name: 'movieCountry',
        type: 'select',
        value: null,
        options: [],
    };

    const movieGenreField = {
        name: 'movieGenre',
        type: 'select',
        value: null,
        options: [],
    };

    const ratingRangeField = {
        name: 'ratingRange',
        type: 'range',
        value: [0, 10],
        min: 0,
        max: 10,
        placeholder: 'Rating Range',
    };

    const yearRangeField = {
        name: 'yearRange',
        type: 'range',
        value: [1980, 2024],
        min: 1980,
        max: 2024,
        placeholder: 'Year of Release',
    };

    const allFields = [
        moviesTypeField,
        movieCountryField,
        movieGenreField,
        ratingRangeField,
        yearRangeField,
    ];


    return {
        allFields,
        fields: {
            moviesTypeField,
            movieCountryField,
            movieGenreField,
            ratingRangeField,
            yearRangeField,
        },
    };
};
