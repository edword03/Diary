import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import classes from './Note.module.css';

const NoteBlock = ({ smile, src, title, date, text }) => {
  const [modal, setModal] = useState(false);
  const [textValue, setTextValue] = useState(text);

  const noteDate = new Date(date).toLocaleString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
  }, [modal]);

  const onClose = () => {
    setModal(prev => !prev);
  };

  return (
    <>
      <div className={classes.block} onClick={onClose}>
        <span className={classes.icon}>{smile}</span>
        <img src={src} alt="Notephoto" className={classes.image} />
        <div className={classes.text}>
          <div className={classes.titles}>
            <h3 className={classes.title}>{title}</h3>
            <span className={classes.date}>{noteDate}</span>
          </div>
          <p className={classes.description}>{text.slice(0, 36) + '...'}</p>
        </div>
      </div>

      {modal && (
        <Modal
          onClose={onClose}
          smile={smile}
          img={src}
          title={title}
          date={date}
          text={textValue}
          setText={setTextValue}
        />
      )}
    </>
  );
};

NoteBlock.propTypes = {
  smile: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default NoteBlock;
