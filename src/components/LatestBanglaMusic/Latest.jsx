import React from 'react';
import './Latest.css'
import amar from '@/assets/bangla/amar.png'
import ami from '@/assets/bangla/ami.png'
import jhom from '@/assets/bangla/jhom.png'
import kisu from '@/assets/bangla/kisu.png'
import obinoy from '@/assets/bangla/obinoy.png'
import arrow from '@/assets/Live_Show/arrow.png'



function Bangla() {
    return (
        <div className="">
            <div className="most-popular">
                <div className="live-show-flex">
                    <div><span className="live-show-text">Latest Bangla Music</span></div>
                    <div>
                        <span className="see-all-text">See all</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className="movies-for-you-images">
                    <div><img src={kisu} alt="" /></div>
                    <div><img src={amar} alt="" /></div>
                    <div><img src={obinoy} alt="" /></div>
                    <div><img src={ami} alt="" /></div>
                    <div><img src={jhom} alt="" /></div>
                </div>
            </div>
        </div>



                );
        }

export default Bangla