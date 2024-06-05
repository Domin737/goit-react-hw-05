import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/api';
import { HomeContainer } from './Home.styled';

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
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;
