import React from 'react';
import './NewMostPopular.scss'
import AntMan from '~/assets/images/mostPopular/AntMan.png'
import BandHobi from "~/assets/images/mostPopular/BandHobi.png"
import Ekti from "~/assets/images/mostPopular/Ekti.png"
import Gangsta from "~/assets/images/mostPopular/gangsta.png"
import VandaVision from "~/assets/images/mostPopular/VandaVision.png"
import Vijle from "~/assets/images/mostPopular/Vijle.png"
import Shukhrani from "~/assets/images/mostPopular/Shukhrani.png"
import Shadi from "~/assets/images/mostPopular/Shadi.png"
import Arrow from '~/assets/images/Live_Show/arrow.png'



const MostPopularImages = [
    {
        id: 0,
        title: 'VandaVision',
        icon: VandaVision,
        text: "VandaVision",
    },
    {
        id: 1,
        title: 'BandHobi',
        icon: BandHobi,
        text: "BandHobi",

    },
    {
        id: 2,
        title: 'Ekti',
        icon: Ekti,
        text: "Ekti",

    },
    {
        id: 3,
        title: 'Shadi',
        icon: Shadi,
        text: "Shadi",

    },
    {
        id: 4,
        title: 'Shukhrani',
        icon: Shukhrani,
        text: "Shukhrani",
    },
    {
        id: 5,
        title: 'AntMan',
        icon: AntMan,
        text: "AntMan",
    },
    {
        id: 6,
        title: 'Vijle',
        icon: Vijle,
        text: "Vijle",
    },
    {
        id: 7,
        title: 'Gangsta',
        icon: Gangsta,
        text: "Gangsta",
    },
]


export default function NewMostPopular() {
    return (
        <section className="liveshow">
            <div className="liveshow__title flex-centered">
                <div><span className="liveshow__title-text">Most Popular</span></div>
                <div className="liveshow__title flex-container">
                    <span className="see-all-text">See all</span>
                    <img src={Arrow} alt="arrow" />
                </div>
            </div>

            <div className="most-popular-images">
                {MostPopularImages.map(item => (
                    <div className="liveshow__assortment description" key={item.id}>
                        <div className="icon">
                            <img className="responsive-image" src={item.icon} alt={item.title} />
                        </div>
                        <div className="info">
                            <div className="info__live-text">{item.title}</div>
                            <div className="info__current-data">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}





// export default function NewMostPopular() {
//     return (
//         <section className="liveshow">      

//             <div className="liveshow__title flex-centered">
//                     <div><span className="liveshow__title-text">Most Popular</span></div>
//                     <div className="liveshow__title flex-container">
//                         <span className="see-all-text">See all</span>
//                         <img src={Arrow} alt="arrow" />
//                     </div>
//             </div>

//             <div className="most-popular-images ">

//                 {MostPopularImages.map(item => (
//                     <div className="liveshow__assortment description ">
//                         <div className="" key={item.id}>
//                             <img class="responsive-image" src={item.icon}  alt="{item.title}" />
//                         </div>  


//                     </div>  
//                 ))}

//             </div>
            
//         </section>
//     );
// } 