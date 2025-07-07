// src/redux/movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie: (state, action) => {
      state.push(action.payload); // { id, title }
    },
    deleteMovie: (state, action) => {
      return state.filter((movie) => movie.id !== action.payload); // payload = id
    },
    editMovie: (state, action) => {
      const { id, newTitle } = action.payload;
      const movie = state.find((m) => m.id === id);
      if (movie) {
        movie.title = newTitle;
      }
    },
  },
});

export const { addMovie, deleteMovie, editMovie } = movieSlice.actions;
export default movieSlice.reducer;
