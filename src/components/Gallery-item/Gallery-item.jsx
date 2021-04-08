import React from 'react';
import PropTypes from 'prop-types';
import './Gallery-item.css'

const GalleryItem = props => {
  return (
    <div className={`gallery-item ${props.styles}`}>
      <img src={props.img} alt="" className="gallery__img" />
    </div>
  );
};

GalleryItem.propTypes = {
  img: PropTypes.string
}

export default GalleryItem;
