import React, { useEffect, useState } from "react";
import { fetchMovieDetailsReviews } from "../../service/Request";
const MovieReviewsPage = ({filmsId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieDetailsReviews(filmsId).then(setReviews);
  }, [filmsId]);
  if (reviews?.results?.length) {
    return reviews?.results?.map((review) => (
      <li key={review.id}>
        Author: {review.author}
        <p>{review.content}</p>
      </li>
    ));
  }
  return (
    <li>
      <p>We dont have any reviews for this movies.</p>
    </li>
  );
};

export default MovieReviewsPage;
