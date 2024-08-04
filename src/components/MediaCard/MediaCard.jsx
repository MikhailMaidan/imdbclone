import './MediaCard.scss';
import { Link } from 'react-router-dom';

const MediaCard = ({ movie }) => {
    return (
        <div className='media-card-wrapper'>
            <Link
                to={`/player/${movie.id}`}
                key={movie.id}
                className="media-card-wrapper__link"
            >
                <div className="media-card-wrapper__icon">
                <img src={movie.imageUrl} alt={movie.name} />
                </div>
                <div className="search-dropdown__info">
                <div>
                    <span className="media-card-wrapper__info--text">{movie.name}</span>
                </div>
                <div className="media-card-wrapper__info--text">{movie.rating}</div>
                <div className="media-card-wrapper__info--text">{movie.genre}</div>
                <div className="media-card-wrapper__info--text">{movie.year}</div>
                <div className="media-card-wrapper__info--text">{movie.countries}</div>
                </div>
            </Link>
        </div>
    )
};

export default MediaCard;