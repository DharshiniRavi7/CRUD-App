import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteMovie, editMovie } from "../redux/movieSlice";

function MovieList() {
  const movies = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (movie) => {
    setEditId(movie.id);
    setNewTitle(movie.title);
  };

  const handleSave = () => {
    if (newTitle.trim()) {
      dispatch(editMovie({ id: editId, newTitle }));
      setEditId(null);
      setNewTitle("");
    }
  };

  return (
    <div className="container mt-4">
      <h3>🎬 Movie List</h3>
      <ul className="list-group">
        {movies.map(movie => (
          <li key={movie.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editId === movie.id ? (
              <>
                <input
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="form-control me-2"
                />
                <button onClick={handleSave} className="btn btn-success btn-sm">Save</button>
              </>
            ) : (
              <>
                <span>{movie.title}</span>
                <div>
                  <button onClick={() => handleEdit(movie)} className="btn btn-primary btn-sm me-2">Edit</button>
                  <button onClick={() => dispatch(deleteMovie(movie.id))} className="btn btn-danger btn-sm">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
