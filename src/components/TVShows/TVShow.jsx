import { useState, useLayoutEffect } from "react";
import './TVShow.scss'; 
import Arrow from '~/assets/images/icons/arrow.svg';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { TVSHOW_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';

export default function NewTVShow() {
    const [tvShowsData, setTVShowsData] = useState([]);

    useLayoutEffect(() => {
        const { getMovies } = MovieService();
        const fetchTVShows = async () => {
            const data = await getMovies(TVSHOW_REQUEST_DATA);
            setTVShowsData(data);
        }
        fetchTVShows();
    }, []);

    return (
        <section className="tvshow">
            <div className="tvshow__header">
                <div className="tvshow__title">
                    <div><span className="tvshow__title-text">TV Shows</span></div>
                    <div className="tvshow__more-options flex-container">
                        <span className="full-assortment">See all</span>
                        <img src={Arrow} alt="arrow" className="tvshow__arrow-icon" />
                    </div>
                </div>
            </div>
            <div>
                <SwiperElement items={tvShowsData} section="tvshow"/>
            </div>
        </section>
    );
}

