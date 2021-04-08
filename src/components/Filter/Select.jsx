import React from 'react';
import { moods } from '../../api/data';

import smileDefault from '../../assets/smile-mouth-open.svg'

import arrow from '../../assets/chevron-down.svg';
import classes from './Filter.module.css';

const Select = props => {
  return (
    <select className={`select ${classes.select}`} value=''> 
      {/* <img src={props.smile} alt="" className={classes.smile} />
      <img src={arrow} alt="" className={classes.arrow} /> */}
      <option value="">{smileDefault}</option>
      {moods.map((smile, index) => <option key={`smile-option_${index}`} value={index === 0 ? '' : index}>{smile}</option>)}
    </select>
  );
};

export default Select;
