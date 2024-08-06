import './MoviePage.scss';
import MediaCard from '@/components/MediaCard/MediaCard';
import { MoviesFilter } from '@/shared/composables/services/MoviesFilter.js';
import { useState, useEffect } from "react";
import {  MOVIE_TYPES } from '@/shared/composables/constants/constants';
import FilterFields from '@/components/FilterFields/FilterFields';
import { useMoviesFilters } from "@/shared/modules/movies/use/useMoviesFilters";

const MoviePage = () => {
    const { allFields, fields } = useMoviesFilters();
    const [moviesData, setMoviesData] = useState([]);
    const [filtersData, setFiltersData] = useState({
        movieType: fields.moviesTypeField.value,
        movieCountry: fields.movieCountryField.value,
        movieGenre: fields.movieGenreField.value,
        ratingRange: [0, 10],
        yearRange: [1980, 2024],
    });

    const handleFilterChange = (key, value) => {
        setFiltersData(prevState => ({
            ...prevState,
            [key]: value,
        }));
    };
 
    useEffect(() => {
        const { getMovies } = MoviesFilter();
        const fetchMovies = async () => {
            const requestData = {
                type: filtersData.movieType ?? MOVIE_TYPES.ALL,
                country: filtersData.movieCountry ?? 'ALL',
                genre: filtersData.movieGenre ?? 'ALL',
            };
            const data = await getMovies(requestData);
            setMoviesData(data);
        };
        fetchMovies();
    }, [filtersData])


    return (
        <div className='movie-page'>
            <div className='movie-page__filters'>
                {allFields.map((field, index) => 
                    <FilterFields 
                        filterData={{ ...field, value: filtersData[field.name] }}
                        handleFilterChange ={handleFilterChange} 
                        key={index} 
                    />
                )}
               
                {/* <div className="movie-page__filters--slider">
                    <label>Rating: {filtersData.ratingRange[0]} - {filtersData.ratingRange[1]}</label>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        min={0}
                        max={10}
                        value={filtersData.ratingRange}
                        onChange={value => handleFilterChange('ratingRange', value)}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    />
                </div>
                <div className="movie-page__filters--year">
                    <label>Year of Release: {filtersData.yearRange[0]} - {filtersData.yearRange[1]}</label>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        min={1980}
                        max={2024}
                        value={filtersData.yearRange}
                        onChange={value => handleFilterChange('yearRange', value)}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    />
                </div> */}
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








