import React, { useState } from 'react';
import {
  Container,
  SearchForm,
  SearchInput,
  SearchButton,
  MoviesList,
  MovieItem,
  MovieLink,
} from './Movies.styled';
import { Link } from 'react-router-dom';
import { searchMovies } from '../../services/api';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (query.trim() === '') {
      return;
    }
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <Container>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for movies..."
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      <MoviesList>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <MovieLink as={Link} to={`/movies/${movie.id}`}>
              {movie.title}
            </MovieLink>
          </MovieItem>
        ))}
      </MoviesList>
    </Container>
  );
};

export default Movies;
