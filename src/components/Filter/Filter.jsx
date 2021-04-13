import React, { useState } from 'react';
import Select from './Select';
import classes from './Filter.module.css';

const Filter = () => {
  const [smile, setSmile] = useState('');

  return (
    <div className={classes.filter}>
      <input type="text" className={`input ${classes.input}`} placeholder="Поиск" />
      <Select smile={smile} setSmile={setSmile} />
    </div>
  );
};

export default Filter;
