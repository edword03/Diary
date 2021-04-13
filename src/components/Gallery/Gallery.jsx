import React, { useState } from 'react';
import { getData } from '../../api/api';

import SearchIcon from '../../assets/search-found.svg';
import classes from './Gallery.module.css';

const GalleryItem = React.lazy(() => import('../Gallery-item/Gallery-item'))

const Gallery = ({ setSrc }) => {
  const [query, setQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState('');

  const getPicture = async (event, query) => {
    event.preventDefault();
    const res = await getData(query);
    if (res.photos.length) {
      setImage(res.photos);
    } 
    setIsLoaded(true);
    console.log(res);
  };

  const setImgForForm = img => {
    setSrc(img);
  };

  return (
    <div className={classes.galleryBlock}>
      <form className={classes.search} onSubmit={e => getPicture(e, query.trim())}>
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
                // selected={selected}
                // setSelected={setSelected}
              />
            );
          })
        ) : !image && isLoaded ? <p>Ничего не найдено</p> : null}
        </React.Suspense>
      </div>
    </div>
  );
};

export default Gallery;
