import { useState, useLayoutEffect } from "react";
import './MiniSeries.scss'; 
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { MINISERIES_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';
import CardHeading from '@/components/CardHeadings/CardHeading.jsx';
import { SECTIONS } from '@/shared/composables/constants/constants';

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
    <section className="miniseries">
      <CardHeading 
        title="Mini Series"
        headerClass="miniseries__header"
        moreOptionsClass="miniseries__more-options"
        titleClass="miniseries__title"
      />
      <div>
        <SwiperElement items={miniSeriesData} section={SECTIONS.miniSiries} />
      </div>
    </section>
  );
}



