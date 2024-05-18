import './BDscreen.scss'
import '@/components/Header/Header.scss';

function DBscreen() {
    return (
    <section className="bd-screen">
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
    </section>
    );
}

export default DBscreen