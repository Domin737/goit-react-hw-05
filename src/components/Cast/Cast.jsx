import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import { CastContainer, CastItem, NoCastMessage } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data));
  }, [movieId]);

  return (
    <CastContainer>
      <h2>Cast</h2>
      {cast.length > 0 ? (
        cast.map(actor => (
          <CastItem key={actor.cast_id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://via.placeholder.com/50x75'
              }
              alt={actor.name}
            />
            <div>
              <h3>{actor.name}</h3>
              <p>as {actor.character}</p>
            </div>
          </CastItem>
        ))
      ) : (
        <NoCastMessage>
          No cast information available for this movie.
        </NoCastMessage>
      )}
    </CastContainer>
  );
};

export default Cast;
