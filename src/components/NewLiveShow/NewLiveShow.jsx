import { useState, useLayoutEffect } from "react";
import './NewLiveShow.scss';
import { MovieService } from '@/shared/composables/services/MovieService.js';
import { MOVIE_REQUEST_DATA } from '@/shared/composables/constants/constants';
import SwiperElement from '@/components/Swiper/SwiperElement';
import CardHeading from '@/components/CardHeadings/CardHeading.jsx';

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
      <CardHeading 
        title="Movies"
        headerClass="liveshow__header"
        moreOptionsClass="liveshow__more-options"
        titleClass="liveshow__title"
      />
      <div>
        <SwiperElement items={moviesData} section="movies" />
      </div>
    </section>
  );
}



