import { useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import './NewLiveShow.scss'
import Arrow from '~/assets/images/icons/arrow.svg'
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { MOVIE_REQUEST_DATA } from '@/shared/composables/constants/constants';

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
            <div className="liveshow__assortment-list flex-centered">
     
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[
                    Pagination, 
                    EffectFade 
                ]}
                pagination={{ clickable: true }}
            >
                {moviesData.map((item) => (
                    <SwiperSlide className="liveshow__assortment-card" key={item.id}>
                        <div className="assortment-card__icon">
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="assortment-card__info">
                            <div><span className="assortment-card__info-title">{item.name}</span></div>
                            <div className="assortment-card__info-watches">{item.rating}</div>
                            <div className="assortment-card__info-duration">{item.genre}</div>
                            <div className="assortment-card__info-year">{item.year}</div>
                            <div className="assortment-card__info-countries">{item.countries}</div>
                        </div>
                    </SwiperSlide>
                    ))
                }
            </Swiper>

            </div>
        </section>
    );
}