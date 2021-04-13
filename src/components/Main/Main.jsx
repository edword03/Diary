import React, { useContext } from 'react';
import Note from '../Note-block/NoteNlock';
import { Contex } from '../../Contex';

import classes from './Main.module.css';

const Main = () => {
  const {notes} = useContext(Contex);
  return (
    <main className={classes.container}>
      {notes.map((note, index) => <Note key={`note_${index}`} {...note} />)}
    </main>
  );
};

export default Main;
