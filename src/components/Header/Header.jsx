import './Header.scss'
import Logo from '@/assets/header/Logo.png'
import Home from "@/assets/header/Home.png"
import Movie from "@/assets/header/movie.png"
import Drama from "@/assets/header/drama.png"
import musicVideo from "@/assets/header/music.png"
import liveShow from "@/assets/header/live.png"
import comedies from "@/assets/header/comedies.png"
import searching from "@/assets/header/Searching.png"

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
        id: 2,
        title: 'Drama',
        icon: Drama,
    },
    {
        id: 3,
        title: 'Music Video',
        icon: musicVideo,
    },
    {
        id: 4,
        title: 'Live Show',
        icon: liveShow,
    },
    {
        id: 5,
        title: 'Comedies',
        icon: comedies,
    },
]

export default function Header() {
    return (
        <div>
            <header className='centered-flex-between  main-container'>
                <div className="header-navigation centered-flex-between">
                    <div className="header-navigation__logo">
                        <img src={Logo} alt='header-logo' />
                    </div>
                    <div className='header-navigation__menu centered-flex'>
                        {Icons.map(item => (
                            <div className="header-navigation__nav centered-flex" key={item.id}>
                                <img src={item.icon} alt="movie" className='header-navigation__icon'/>
                            <span className="header-navigation__title">{item.title}</span>
                        </div>
                        ))}
                    </div>
                </div>           
                <div className='header-searching  centered-flex'>
                    <img src={searching} alt="searching" className='header-searching__icon'/>
                    <div className='header-searching__sign-up-button'>
                        Sign in
                    </div>
                </div>
            </header> 
        </div>
    );
}