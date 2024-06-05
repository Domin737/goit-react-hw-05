import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import { CastContainer, CastItem, CastImage } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <CastContainer>
      <h2>Cast</h2>
      <ul>
        {cast.map(member => (
          <CastItem key={member.cast_id}>
            <CastImage
              src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
              alt={member.name}
            />
            {member.name} as {member.character}
          </CastItem>
        ))}
      </ul>
    </CastContainer>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string.isRequired,
    })
  ),
};

export default Cast;
