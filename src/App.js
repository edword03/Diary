/* cors */
import React from 'react';

/* compinents */
import { Header, Main } from './components/';
import AddNote from './pages/Add-note';

/* hook */
import { useApp } from './hooks/useApp';

/* styles */
import './App.css';
import { Contex } from './Contex';

const App = React.memo(() => {
  const {
    isNote,
    setIsNote,
    setNotes,
    filtredNotes,
    smile,
    title,
    onTitle,
    onSmile,
    onSubmit
  } = useApp();

  return (
    <Contex.Provider
      value={{
        filtredNotes,
        setNotes,
        smile,
        title,
        onTitle,
        onSmile,
      }}>
      <div className="App">
        <Header setIsNote={setIsNote} isNote={isNote} />
        {isNote ? <Main /> : <AddNote onSubmit={onSubmit} />}
      </div>
    </Contex.Provider>
  );
});

export default App;
