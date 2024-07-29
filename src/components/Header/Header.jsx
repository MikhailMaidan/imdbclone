// React Component (Header.jsx)
import { useState } from 'react';
import './Header.scss';
import SearchBar from '@/components/Header/SearchBar/SearchBar';
import Home from '~/assets/images/header/home.svg';
import Movie from '~/assets/images/header/movie.svg';
import Series from '~/assets/images/header/series.svg';
import Drama from '~/assets/images/header/drama.svg';
import Comedies from '~/assets/images/header/comedies.svg';
import DropDownMenu from '@/components/Header/DropDownMenu/DropDownMenu';

const Icons = [
        {
            id: 0,
            title: 'Home',
            icon: Home,
        },
        {
            id: 1,
            title: 'Movie',
            icon: Movie,
            dropdownOptions: ['Movies Online', 'New Movies', 'Popular Movies'],
            nestedDropdownOptions: {
                0: ['Anime', 'Horror', 'Western', 'Biography', 'Fantasy'],
                1: ['Movies of 2022', 'Movies of 2023', 'Movies of 2024'],
                2: ['Rating > 7', 'Rating > 8', 'Rating > 9'],
            },
            nestedSubOptions: {
                1: {
                    0: ['Action', 'Drama', 'Comedy'],
                    1: ['Adventure', 'Sci-Fi', 'Romance'],
                    2: ['Thriller', 'Horror', 'Mystery'],
                },
                2: {
                    0: ['Action', 'Drama', 'Comedy'],
                    1: ['Adventure', 'Sci-Fi', 'Romance'],
                    2: ['Thriller', 'Horror', 'Mystery'],
                },
            },
        },
        {
            id: 3,
            title: 'Series',
            icon: Series,
            dropdownOptions: ['Series Online', 'New Series', 'Popular Series'],
        },
        {
            id: 2,
            title: 'Drama',
            icon: Drama,
        },
        {
            id: 5,
            title: 'Comedies',
            icon: Comedies,
        },
    ];

export default function Header() {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleMouseEnter = (id) => {
        setActiveDropdown(id);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <header className="header">                
            <div className="header__logo">
                <span className="text-gradient">CineWave</span>
                    {/* <picture>
                        <source srcSet={streamFlowLogo} type="image/webp" />
                        <img loading="lazy" src={streamFlowLogo} alt="poster-image" />
                     </picture>  */}
            </div> 
            <div className="header__menu centered-flex">
                {Icons.map((item) => (
                    <div
                        className="header__menu-nav centered-flex"
                        key={item.id}
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img src={item.icon} alt={item.title} className="header__menu-icon" />
                        <span className="header__menu-title">{item.title}</span>
                        {item.dropdownOptions && activeDropdown === item.id && (
                            <DropDownMenu
                                options={item.dropdownOptions}
                                nestedOptions={item.nestedDropdownOptions}
                                nestedSubOptions={item.nestedSubOptions}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="header__searching">
                <SearchBar />
            </div>
        </header>
    );
}






