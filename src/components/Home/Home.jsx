import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/api';
import { HomeContainer, MovieItem } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <HomeContainer>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </MovieItem>
        ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;
