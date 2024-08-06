import './MoviePage.scss';
import MediaCard from '@/components/MediaCard/MediaCard';
import { MoviesFilter } from '@/shared/composables/services/MoviesFilter.js';
import { useState, useEffect } from "react";
import FilterFields from '@/components/FilterFields/FilterFields';
import { useMoviesFilters } from "@/shared/modules/movies/use/useMoviesFilters";
import {  MOVIE_TYPES } from '@/shared/composables/constants/constants';

const DEBOUNCE_DELAY = 1500;

const MoviePage = () => {
    const { allFields, fields } = useMoviesFilters();
    const [moviesData, setMoviesData] = useState([]);
    const [filtersData, setFiltersData] = useState({
        movieType: fields.moviesTypeField.value,
        movieCountry: fields.movieCountryField.value,
        movieGenre: fields.movieGenreField.value,
        ratingRange: fields.ratingRangeField.value,
        yearRange: fields.yearRangeField.value,
    });

    const handleFilterChange = (key, value) => {
        setFiltersData(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };
 
    useEffect(() => {
        const handler = setTimeout(() => {
            const { getMovies } = MoviesFilter();
            const fetchMovies = async () => {
                const requestData = {
                    type: filtersData.movieType ?? MOVIE_TYPES.ALL,
                    country: filtersData.movieCountry ?? 'ALL',
                    genre: filtersData.movieGenre ?? 'ALL',
                    ratingFrom: filtersData.ratingRange[0],
                    ratingTo: filtersData.ratingRange[1],
                    yearFrom: filtersData.yearRange[0],
                    yearTo: filtersData.yearRange[1],
                };
                const data = await getMovies(requestData);
                setMoviesData(data);
            };
            fetchMovies();
        }, DEBOUNCE_DELAY);
        
        return () => {
            clearTimeout(handler);
        };
    }, [filtersData]);
    return (
        <div className='movie-page'>
            <div className='movie-page__filters'>
                {allFields.map((field, index) => (
                    <FilterFields
                        key={index}
                        filterData={{ ...field, value: filtersData[field.name] }}
                        handleFilterChange={handleFilterChange}
                    />
                ))}
            </div>
            <div className='movie-page__wrapper'>
                {moviesData.length > 0 ? (
                    moviesData.map((movie, index) => 
                        <MediaCard movie={movie} key={index} />
                    )
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </div>
    );
};

export default MoviePage;
