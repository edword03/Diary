import React, { useContext } from 'react';
import Note from '../Note-block/NoteNlock';
import { Contex } from '../../Contex';

import classes from './Main.module.css';

const Main = () => {
  const {filtredNotes} = useContext(Contex);
  return (
    <main className={classes.container}>
      {filtredNotes && filtredNotes.map((note, index) => <Note key={`note_${index}`} {...note} />)}
    </main>
  );
};

export default Main;
