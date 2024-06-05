import React, { useState } from 'react';
import { searchMovies } from '../../services/api';
import { MoviesContainer } from './Movies.styled';
import PropTypes from 'prop-types';

Movies.propTypes = {
  query: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

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
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </MoviesContainer>
  );
};

export default Movies;
