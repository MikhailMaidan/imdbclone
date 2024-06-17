import { useState, useLayoutEffect } from "react";
import './NewLiveShow.scss'
import Arrow from '~/assets/images/icons/arrow.svg'
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { MOVIE_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';

export default function NewLiveShow() {
    const [moviesData, setMoviesData] = useState([]);

    useLayoutEffect(() => {
        const { getMovies } = MovieService();
        const fetchMovies = async () => {
            const data = await getMovies(MOVIE_REQUEST_DATA);
            setMoviesData(data);
        }
        fetchMovies();
    }, []);

    return (
        <section className="liveshow">
            <div className="liveshow__header">
                <div className="liveshow__title">
                    <div><span className="liveshow__title-text">Movies</span></div>
                    <div className="liveshow__more-options flex-container">
                        <span className="full-assortment">See all</span>
                        <img src={Arrow} alt="arrow" className="liveshow__arrow-icon" />
                    </div>
                </div>
            </div>
            <div>
                <SwiperElement items={moviesData}  section="movies"/>
            </div>
        </section>
    );
}