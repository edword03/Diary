import React from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.module.css';

const Modal = ({ onClose, smile, img, title, date, text = '', setText }) => {
  const modalDate = new Date(date)
    .toLocaleString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .replace('г.', 'года');

  return (
    <dialog className={classes.overlay}>
      <div className={classes.body}>
        <div className={classes.titles}>
          <div className={classes.titleBox}>
            <span className={classes.smile}>{smile}</span>
            <h1 className={classes.title}>{title}</h1>
          </div>
          <span className={classes.data}>{modalDate}</span>
        </div>
        <div className={classes.closeIcon} onClick={onClose}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.22517 0.811082C1.83465 0.420557 1.20148 0.420557 0.81096 0.811082C0.420435 1.20161 0.420435 1.83477 0.81096 2.2253L6.58569 8.00003L0.811019 13.7747C0.420495 14.1652 0.420495 14.7984 0.811019 15.1889C1.20154 15.5794 1.83471 15.5794 2.22523 15.1889L7.99991 9.41424L13.7746 15.1889C14.1651 15.5794 14.7983 15.5794 15.1888 15.1889C15.5793 14.7984 15.5793 14.1652 15.1888 13.7747L9.41412 8.00003L15.1889 2.2253C15.5794 1.83477 15.5794 1.20161 15.1889 0.811082C14.7983 0.420557 14.1652 0.420557 13.7746 0.811082L7.99991 6.58582L2.22517 0.811082Z"
              fill="black"
            />
          </svg>
        </div>
        <div className={classes.image}>
          <img className={classes.img} src={img} alt="" />
        </div>
        <div className={classes.text}>
          <textarea className={classes.textarea} onChange={e => setText(e.target.value)} value={text}>
            {text}
          </textarea>
        </div>
      </div>
    </dialog>
  );
};

Modal.propsTypes = {
  onClose: PropTypes.func,
  smile: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string,
};

export default Modal;
