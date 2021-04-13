import { useState } from 'react';

export const useAddNote = () => {
  const [title, setTitle] = useState('');
  const [smile, setSmile] = useState('');
  const [date, setDate] = useState('');
  const [src, setSrc] = useState(
    'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
  );
  const [text, setText] = useState('');

  return {
    title,
    setTitle,
    smile,
    setSmile,
    date,
    setDate,
    src,
    setSrc,
    text,
    setText,
  };
};
