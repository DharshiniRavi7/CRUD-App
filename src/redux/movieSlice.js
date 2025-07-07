// src/redux/movieSlice.js
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload); // action.payload = { id, title }
    },
    deleteMovie: (state, action) => {
      const id = action.payload;
      return state.filter(movie => movie.id !== id);
    },
    editMovie: (state, action) => {
      const { id, newTitle } = action.payload;
      const movie = state.find(m => m.id === id);
      if (movie) {
        movie.title = newTitle;
      }
    }
  }
});

export const { addMovie, deleteMovie, editMovie } = movieSlice.actions;
export default movieSlice.reducer;
