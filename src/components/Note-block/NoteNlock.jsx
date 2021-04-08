import React from 'react';
import classes from './Note.module.css'

const NoteNlock = props => {
  return (
    <div className={classes.block}>
      <span className={classes.icon}/>
      <img
        src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg"
        alt="Notephoto"
        className={classes.image}
      />
      <div className={classes.text}>
        <div className={classes.titles}>
          <h3 className={classes.title}>Побывал в горах</h3>
          <span className={classes.date}>Вт 14 янв</span>
        </div>
        <p className={classes.description}>Сегодня я почувствовал детское волнение...</p>
      </div>
    </div>
  );
};

export default NoteNlock;
