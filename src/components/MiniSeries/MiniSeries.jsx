import { useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import './MiniSeries.scss'; 
import Arrow from '~/assets/images/icons/arrow.svg';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { MINISERIES_REQUEST_DATA } from '@/shared/composables/constants/constants';

export default function MiniSeries() {
    const [miniSeriesData, setMiniSeriesData] = useState([]);

    useLayoutEffect(() => {
        const { getMovies } = MovieService();
        const fetchMiniSeries = async () => {
            const data = await getMovies(MINISERIES_REQUEST_DATA);
            setMiniSeriesData(data);
        }
        fetchMiniSeries();
    }, []);

    return (
        <section className="minishow">
            <div className="minishow__header">
                <div className="minishow__title">
                    <div><span className="minishow__title-text">Mini Series</span></div>
                    <div className="minishow__more-options flex-container">
                        <span className="full-assortment">See all</span>
                        <img src={Arrow} alt="arrow" className="minishow__arrow-icon" />
                    </div>
                </div>
            </div>
            <div className="minishow__assortment-list flex-centered">
     
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                modules={[
                    Pagination,
                    EffectFade
                ]}
                pagination={{ clickable: true }}
            >
                {miniSeriesData.map((item) => (
                    <SwiperSlide className="minishow__assortment-card" key={item.id}>
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