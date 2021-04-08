import React from 'react';
import Select from './Select'
import classes from './Filter.module.css';
import smile from '../../assets/smile-mouth-open.svg';

const Filter = () => {
  return (
    <div className={classes.filter}>
      <input type="text" className={`input ${classes.input}`} placeholder="Поиск" />
      <Select smile={smile} />
    </div>
  );
};

export default Filter;
