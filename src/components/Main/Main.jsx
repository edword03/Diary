import React from 'react';
import Note from '../Note-block/NoteNlock';
import Smile1 from '../../assets/smiles/😌.svg';

import './Main.css';
// 563492ad6f91700001000001b13fdfef0b8b45e7bbc33c02891bd117
const Main = () => {
  return (
    <main className="main">
      <Note smile={Smile1} />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </main>
  );
};

export default Main;
