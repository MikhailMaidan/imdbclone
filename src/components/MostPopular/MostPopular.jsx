import React from 'react';
import './MostPopular.css'
import antMan from '@/assets/images/mostPopular/AntMan.png'
import bandHobi from "@/assets/images/mostPopular/BandHobi.png"
import ekti from "@/assets/images/mostPopular/Ekti.png"
import gangsta from "@/assets/images/mostPopular/gangsta.png"
import vandaVision from "@/assets/images/mostPopular/VandaVision.png"
import vijle from "@/assets/images/mostPopular/Vijle.png"
import shukhrani from "@/assets/images/mostPopular/Shukhrani.png"
import shadi from "@/assets/images/mostPopular/Shadi.png"
import arrow from '@/assets/images/Live_Show/arrow.png'



function MostPopular() {
    return (
        <div className="">
            <div className="most-popular">
                <div className="live-show-flex">
                    <div><span className="live-show-text">Most Popular</span></div>
                    <div>
                        <span className="see-all-text">See all</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className="most-popular-images">
                    <div><img src={vandaVision} alt="" /></div>
                    <div><img src={bandHobi} alt="" /></div>
                    <div><img src={ekti} alt="" /></div>
                    <div><img src={shadi} alt="" /></div>
                    <div><img src={shukhrani} alt="" /></div>
                    <div><img src={antMan} alt="" /></div>
                    <div><img src={vijle} alt="" /></div>
                    <div><img src={gangsta} alt="" /></div>
                </div>
            </div>
        </div>

    );
}

export default MostPopular