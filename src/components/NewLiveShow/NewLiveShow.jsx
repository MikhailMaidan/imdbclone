import React from 'react';
import './NewLiveShow.scss'
import Arrow from '@/assets/images/Live_Show/arrow.png'
import TheShow from "@/assets/images/Live_Show/The_show.png"
import Kpop from "@/assets/images/Live_Show/K_pop.png"
import Bangladesh from "@/assets/images/Live_Show/banglagesh.png"
import Kapil from "@/assets/images/Live_Show/kapil.png"
import Minions from "@/assets/images/Live_Show/minions.png"
import {BaseFetcher} from "@/composables/fetcher/BaseFetcher.js"





let LiveShowImages;

async function getMovies() {

    const baseFetcher = new BaseFetcher("/api/v2.2/films")
    const data = await baseFetcher.getData();
    const films = data.slice(0,9);
    console.log(films)
    LiveShowImages = films.map((movie) => {
        const genresArray = movie.genres.map((item)=>item.genre)
        return {
            id: movie.kinopoiskId || movie.imdbId,
            name:  movie.nameRu || movie.nameOriginal,
            imageUrl: movie.posterUrlPreview,
            rating: `Rating from the Kinopoisk: ${movie.ratingKinopoisk}`,
            genre: `Genres: ${genresArray.join(", ")}`
        }
    })
}

await getMovies();

export default function NewLiveShow() {
    return (
        <section className="liveshow">
            <div className="liveshow__header">
                <div className="liveshow__title">
                    <div><span className="liveshow__title-text">Live Show</span></div>
                    <div className="liveshow__more-options flex-container">
                        <span className="full-assortment">See all</span>
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="liveshow__assortment-list flex-centered">
                {LiveShowImages.map(item => (
                    <div className="liveshow__assortment-card" key={item.id}>
                        <div className="assortment-card__icon">
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="assortment-card__info">
                            <div><span className="assortment-card__info-title">{item.name}</span></div>
                            <div className="assortment-card__info-watches">{item.rating}</div>
                            <div className="assortment-card__info-duration">{item.genre}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}