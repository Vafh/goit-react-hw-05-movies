import styled from "styled-components";

export const MovieAuthorsPageStyles = styled.li`
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
  .additional-information-list__text {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
