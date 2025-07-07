// components/MovieForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/movieSlice';

function MovieForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    dispatch(addMovie({ title }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        className="form-control"
      />
      <button className="btn btn-success mt-2">Add Movie</button>
    </form>
  );
}

export default MovieForm;
