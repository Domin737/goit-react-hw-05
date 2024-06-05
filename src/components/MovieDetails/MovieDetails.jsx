import React, { useEffect, useState } from 'react';
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
  MovieInfo,
  MovieScore,
  MovieOverview,
  MovieGenres,
  Section,
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
      <MovieContent>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <MovieDescription>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieInfo>
            <Section>
              <MovieScore>User Score: {movie.vote_average * 10}%</MovieScore>
            </Section>
            <Section>
              <MovieOverview>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
              </MovieOverview>
            </Section>
            <Section>
              <MovieGenres>
                <h3>Genres</h3>
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </MovieGenres>
            </Section>
          </MovieInfo>
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

export default MovieDetails;
