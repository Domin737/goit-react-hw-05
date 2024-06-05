import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import {
  MovieDetailsContainer,
  MovieImage,
  BackButton,
  MovieContent,
  MovieDescription,
  LinkButton,
  MovieTitle,
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
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieContent>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDescription>
          <p>{movie.overview}</p>
          <div>
            <LinkButton to="cast">Cast</LinkButton>
            <LinkButton to="reviews">Reviews</LinkButton>
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
