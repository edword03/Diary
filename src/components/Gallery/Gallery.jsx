import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getData } from '../../api/api';

import SearchIcon from '../../assets/search-found.svg';
import classes from './Gallery.module.css';

const GalleryItem = React.lazy(() => import('../Gallery-item/Gallery-item'))

const Gallery = ({ setSrc }) => {
  const [query, setQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState('');

  const getPicture = async (query) => {
    const res = await getData(query);
    if (res.photos.length) {
      setImage(res.photos);
    } 
    setIsLoaded(true);
  };

  const onSubmit = (event, query) => {
    event.preventDefault();
    if (query) {
      getPicture(query.trim());
    }
  }

  const setImgForForm = img => {
    setSrc(img);
  };

  return (
    <div className={classes.galleryBlock}>
      <form className={classes.search} onSubmit={e => onSubmit(e, query)}>
        <input
          type="text"
          placeholder="Поиск"
          className={classes.input}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className={classes.btn}>
          <img src={SearchIcon} alt="search" />
        </button>
      </form>
      <div className={classes.gallery}>
        <React.Suspense fallback={<p>Загрузка</p>}>
        {isLoaded && image ? (
          image.map((item, index) => {
            const {
              src: { large },
              id,
            } = item;
            return (
              <GalleryItem
                src={large}
                key={`galleryitem_${id}`}
                onClick={setImgForForm}
              />
            );
          })
        ) : !image && isLoaded ? <p>Ничего не найдено</p> : null}
        </React.Suspense>
      </div>
    </div>
  );
};

Gallery.propTypes = {
  setSrc: PropTypes.func
}

export default Gallery;
