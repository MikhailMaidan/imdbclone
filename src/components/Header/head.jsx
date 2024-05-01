import './Header_css.css'
import Logo from '@/assets/header/Logo.png'
import Home from "@/assets/header/Home.png"
import Movie from "@/assets/header/movie.png"
import Drama from "@/assets/header/drama.png"
import musicVideo from "@/assets/header/music.png"
import liveShow from "@/assets/header/live.png"
import comedies from "@/assets/header/comedies.png"
import searching from "@/assets/header/Searching.png"
import background from "@/assets/header/Background.png"


function Header() {
    return (
        <div className="background-image">
            <header className="header">
        
                <div className="logo">
                    <img src={Logo} alt='header-logo' />
                </div>

                <div className='menu'>
                    <div className="icons">
                        <img src={Home} alt="home" />
                        <span className="menu-text">Home</span>
                    </div>
                    <div className="icons">
                        <img src={Movie} alt="movie" />
                        <span className="menu-text">Movie</span>
                    </div>
                    <div className="icons">
                        <img src={Drama} alt="drama" />
                        <span className="menu-text">Drama</span>
                    </div>
                    <div className="icons">
                        <img src={musicVideo} alt="music videos" />
                        <span className="menu-text">Music Video</span>
                    </div>
                    <div className="icons">
                        <img src={liveShow} alt="live show" />
                        <span className="menu-text">Live Show</span>
                    </div>
                    <div className="icons">
                        <img src={comedies} alt="comedies" />
                        <span className="menu-text">Comedies</span>
                    </div>
                </div>
                                
                <div className='searching'>
                    <img src={searching} alt="searching" />
                    <div className='sign-up'>
                        Sign in
                    </div>
                </div>

            </header> 
            <div className="BDscreens">
                <div className="welcome"><span className="welcome-text">Welcome to BD Screens</span></div>
                <div className="download"><span className="download-text">Download Unlimited <br /> Movies, Drama, Music Video<br /> and More Content.</span></div>
                <div className="enjoy"><span className="enjoy-text">Enjoy exclusive Music Video popular movies and Live shows.<br /> Subscribe BD Screen now </span></div>
                <div className="telephone">
                    <div className="prompt ">+880</div>
                    <div className="input "><input type="tel" id="telephone" name="telephone" placeholder="Enter mobile number" /></div>
                    <div className="subscribe ">Subscribe</div>
                </div>
            </div>
        </div>
    );
}

export default Header