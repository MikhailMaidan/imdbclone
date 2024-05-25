import React from 'react';
import './NewLiveShow.scss'
import Arrow from '@/assets/images/Live_Show/arrow.png'
import TheShow from "@/assets/images/Live_Show/The_show.png"
import Kpop from "@/assets/images/Live_Show/K_pop.png"
import Bangladesh from "@/assets/images/Live_Show/banglagesh.png"
import Kapil from "@/assets/images/Live_Show/kapil.png"
import Minions from "@/assets/images/Live_Show/minions.png"


const LiveShowImages = [
    {
        id: 0,
        title: 'TheShow',
        icon: TheShow,
        text: "The KPOP Live Show",
        currentOnline : "750 watching now",
        duration: "1h 38m"
    },
    {
        id: 1,
        title: 'Kpop',
        icon: Kpop,
        text: "The KPOP Live Show",
        currentOnline : "236 watching now",
        duration: "1h 23m"
    },
    {
        id: 2,
        title: 'Minions',
        icon: Minions,
        text: "Minions",
        currentOnline : "127 watching now",
        duration: "1h 56m"
    },
    {
        id: 3,
        title: 'Kapil',
        icon: Kapil,
        text: "Kapil Sharma Show",
        currentOnline : "59 watching now",
        duration: "2h 19m"
    },
    {
        id: 4,
        title: 'Bangladesh',
        icon: Bangladesh,
        text: "Go Explore Bangladesh",
        currentOnline : "24 watching now",
        duration: "1h 49m"
    },
]


export default function NewLiveShow() {
    return (
        <section className="liveshow">
            <div className="liveshow__title flex-centered">
                <div><span className="liveshow__title-text">Live Show</span></div>
                <div className="liveshow__title flex-container">
                    <span className="liveshow__title full-assortment">See all</span>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>
            <div className="liveshow__assortment flex-centered">
                {LiveShowImages.map(item => (
                    <div className="liveshow__assortment description" key={item.id}>
                        <div className="icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="info">
                            <div><span className="info__live-text">{item.text}</span></div>
                            <div className="info__current-data">{item.currentOnline}</div>
                            <div className="info__current-data">{item.duration}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}



// export default function NewLiveShow() {
//     return (
//         <section className="liveshow">      

//             <div className="liveshow__title flex-centered">
//                     <div><span className="liveshow__title-text">Live Show</span></div>
//                     <div className="liveshow__title flex-container">
//                         <span className=" liveshow__title full-assortment">See all</span>
//                         <img src={Arrow} alt="arrow" />
//                     </div>
//             </div>

//             <div className="liveshow__assortment flex-centered">

//                 {LiveShowImages.map(item => (
//                     <div className="liveshow__assortment description">
//                         <div className="icon" key={item.id}>
//                             <img src={item.icon}  alt="{item.title}" />
//                         </div>  

//                         <div className="info">
//                                 <div><span className="info__live-text" key={item.id}>{item.text}</span></div>
//                                 <div className="info__current-data" key={item.id}>{item.currentOnline}</div>
//                                 <div className="info__current-data" key={item.id}>{item.duration}</div>
                                
//                         </div>
//                     </div>  
//                 ))}

                 

//             </div>
            
            
            
           
                

        
//         </section>
//     );
// } 




{/* <div className="liveshow__assortment ">
            {LiveShowImages.map(item => (
                        <div className="header__menu-nav centered-flex" key={item.id}>
                            <img src={item.icon} alt="movie" className='header__menu-icon'/>
                        <span className="header__menu-title">{item.text}</span>
                    </div>
                    ))}
            </div> */}


{/* <div className="show-description-live">
                        <div className="k-pop"><img src={TheShow} alt="show" /></div>
                        <div className="info">
                            <div><span className="k-pop-live-text">The K- POP Live Show</span></div>
                            <div className="watching-now">750 watching now</div>
                            <div className="header-searching__sign-up-button">Live Now</div>
                        </div>
                        </div>

                        <div className="show-description-live">
                        <div className="k-pop"><img src={Kpop} alt="k-pop" />
                        </div>
                        <div className="info">
                            <div><span className="k-pop-live-text">The K- POP Live Show</span></div>
                            <div className="watching-now">750 watching now</div>
                            <div className="header-searching__sign-up-button">Live Now</div>
                        </div>
                        </div>  */}