import React, { useContext } from 'react';
import Select from './Select';
import classes from './Filter.module.css';
import { Contex } from '../../Contex';

const Filter = () => {
  const { smile, title, onTitle, onSmile } = useContext(Contex);
  return (
    <div className={classes.filter}>
      <input
        type="text"
        className={`input ${classes.input}`}
        placeholder="Поиск"
        value={title}
        onChange={onTitle}
      />
      <Select smile={smile} setSmile={onSmile}  />
    </div>
  );
};

export default Filter;
