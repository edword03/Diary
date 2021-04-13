import React  from 'react';
import { moods } from '../../api/data';

import classes from './Filter.module.css';

const Select = ({ smile, setSmile }) => {
  return (
    <div className={classes.selector}>
      <select
        className={`select ${classes.select}`}
        value={smile}
        onChange={e => setSmile(e.target.value.trim())}>
        <option value=""></option>
        {moods.map((smileItem, index) => (
          <option key={`smile-option_${index}`} value={smileItem}>
            {smileItem}
          </option>
        ))}
      </select>
      {!smile ? <i className={`${classes.icon} far fa-laugh`}></i> : ''}
    </div>
  );
};

export default Select;
