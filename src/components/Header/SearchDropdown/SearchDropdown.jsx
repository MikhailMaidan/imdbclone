
import { useEffect, useState } from 'react';
import './SearchDropdown.scss';
import { Link } from 'react-router-dom';

export default function SearchDropdown({ data, isLoading, clearInput }) {
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    let timer;
    if (isLoading) {
      timer = setTimeout(() => {
        if (data.length === 0) {
          setNoResults(true);
        }
      }, 7000); 
    } else {
      setNoResults(false);
    }

    return () => clearTimeout(timer);
  }, [isLoading, data]);

  return (
    <div className="search-dropdown">
      <div className="search-dropdown-wrapper">
        {isLoading && !noResults && (
          <div className="search-dropdown__loader">
            <span>Loading</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
        )}
        {noResults && (
          <div className="search-dropdown__no-results-container">
            <div className="search-dropdown__no-results">No results</div>
          </div>
        )}
        {!isLoading && !noResults && data.length > 0 && data.map((item) => (
          <Link
            to={`/player/${item.id}`}
            key={item.id}
            className="search-dropdown-wrapper__link"
            onClick={clearInput}
          >
            <div className="search-dropdown-wrapper__icon">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <div className="search-dropdown__info">
              <div>
                <span className="search-dropdown-wrapper__info--text">{item.name}</span>
              </div>
              <div className="search-dropdown-wrapper__info--text">{item.rating}</div>
              <div className="search-dropdown-wrapper__info--text">{item.genre}</div>
              <div className="search-dropdown-wrapper__info--text">{item.year}</div>
              <div className="search-dropdown-wrapper__info--text">{item.countries}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}










