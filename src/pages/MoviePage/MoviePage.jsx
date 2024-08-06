import './MoviePage.scss';
import Select from 'react-select';
import MediaCard from '@/components/MediaCard/MediaCard';
import makeAnimated from 'react-select/animated';
import ReactSlider from 'react-slider';
import { MoviesFilter } from '@/shared/composables/services/MoviesFilter.js';
import { useState, useEffect } from "react";
import {  MOVIE_TYPES } from '@/shared/composables/constants/constants';

const MoviePage = () => {
    const animatedComponents = makeAnimated();
    const [moviesData, setMoviesData] = useState([]);

    const [filtersData, setFiltersData] = useState({
        movieType: null,
        movieCountry: null,
        selectedGenre: null,
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
                ratingFrom: filtersData.ratingRange[0],
                ratingTo: filtersData.ratingRange[1],
                country: filtersData.selectedCountry?.value ?? 'ALL',
                yearFrom: filtersData.yearRange[0],
                yearTo: filtersData.yearRange[1],
                genre: filtersData.selectedGenre?.value ?? 'ALL', 
            };
            const data = await getMovies(requestData);
            setMoviesData(data);
        };
        fetchMovies();
    }, [filtersData]); 

    const typeOptions = [
        { value: MOVIE_TYPES.FILM, label: 'Film' },
        { value: MOVIE_TYPES.TV_SHOW, label: 'TV Show' },
        { value: MOVIE_TYPES.TV_SERIES, label: 'TV Series' },
        { value: MOVIE_TYPES.MINI_SERIES, label: 'Mini Series' },
        { value: MOVIE_TYPES.ALL, label: 'All' },
    ];

    const countryOptions = [
        { value: 'USA', label: 'USA' },
        { value: 'Russia', label: 'Russia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'France', label: 'France' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'India', label: 'India' },
        { value: 'China', label: 'China' },
        { value: 'ALL', label: 'All' },
    ];

    const genreOptions = [
        { value: 'Action', label: 'Action' },
        { value: 'Комедия', label: 'Comedy' },
        { value: 'Драма', label: 'Drama' },
        { value: 'Horror', label: 'Horror' },
        { value: 'Sci-Fi', label: 'Sci-Fi' },
        { value: 'ALL', label: 'All' },
    ];

    return (
        <div className='movie-page'>
            <div className='movie-page__filters'>
                <Select 
                    className="movie-page__filters--first"
                    value={typeOptions.find(option => option.value === filtersData.movieType) ??  null}
                    onChange={option => handleFilterChange('movieType', option?.value ?? MOVIE_TYPES.ALL)}
                    components={animatedComponents} 
                    options={typeOptions}
                    isClearable={true}
                />
               <Select 
                    className="movie-page__filters--second"
                    value={countryOptions.find(option => option.value === filtersData.movieCountry) ??  null} 
                    onChange={option => handleFilterChange('movieCountry', option?.value ?? null)}
                    components={animatedComponents} 
                    options={countryOptions}
                    isClearable={true}
                />
                <Select 
                    className="movie-page__filters--third"
                    value={genreOptions.find(option => option.value === filtersData.selectedGenre) ??  null}
                    onChange={option => handleFilterChange('selectedGenre', option?.value ?? null)}
                    components={animatedComponents} 
                    options={genreOptions}
                    isClearable={true}
                />
                <div className="movie-page__filters--slider">
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
                </div>
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








