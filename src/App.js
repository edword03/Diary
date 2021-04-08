import React, { useState } from 'react';
import { Header, Main, Modal } from './components/';
import AddNote from './pages/Add-note';
import './App.css';
import { Contex } from './Contex';

function App() {
  const [modal, setModal] = useState('');
  const [isNote, setIsNote] = useState(true);


  return (
    <Contex.Provider value={{
      
    }}>
      <div className="App">
        <Header setIsNote={setIsNote} isNote={isNote} />
        {isNote ? <Main /> : <AddNote />}
        {modal && <Modal />}
      </div>
    </Contex.Provider>
  );
}

export default App;
