import React from 'react';
import './MoviesForYou.css'
import avengers from '~/assets/images/Movies_for_you/avengers.png'
import bijle from '~/assets/images/Movies_for_you/Bijle.png'
import panther from '~/assets/images/Movies_for_you/panther.png'
import pashan from '~/assets/images/Movies_for_you/Pashan.png'
import premi from '~/assets/images/Movies_for_you/premi.png'
import arrow from '~/assets/images/Live_Show/arrow.png'



function MoviesForYou() {
    return (
        <div className="">
    <div className="most-popular">
        <div className="live-show-flex">
            <div><span className="live-show-text">Movies for You</span></div>
            <div>
                <span className="see-all-text">See all</span>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
        <div className="movies-for-you-images">
            <div><img src={avengers} alt="" /></div>
            <div><img src={panther} alt="" /></div>
            <div><img src={bijle} alt="" /></div>
            <div><img src={pashan} alt="" /></div>
            <div><img src={premi} alt="" /></div>
        </div>
    </div>
</div>


    );
}

export default MoviesForYou