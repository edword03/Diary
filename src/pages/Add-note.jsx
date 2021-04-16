import React from 'react';
import PropTypes from 'prop-types';
import { Select, Button } from '../components';
import Gallery from '../components/Gallery/Gallery';
import { useAddNote } from '../hooks/useAddNote';

import ImgBtn from '../assets/Union.svg';
import classes from './Add-note.module.css';

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

  const onSmile = e => {
    const smile = e.target.value
    setSmile(smile)
  }

  const inputRef = React.useRef();
  const selectDate = () => {
    inputRef.current.type = inputRef.current.type === 'text' ? 'date' : 'text';
  };


  return (
    <div className={classes.mainContent}>
      <div className={classes.formBlock}>
        <form onSubmit={e => onSubmit(e, title, smile, date, src, text)}>
          <div className={classes.container}>
            <div className={classes.group}>
              <label htmlFor="name">
                <input
                  type="text"
                  className={classes.inputName}
                  name="name"
                  placeholder="Название"
                  value={title}
                  onChange={e => setTitle(e.target.value.trimStart())}
                />
              </label>
            </div>
            <div className={classes.group}>
              <Select smile={smile} setSmile={onSmile} />
              <label htmlFor="date" className={classes.labelDate}>
                <input
                  ref={inputRef}
                  type="text"
                  name="date"
                  className={classes.inputDate}
                  placeholder="Дата"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  onFocus={selectDate}
                  onBlur={selectDate}
                />
              </label>
            </div>
          </div>
          <textarea
            name="description"
            id="description "
            className={classes.textarea}
            placeholder="Описание"
            value={text}
            onChange={e => setText(e.target.value.trimStart())}></textarea>
          <Button btnImg={ImgBtn} btnCastom={classes.noteBtn}>
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
