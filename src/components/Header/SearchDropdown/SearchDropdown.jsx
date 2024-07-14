import './SearchDropdown.scss';
import { Link } from 'react-router-dom';

export default function SearchDropdown({ data }) {

    return (
        <div className="search-dropdown">
            <div className="search-dropdown-wrapper">
                {data.map((item) => (
                    <Link to={`/player/${item.id}`} key={item.id} className='"search-dropdown-wrapper__link' >
                        <div className="search-dropdown-wrapper__icon">
                            <img src={item.imageUrl} alt={item.name} />
                        </div>
                        <div className="search-dropdown__info">
                                <div><span className="search-dropdown-wrapper__info--text">{item.name}</span></div>
                                <div className="search-dropdown-wrapper__info--text">{item.rating}</div>
                                <div className="search-dropdown-wrapper__info--text">{item.genre}</div>
                                <div className="search-dropdown-wrapper__info--text">{item.year}</div>
                                <div className="search-dropdown-wrapper__info--text">{item.countries}</div>
                            </div>
                    </Link>
                ))
                }
            </div>
        </div>
    );
}



