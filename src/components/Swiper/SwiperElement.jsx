import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import '@/components/Swiper/SwiperElement.scss';
import { SLIDER_ADAPTIVE_SETTINGS, SECTIONS } from '@/shared/composables/constants/constants';
import { Link } from 'react-router-dom';


export default function SwiperElement({ items, section }) {

    const formedClassName = () => {
        switch (section) {
            case SECTIONS.movies:
                return `swiper-card`;
            case SECTIONS.tvshow:
                return `swiper-card tv-show-background`;
            case SECTIONS.miniSiries:
                return `swiper-card mini-siries-background`
        }
    }

    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3} 
            modules={[
                Pagination, 
                EffectFade 
            ]}
            pagination={{ clickable: true }}
                breakpoints={SLIDER_ADAPTIVE_SETTINGS}  
        >
            {items.map((item) => (
                    <SwiperSlide className={formedClassName()} key={item.id} >
                         <Link to={`/player/${item.id}`} className='swiper-card__link'>
                            <div className="swiper-card__icon">
                                <img src={item.imageUrl} alt={item.name} />
                            </div>
                            <div className="swiper-card__info">
                                <div><span className="swiper-card__info-title">{item.name}</span></div>
                                <div className="swiper-card__info-watches">{item.rating}</div>
                                <div className="swiper-card__info-duration">{item.genre}</div>
                                <div className="swiper-card__info-year">{item.year}</div>
                                <div className="swiper-card__info-countries">{item.countries}</div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))   
            }
        </Swiper>
    );
}

