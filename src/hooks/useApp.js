import { useState, useEffect } from 'react';
import { note } from '../db';

export const useApp = () => {
  const [isNote, setIsNote] = useState(true);
  const [notes, setNotes] = useState([]);
  const [filtredNotes, setFiltredNotes] = useState([]);
  const [smile, setSmile] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    setNotes(note);
    setFiltredNotes(note);
  }, []);

  const filterNotes = ({ smile = '', title = '' } = {}) => {
    setFiltredNotes(() =>
      notes.filter(
        note =>
          note.smile.includes(smile) &&
          note.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()),
      ),
    );
  };

  const onTitle = e => {
    const title = e.target.value.trim();
    setTitle(title);
    filterNotes({ title });
  };

  const onSmile = e => {
    const smile = e.target.value.trim();
    setSmile(smile);
    filterNotes({ smile });
  };

  const onSubmit = (event, title, smile, date, src, text) => {
    event.preventDefault();
    const newNote = {
      title,
      smile,
      date,
      src,
      text,
    };

    if (title && smile && date && src && text) {
      setNotes(prev => [newNote, ...prev]);
      setFiltredNotes(prev => [newNote, ...prev]);
      setIsNote(true);
    }
  };

  return {
    isNote,
    setIsNote,
    notes,
    setNotes,
    filtredNotes,
    setFiltredNotes,
    smile,
    setSmile,
    title,
    setTitle,
    onTitle,
    onSmile,
    onSubmit,
  };
};
