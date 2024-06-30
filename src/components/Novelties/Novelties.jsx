import { useState, useLayoutEffect } from "react";
import './Novelties.scss'; 
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { NOVELTIES_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';
import CardHeading from  '@/components/CardHeadings/CardHeading.jsx'

export default function Novelties() {
    const [noveltiesData, setNoveltiesData] = useState([]);

    useLayoutEffect(() => {
        const { getMovies } = MovieService();
        const fetchNovelties = async () => {
            const data = await getMovies(NOVELTIES_REQUEST_DATA);
            setNoveltiesData(data);
        }
        fetchNovelties();
    }, []);

    return (
        <section className="novelties-show">
            <div>
                <CardHeading />
            </div>

            <div>
                <SwiperElement items={noveltiesData}  section="novelties"/>
            </div>
        </section>
    );
} 