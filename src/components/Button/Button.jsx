import React from 'react';
import classes from './Button.module.css';
import PropTypes from 'prop-types';

const Button = props => {
  return (
    <button
      className={`${classes.btn} ${props.primary ? classes.primary : classes.secondary} ${
        props.btnCastom || ''
      }`}
      onClick = {props.onClick}>
      <img src={props.btnImg} alt="" className={classes.image} />
      <span className={classes.text}>{props.children}</span>
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  btnCastom: PropTypes.string,
  btnImg: PropTypes.string.isRequired,
  children: PropTypes.elementType.isRequired
}

export default Button;
