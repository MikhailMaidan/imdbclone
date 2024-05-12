import React from 'react';
import './BDscreen.css'


function DBscreen() {
    return (
    <section className="BDscreens">
            <div className="welcome"><span className="welcome-text">Welcome to BD Screens</span></div>
            <div className="download"><span className="download-text">Download Unlimited <br /> Movies, Drama, Music Video<br /> and More Content.</span></div>
            <div className="enjoy"><span className="enjoy-text">Enjoy exclusive Music Video popular movies and Live shows.<br /> Subscribe BD Screen now </span></div>
            <div className="telephone">
                <div className="prompt ">+880</div>
                <div className="input "><input type="tel" id="telephone" name="telephone" placeholder="Enter mobile number" /></div>
                <div className="subscribe "><span className="header-searching__sign-up-button">Subscribe</span></div>
            </div>
    </section>
    );
}

export default DBscreen