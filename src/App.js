import React, { useState } from 'react';
import { Header, Main } from './components/';
import AddNote from './pages/Add-note';
import './App.css';
import { Contex } from './Contex';

function App() {
  const [isNote, setIsNote] = useState(true);
  const [notes, setNotes] = useState([
    {
      title: 'Побывал в горах',
      smile: '😌',
      date: '2021-01-24',
      src:
        'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
      text: 'Сегодня почувствовал легкое волнение...'
    },
  ]);

  const filterNotes = () => {

  }

  const onSubmit = (event, title, smile, date, src, text) => {
    event.preventDefault()
    const newNote = {
      title,
      smile,
      date,
      src,
      text
    }

    if (title && smile && date && src && text) {
      setNotes(prev => [newNote, ...prev]);
      setIsNote(true);
    }
  }
  
  return (
    <Contex.Provider
      value={{
        notes,
        setNotes,
      }}>
      <div className="App">
        <Header setIsNote={setIsNote} isNote={isNote} />
        {isNote ? <Main /> : <AddNote onSubmit={onSubmit} />}
      </div>
    </Contex.Provider>
  );
}

export default App;
