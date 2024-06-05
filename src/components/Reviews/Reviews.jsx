import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import {
  ReviewContainer,
  ReviewItem,
  NoReviewsMessage,
} from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(data => setReviews(data));
  }, [movieId]);

  return (
    <ReviewContainer>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <ReviewItem key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </ReviewItem>
        ))
      ) : (
        <NoReviewsMessage>
          No reviews available for this movie.
        </NoReviewsMessage>
      )}
    </ReviewContainer>
  );
};

export default Reviews;
