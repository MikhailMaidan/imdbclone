import Arrow from '~/assets/images/icons/arrow.svg';
import '@/components/CardHeadings/CardHeading.scss';

export default function CardHeading() {

    return (
        <div className="tvshow__header">
        <div className="tvshow__title">
            <div><span className="tvshow__title-text">TV Shows</span></div>
            <div className="tvshow__more-options flex-container">
                <span className="full-assortment">See all</span>
                <img src={Arrow} alt="arrow" className="tvshow__arrow-icon" />
            </div>
        </div>
    </div>
    );
}