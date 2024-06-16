import { useState, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import './TVShow.scss'; 
import Arrow from '~/assets/images/icons/arrow.svg';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { TVSHOW_REQUEST_DATA } from '@/shared/composables/constants/constants';

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
            <div className="tvshow__assortment-list flex-centered">
     
            <Swiper
                spaceBetween={50}
                slidesPerView={3} 
                modules={[
                    Pagination, 
                    EffectFade 
                ]}
                pagination={{ clickable: true }}
                    breakpoints={{
                        1440: { 
                            slidesPerView: 3,
                            spaceBetween: 50,
                                            },
                        1024: { 
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },                    
                        768: { 
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                    }}
            >
                {tvShowsData.map((item) => (
                    <SwiperSlide className="tvshow__assortment-card" key={item.id}>
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

