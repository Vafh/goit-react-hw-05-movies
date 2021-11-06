import styled from "styled-components";

export const CardMovieStyles = styled.li`
  background: white;
  border-radius: 0 0.5rem 0.5rem 0.5rem;
  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05),
    0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);
  margin-top: 1rem;
  /* min-height: 3rem; */
  padding: 10px 10px 10px 20px;
  position: relative;
  width: 230px;
  .ImageGalleryItem-image {
    width: 200px;
    height: 300px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 10px;
  }

  .ImageGalleryItem-image:hover {
    transform: scale(1.03);
  }
`;
