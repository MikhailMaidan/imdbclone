import React from 'react';
import './NewMoviesForYou.scss'
import Avengers from '@/assets/images/Movies_for_you/avengers.png'
import Bujle from '@/assets/images/Movies_for_you/Bijle.png'
import Panther from '@/assets/images/Movies_for_you/panther.png'
import Pashan from '@/assets/images/Movies_for_you/Pashan.png'
import Premi from '@/assets/images/Movies_for_you/premi.png'
import Arrow from '@/assets/images/Live_Show/arrow.png'


const MostPopularImages = [
    {
        id: 0,
        title: 'Avengers',
        icon: Avengers,
        text: "Avengers",
    },
    {
        id: 1,
        title: 'Panther',
        icon: Panther,
        text: "Panther",

    },
    {
        id: 2,
        title: 'Bujle',
        icon: Bujle,
        text: "Bujle",

    },
    {
        id: 3,
        title: 'Pashan',
        icon: Pashan,
        text: "Pashan",

    },
    // {
    //     id: 3,
    //     title: 'Premi',
    //     icon: Premi,
    //     text: "Premi",

    // },

  
]

function NewMoviesForYou() {
    return (
        <section className="liveshow">      
        <div className="liveshow__title flex-centered">
                <div><span className="liveshow__title-text">Movies For You</span></div>
                <div className="liveshow__title flex-container">
                    <span className="see-all-text">See all</span>
                    <img src={Arrow} alt="arrow" />
                </div>
        </div>

        <div className="most-popular-images ">
            {MostPopularImages.map(item => (
                <div className="liveshow__assortment description ">
                    <div className="image" key={item.id}>
                        <img class="responsive-image" src={item.icon}  alt="{item.title}" />
                    </div>  


                </div>  
            ))}

        </div>
        
    </section>


    );
}

export default NewMoviesForYou