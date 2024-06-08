import './Header.scss'
import LogoPng from '@/assets/images/header/main-logo.png'
import Home from "@/assets/images/header/home.svg"
import Movie from "@/assets/images/header/movie.svg"
import Series from "@/assets/images/header/series.svg"
import Drama from "@/assets/images/header/drama.svg"
import Comedies from "@/assets/images/header/comedies.svg"
import streamFlowLogo from "@/assets/images/header/logo-streamflow.png"

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
    },
    {
        id: 3,
        title: 'Series',
        icon: Series,
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
]

export default function Header() {
    return (
        <div>
            <header className='header'>
                <div className="header__logo">
                    <picture>
                        <source
                            srcSet={streamFlowLogo}
                            type="image/webp"
                        />
                        <img
                            loading="lazy"
                            src={LogoPng}
                            alt="poster-image"
                        />
                    </picture>
                </div>
                <div className='header__menu centered-flex'>
                    {Icons.map(item => (
                        <div className="header__menu-nav centered-flex" key={item.id}>
                            <img src={item.icon} alt="movie" className='header__menu-icon'/>
                        <span className="header__menu-title">{item.title}</span>
                    </div>
                    ))}
                </div>
                <div className='header__searching  centered-flex'>
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.046 1.96484C9.91407 1.96701 11.705 2.72845 13.0259 4.08209C14.3469 5.43574 15.0899 7.27106 15.092 9.18541C15.0939 10.8705 14.5181 12.5027 13.465 13.7969L16.809 17.2237C16.931 17.3488 16.9995 17.5183 16.9995 17.6951C16.9995 17.8719 16.931 18.0415 16.809 18.1665C16.687 18.2916 16.5215 18.3618 16.349 18.3618C16.1765 18.3618 16.011 18.2916 15.889 18.1665L12.545 14.7387C11.2824 15.8176 9.69 16.4077 8.046 16.406C6.17793 16.4038 4.38699 15.6424 3.06606 14.2887C1.74514 12.9351 1.00212 11.0998 1 9.18541C1.00212 7.27106 1.74514 5.43574 3.06606 4.08209C4.38699 2.72845 6.17793 1.96701 8.046 1.96484ZM8.046 3.29705C6.52273 3.29895 5.06239 3.91997 3.98536 5.02387C2.90834 6.12777 2.30259 7.6244 2.301 9.18541C2.30285 10.7462 2.90872 12.2426 3.98572 13.3463C5.06271 14.45 6.5229 15.0708 8.046 15.0727C9.5691 15.0708 11.0293 14.45 12.1063 13.3463C13.1833 12.2426 13.7891 10.7462 13.791 9.18541C13.7891 7.62457 13.1833 6.12821 12.1063 5.02453C11.0293 3.92085 9.5691 3.29997 8.046 3.29808V3.29705Z" fill="white" stroke="white" strokeWidth="0.5"/>
                    </svg>
                </div>
            </header> 
        </div>
    );
}