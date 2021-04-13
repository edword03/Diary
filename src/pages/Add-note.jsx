import React from 'react';
import PropTypes from 'prop-types';
import { Select, Button } from '../components';
import Gallery from '../components/Gallery/Gallery';
import { useAddNote } from '../hooks/useAddNote';

import ImgBtn from '../assets/Union.svg';
import './Add-note.css';

function AddNote({ onSubmit }) {
  const {
    title,
    setTitle,
    smile,
    setSmile,
    date,
    setDate,
    src,
    setSrc,
    text,
    setText,
  } = useAddNote();
  const inputRef = React.useRef();
  const selectDate = () => {
    inputRef.current.type = 'date';
  };

  return (
    <div className="main-content">
      <div className="form-block">
        <form className="form note-form" onSubmit={e => onSubmit(e, title, smile, date, src, text)}>
          <div className="form-container">
            <div className="form__group">
              <label htmlFor="name">
                <input
                  type="text"
                  className="note-form__input-name"
                  name="name"
                  placeholder="Название"
                  value={title}
                  onChange={e => setTitle(e.target.value.trim())}
                />
              </label>
            </div>
            <div className="form__group">
              <Select smile={smile} setSmile={setSmile} />
              <label htmlFor="date">
                <input
                  ref={inputRef}
                  type="text"
                  name="date"
                  className="note-form__input-date"
                  placeholder="Дата"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  onFocus={selectDate}
                />
              </label>
            </div>
          </div>
          <textarea
            name="description"
            id="description "
            className="note-form__textarea"
            placeholder="Описание"
            value={text}
            onChange={e => setText(e.target.value.trim())}></textarea>
          <Button btnImg={ImgBtn} btnCastom="note__btn">
            Создать
          </Button>
        </form>
      </div>
      <Gallery setSrc={setSrc} />
    </div>
  );
}

AddNote.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddNote;
