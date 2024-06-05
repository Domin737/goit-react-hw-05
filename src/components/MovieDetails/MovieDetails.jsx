import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import {
  MovieDetailsContainer,
  MovieImage,
  BackButton,
  MovieContent,
  MovieDescription,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailsContainer>
      <BackButton to="/movies">Go back</BackButton>
      <h1>{movie.title}</h1>
      <MovieContent>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDescription>
          <p>{movie.overview}</p>
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </MovieDescription>
      </MovieContent>
      <Outlet />
    </MovieDetailsContainer>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }),
};

export default MovieDetails;
