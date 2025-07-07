// src/components/MovieList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMovie, editMovie } from '../redux/movieSlice';

function MovieList() {
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState('');

  const handleEdit = (id, currentTitle) => {
    setEditId(id);
    setNewTitle(currentTitle);
  };

  const handleSave = (id) => {
    dispatch(editMovie({ id, newTitle }));
    setEditId(null);
    setNewTitle('');
  };

  return (
    <div>
      <h3>Movie List</h3>
      <ul className="list-group">
        {movies.map((movie) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={movie.id}>
            {editId === movie.id ? (
              <input
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="form-control me-2"
                style={{ maxWidth: '300px' }}
              />
            ) : (
              <span>{movie.title}</span>
            )}

            <div>
              {editId === movie.id ? (
                <button className="btn btn-success btn-sm me-2" onClick={() => handleSave(movie.id)}>Save</button>
              ) : (
                <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(movie.id, movie.title)}>Edit</button>
              )}
              <button className="btn btn-danger btn-sm" onClick={() => dispatch(deleteMovie(movie.id))}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
