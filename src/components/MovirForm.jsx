// src/components/MovieForm.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/movieSlice";
import { v4 as uuidv4 } from "uuid";

function MovieForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addMovie({ id: uuidv4(), title }));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex mb-4">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter movie title"
        className="form-control me-2"
      />
      <button type="submit" className="btn btn-success">Add</button>
    </form>
  );
}

export default MovieForm;
