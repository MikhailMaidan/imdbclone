import './MoviePage.scss';
import Select from 'react-select';
import MediaCard from '@/components/MediaCard/MediaCard';
import makeAnimated from 'react-select/animated';
import ReactSlider from 'react-slider';
import { MoviesFilter } from '@/shared/composables/services/MoviesFilter.js';
import { useState, useEffect } from "react";
import { TVSHOW_REQUEST_DATA, MOVIE_TYPES } from '@/shared/composables/constants/constants';

const MoviePage = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [ratingRange, setRatingRange] = useState([0, 10]); 

    const animatedComponents = makeAnimated();

    const handleGenreChange = (option) => {
        setSelectedOption(option);
    };

    const handleRatingChange = (value) => {
        setRatingRange(value);
    };

    useEffect(() => {
        const { getMovies } = MoviesFilter();
        const fetchMovies = async () => {
            const requestData = {
                type: selectedOption?.value ?? MOVIE_TYPES.ALL,
                ratingFrom: ratingRange[0],
                ratingTo: ratingRange[1],
            };
            const data = await getMovies(requestData);
            setMoviesData(data);
        };
        fetchMovies();
    }, [selectedOption, ratingRange]);

    const genreOptions = [
        { value: MOVIE_TYPES.FILM, label: 'Film' },
        { value: MOVIE_TYPES.TV_SHOW, label: 'TV Show' },
        { value: MOVIE_TYPES.TV_SERIES, label: 'TV Series' },
        { value: MOVIE_TYPES.MINI_SERIES, label: 'Mini Series' },
        { value: MOVIE_TYPES.ALL, label: 'All' },
    ];

    return (
        <div className='movie-page'>
            <div className='movie-page__filters'>
                <Select 
                    className="movie-page__filters--first"
                    value={selectedOption}
                    onChange={handleGenreChange}
                    components={animatedComponents} 
                    options={genreOptions}
                    isClearable={true}
                />
                <div className="movie-page__filters--slider">
                    <label>Rating Range: {ratingRange[0]} - {ratingRange[1]}</label>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="thumb"
                        trackClassName="track"
                        min={0}
                        max={10}
                        value={ratingRange}
                        onChange={handleRatingChange}
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



