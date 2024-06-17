import { useState, useLayoutEffect } from "react";
import './MiniSeries.scss'; 
import Arrow from '~/assets/images/icons/arrow.svg';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { MINISERIES_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';

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
            <div>
                <SwiperElement items={miniSeriesData}  section="minisiries"/>
            </div>
        </section>
    );
}