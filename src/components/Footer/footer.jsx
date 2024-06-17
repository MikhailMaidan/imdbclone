import './Footer.scss'
import Logo from '~/assets/images/header/main-logo.png'

function Footer() {
    return (
        <div className="">
                    <div className="">
                <div className="line"><hr className="grey-line" /></div>
                    </div>
                <div className="black-background">
                    <footer>
                        <div className="footer">
                            <div><span className="footer-text">Feedback</span></div>
                            <div><span className="footer-text">Help</span></div>
                            <div><span className="footer-text">FAQ</span></div>
                            <div><img src={Logo} /></div>
                            <div><span className="footer-text">FOLLOW</span></div>
                        </div>
                        <div className="rights"><span className="rights-text">©2021 All rights reserved</span></div>
                    </footer>
                </div>
        </div>


    );
}

export default Footer