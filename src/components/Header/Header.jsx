import './Header.scss';
import SearchBar from '@/components/Header/SearchBar/SearchBar';
import Home from '~/assets/images/header/home.svg';
import Movie from '~/assets/images/header/movie.svg';
import Series from '~/assets/images/header/series.svg';
import Drama from '~/assets/images/header/drama.svg';
import Comedies from '~/assets/images/header/comedies.svg';
import { Link } from 'react-router-dom';

const Icons = [
        {
            id: 0,
            title: 'Home',
            icon: Home,
             link: '/movies'
        },
        {
            id: 1,
            title: 'Movie',
            icon: Movie,
            link: '/movies'
        },
        {
            id: 3,
            title: 'Series',
            icon: Series,
            dropdownOptions: ['Series Online', 'New Series', 'Popular Series'],
             link: '/movies'
        },
        {
            id: 2,
            title: 'Drama',
            icon: Drama,
             link: '/movies'
        },
        {
            id: 5,
            title: 'Comedies',
            icon: Comedies,
             link: '/movies'
        },
    ];

export default function Header() {

    return (
        <header className="header">                
            <div className="header__logo">
                <Link to={`/`}>
                    <span className="text-gradient">CineWave</span>
                </Link>
            </div> 
            <div className="header__menu centered-flex">
                {Icons.map((item) => (
                    <div
                        className="header__menu-nav centered-flex"
                        key={item.id}
                    >
                         <Link to={`/movies`} className='swiper-card__link'>
                            <img src={item.icon} alt={item.title} className="header__menu-icon" />
                            <span className="header__menu-title">{item.title}</span>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="header__searching">
                <SearchBar />
            </div>
        </header>
    );
}







