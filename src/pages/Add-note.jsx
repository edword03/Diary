import React from 'react';
import { Select, Button, GalleryItem } from '../components';

import Smile from '../assets/smiles/😀.svg';
import ImgBtn from '../assets/Union.svg';
import SearchIcon from '../assets/search-found.svg';
import '../App.css';
import './Add-note.css';

function AddNote() {
  return (
    <div className="main-content">
      <div className="form-block">
        <form className="form note-form">
          <div className="form-container">
            <div className="form__group">
              <label htmlFor="name">
                <input
                  type="text"
                  className="note-form__input-name"
                  name="name"
                  placeholder="Название"
                />
              </label>
            </div>
            <div className="form__group">
              <Select smile={Smile} />
              <label htmlFor="date">
                <input
                  type="text"
                  name="date"
                  className="note-form__input-date"
                  placeholder="Дата"
                />
              </label>
            </div>
          </div>
          <textarea
            name="description "
            id="description "
            className="note-form__textarea"
            placeholder="Описание"></textarea>
          <Button btnImg={ImgBtn} btnCastom="note__btn">
            Создать
          </Button>
        </form>
      </div>
      <div className="gallery-block">
        <div className="gallery-block__search">
          <input type="text" placeholder="Поиск" className="gallery-block__input" />
          <button className="gallery-block__btn">
            <img src={SearchIcon} alt="search" />
          </button>
        </div>
        <div className="gallery">
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />
          <div className="small-block">
            <GalleryItem
              img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
              styles="gallery-item--sm"
            />
            <GalleryItem
              img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
              styles="gallery-item--sm"
            />
          </div>
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />{' '}
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />
          <GalleryItem
            img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
            styles="gallery-item--lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AddNote;
