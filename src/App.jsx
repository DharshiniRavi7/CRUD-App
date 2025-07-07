// App.jsx
import React from 'react';
import MovieForm from './components/MovirForm';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="container mt-4">
      <h2> Movie CRUD App</h2>
      <MovieForm />
      <MovieList />
    </div>
  );
}

export default App;
