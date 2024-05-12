import React from 'react';
import './LiveShow.css'
import arrow from '@/assets/images/Live_Show/arrow.png'
import theShow from "@/assets/images/Live_Show/The_show.png"
import kPop from "@/assets/images/Live_Show/K_pop.png"
import bangladesh from "@/assets/images/Live_Show/banglagesh.png"
import kapil from "@/assets/images/Live_Show/kapil.png"
import minions from "@/assets/images/Live_Show/minions.png"



function LiveShow() {
    return (
    //     <div className='live-show'>
    //     <div className='live-show-columns'>
    //         <div className='live-show-note'>Live Show</div>
    //         <div></div>
    //     </div>
    //  </div>
    <div className="">    
    <div>
        <section className="live-show">
            <div className="live-show-flex">
                <div><span className="live-show-text">Live Show</span></div>
                <div>
                    <span className="see-all-text">See all</span>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <div className="asortment">
                <div className="show-description-live">
                    <div className="k-pop"><img src={theShow} alt="show" /></div>
                    <div className="info">
                        <div><span className="k-pop-live-text">The K- POP Live Show</span></div>
                        <div className="watching-now">750 watching now</div>
                        <div className="header-searching__sign-up-button">Live Now</div>
                    </div>
                </div>

                <div className="show-description-live">
                    <div className="k-pop"><img src={kPop} alt="k-pop" /></div>
                    <div className="info">
                        <div><span className="k-pop-live-text">The K- POP Live Show</span></div>
                        <div className="watching-now">750 watching now</div>
                        <div className="header-searching__sign-up-button">Live Now</div>
                    </div>
                </div>

                <div className="show-description-live">
                    <div><img src={minions} alt="minions" /></div>
                    <div className="info">
                        <div><span className="k-pop-live-text">Minions Official</span></div>
                        <div className="watching-now">1h 14m</div>
                        <div></div>
                    </div>
                </div>

                <div className="show-description-live">
                    <div><img src={kapil} alt="kapil" /></div>
                    <div className="info">
                        <div><span className="k-pop-live-text">Kapil Sharma Show</span></div>
                        <div className="watching-now">1h 9m</div>
                        <div></div>
                    </div>
                </div>

                <div className="show-description-live">
                    <div><img src={bangladesh} alt="bangladesh" /></div>
                    <div className="info">
                        <div><span className="k-pop-live-text">Go Explore Movie</span></div>
                        <div className="watching-now">2h 22m</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div> 

        
    
    );
}

export default LiveShow


/* <div className="black-background">    
        <div>
            <section className="live-show">
                <div className="live-show-flex">
                    <div><span className="live-show-text">Live Show</span></div>
                    <div>
                        <span className="see-all-text">See all</span>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <div className="asortment">
                    <div className="show-description-live">
                        <div className="k-pop"><img src={theShow} alt="show" /></div>
                        <div className="info">
                            <div><span className="k-pop-live-text">The K- POP Live Show</span></div>
                            <div className="watching-now">750 watching now</div>
                            <div className="live-now">Live Now</div>
                        </div>
                    </div>
    
                    <div className="show-description-live">
                        <div className="k-pop"><img src={kPop} alt="k-pop" /></div>
                        <div className="info">
                            <div><span className="k-pop-live-text">The K- POP Live Show</span></div>
                            <div className="watching-now">750 watching now</div>
                            <div className="live-now">Live Now</div>
                        </div>
                    </div>
    
                    <div className="show-description-live">
                        <div><img src={minions} alt="minions" /></div>
                        <div className="info">
                            <div><span className="k-pop-live-text">Minions Official</span></div>
                            <div className="watching-now">1h 14m</div>
                            <div></div>
                        </div>
                    </div>
    
                    <div className="show-description-live">
                        <div><img src={kapil} alt="kapil" /></div>
                        <div className="info">
                            <div><span className="k-pop-live-text">Kapil Sharma Show</span></div>
                            <div className="watching-now">1h 9m</div>
                            <div></div>
                        </div>
                    </div>
    
                    <div className="show-description-live">
                        <div><img src={bangladesh} alt="bangladesh" /></div>
                        <div className="info">
                            <div><span className="k-pop-live-text">Go Explore Movie</span></div>
                            <div className="watching-now">2h 22m</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div> */