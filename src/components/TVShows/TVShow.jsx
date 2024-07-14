import { useState, useLayoutEffect } from "react";
import './TVShow.scss'; 
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { TVSHOW_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';
import CardHeading from  '@/components/CardHeadings/CardHeading.jsx';
import { SECTIONS } from '@/shared/composables/constants/constants';

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
      <CardHeading 
        title="TV Shows"
        headerClass="tvshow__header"
        arrowClass="tvshow__arrow-icon"
        moreOptionsClass="tvshow__more-options"
        titleClass="tvshow__title"
      />
      <div>
        <SwiperElement items={tvShowsData} section={SECTIONS.tvshow} />
      </div>
    </section>
  );
}





