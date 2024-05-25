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
    {
        id: 5,
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
            <div className="liveshow__header">
                <div className="liveshow__title flex-centered">
                    <div><span className="liveshow__title-text">Live Show</span></div>
                    <div className="liveshow__more-options flex-container">
                        <span className="full-assortment">See all</span>
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
            </div>
            <div className="liveshow__assortment-list flex-centered">
                {LiveShowImages.map(item => (
                    <div className="liveshow__assortment-card" key={item.id}>
                        <div className="assortment-card__icon">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="assortment-card__info">
                            <div><span className="assortment-card__info-title">{item.text}</span></div>
                            <div className="assortment-card__info-watches">{item.currentOnline}</div>
                            <div className="assortment-card__info-duration">{item.duration}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}