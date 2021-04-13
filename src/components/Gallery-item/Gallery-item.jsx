import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classes from './Gallery-item.module.css'
import { ReactComponent as Check } from '../../assets/check.svg';


const GalleryItem = ({src, onClick}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className={`${classes.item} ${classes.large}`} onClick={() => {
      onClick(src)
      setSelected(true)
    }}>
      <img src={src} alt="" className={classes.img} />
      {selected ? <div className={classes.selected}><Check/></div> : null}
    </div>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func
}

export default GalleryItem;
