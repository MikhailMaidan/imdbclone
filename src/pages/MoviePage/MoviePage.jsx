import './MoviePage.scss';
import MediaCard from '@/components/MediaCard/MediaCard';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { useState, useEffect } from "react";
import { TVSHOW_REQUEST_DATA } from '@/shared/composables/constants/constants';

const MoviePage = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
      const { getMovies } = MovieService();
      const fetchTVShows = async () => {
        const data = await getMovies(TVSHOW_REQUEST_DATA);
        setMoviesData(data);
      }
      fetchTVShows();
    }, []);


    return (
        <div className='movie-page-wrapper'>
            {moviesData.length > 0 ? (
                moviesData.map((movie, index) => 
                    <MediaCard movie={movie} key={index} />
                )
            ) : (
                <p>No movies found.</p>
            )}
        </div>
    )
};

export default MoviePage;