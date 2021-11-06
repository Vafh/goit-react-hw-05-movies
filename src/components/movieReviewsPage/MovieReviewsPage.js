import React, { useEffect, useState } from "react";
import { fetchMovieDetailsReviews } from "../../service/Request";
import { MovieReviewsPageStyles } from "./MovieReviewsPageStyles";
const MovieReviewsPage = ({ filmsId }) => {
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    fetchMovieDetailsReviews(filmsId)
      .then(setReviews)
      .catch((err) => console.log(err.message));
  }, [filmsId]);
  if (reviews?.results?.length) {
    return reviews?.results?.map((review) => (
      <MovieReviewsPageStyles key={review.id}>
        Author: {review.author}
        <p className="revievs__text">{review.content}</p>
      </MovieReviewsPageStyles>
    ));
  }
  return (
    <li>
      <p>We dont have any reviews for this movies.</p>
    </li>
  );
};

export default MovieReviewsPage;
