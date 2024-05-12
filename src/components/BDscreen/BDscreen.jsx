import './BDscreen.scss'
import '@/components/Header/Header.scss';

function DBscreen() {
    return (
    <section className="main-container bd-screen">
            <div className="bd-screen__welcome">
                <span className="bd-screen__welcome-text">Welcome to BD Screens</span>
            </div>
            <div className="bd-screen__download">
                <span className="bd-screen__download-text">Download Unlimited Movies, Drama, Music Video and More Content.</span>
            </div>
            <div className="bd-screen__enjoy">
                <span className="bd-screen__enjoy-text">Enjoy exclusive Music Video popular movies and Live shows. Subscribe 
                <strong> BD Screen </strong>now</span>
                </div>
            <div className="bd-screen__subscribe-form">
                <div className="bd-screen__subscribe-form-code-number centered-flex">
                    +885
                </div>
                <div className="bd-screen__subscribe-form-number centered-flex">
                    <input type="text" className="bd-screen__subscribe-form-number-input"/>
                </div>
                <div className="bd-screen__subscribe-form-subscribe-button centered-flex header-searching">
                    Subscribe
                </div>
            </div>
    </section>
    );
}

export default DBscreen