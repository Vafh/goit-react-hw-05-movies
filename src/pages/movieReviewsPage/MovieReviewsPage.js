import React from "react";
const MovieReviewsPage = ({ reviews }) => {
  if (reviews?.results?.length !== 0) {
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
