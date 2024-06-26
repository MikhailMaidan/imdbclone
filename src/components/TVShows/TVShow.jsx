import { useState, useLayoutEffect } from "react";
import './TVShow.scss'; 
import Arrow from '~/assets/images/icons/arrow.svg';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { TVSHOW_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';
import CardHeading from  '@/components/CardHeadings/CardHeading.jsx'

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
           
            <CardHeading />
           
            <div>
                <SwiperElement items={tvShowsData} section="tvshow"/>
            </div>
        </section>
    );
}

