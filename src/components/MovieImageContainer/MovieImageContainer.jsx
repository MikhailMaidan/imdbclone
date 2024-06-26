import posterImagePng from '~/assets/images/poster-image/poster-image.png';
import posterImageWebp from '~/assets/images/poster-image/poster-image.webp';
import '@/components/MovieImageContainer/MovieImageContainer.scss';

export default function  MovieImageContainer({ header, poster }) {
  return (
    <div className="image-container">
        <div className="image-container__image">
            <picture>
                <source
                    srcSet={posterImageWebp}
                    type="image/webp"
                />
                <img
                    loading="lazy"
                    src={posterImagePng}
                    className='image-container-poster-image'
                    alt="poster-image"
                />
            </picture>
        </div>
        <div className="image-container__components">
            <header>{header}</header>
            <poster>{poster}</poster>
        </div>
    </div>
  );
}