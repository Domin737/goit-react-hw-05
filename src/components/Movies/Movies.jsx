import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import { MoviesContainer, MovieItem } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = event => {
    event.preventDefault();
    searchMovies(query).then(data => setMovies(data.results));
  };

  return (
    <MoviesContainer>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </MovieItem>
        ))}
      </ul>
    </MoviesContainer>
  );
};

export default Movies;
