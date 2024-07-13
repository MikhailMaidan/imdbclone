import React from 'react';
import PropTypes from 'prop-types';


const CardHeading = ({ title, headerClass, moreOptionsClass, titleClass }) => {
  return (
    <div className={headerClass}>
      <div className={titleClass}>
        <div><span className={`${titleClass}-text`}>{title}</span></div>
        <div className={moreOptionsClass}>
          <span className="full-assortment">See all</span>
          
        </div>
      </div>
    </div>
  );
}

CardHeading.propTypes = {
  title: PropTypes.string.isRequired,
  headerClass: PropTypes.string,
  moreOptionsClass: PropTypes.string,
  titleClass: PropTypes.string
};

CardHeading.defaultProps = {
  headerClass: 'tvshow__header',
  moreOptionsClass: 'tvshow__more-options',
  titleClass: 'tvshow__title'
};

export default CardHeading;




