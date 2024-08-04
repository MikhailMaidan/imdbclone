import './MoviePage.scss';
import Select from 'react-select'
import MediaCard from '@/components/MediaCard/MediaCard';
import makeAnimated from 'react-select/animated';
import { MoviesFilter } from '@/shared/composables/services/MoviesFilter.js';
import { useState, useEffect } from "react";
import { TVSHOW_REQUEST_DATA, MOVIE_TYPES } from '@/shared/composables/constants/constants';

const MoviePage = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);

    const animatedComponents = makeAnimated();

    const handleChange = (option) => {
        setSelectedOption(option);
      };

    useEffect(() => {
      const { getMovies } = MoviesFilter();
      const fetchTVShows = async () => {
        const data = await getMovies(TVSHOW_REQUEST_DATA);
        setMoviesData(data);
      }
      fetchTVShows();
    }, []);

    useEffect(() => {
        const { getMovies } = MoviesFilter();
       
        const fetchTVShows = async () => {
            const requestData = {
                type: selectedOption?.value ?? MOVIE_TYPES.ALL,
            }
            const data = await getMovies(requestData);
            setMoviesData(data);
        }
        fetchTVShows();
      }, [selectedOption]);

    const options = [
        { value: MOVIE_TYPES.FILM, label: 'Film' },
        { value: MOVIE_TYPES.TV_SHOW, label: 'Tv Show' },
        { value: MOVIE_TYPES.TV_SERIES, label: 'Tv Series' },
        { value: MOVIE_TYPES.MINI_SERIES, label: 'Mini Series' },
        { value: MOVIE_TYPES.ALL, label: 'All' },
      ];

    return (
        <div className='movie-page'>
            <div  className='movie-page__filters'>
                <Select 
                    className="movie-page__filters--first"
                    value={selectedOption}
                    onChange={handleChange}
                    components={animatedComponents} 
                    options={options}
                    isClearable={true}
                />
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
    )
};

export default MoviePage;