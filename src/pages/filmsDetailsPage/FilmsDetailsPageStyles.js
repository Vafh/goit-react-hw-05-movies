import styled from "styled-components";

export const FilmsDetailsPageStyles = styled.div`
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
  .filmsDetails {
    &__box {
      margin-top: 20px;
    }
    &__text {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.18em;

      color: #686868;
    }
    &__title {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    &__flex {
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
      }
    }
    &__content {
      margin-left: 20px;
    }
  }
  .genres {
    font-size: 1.17em;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    &__item {
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.18em;
      color: #555555;
    }
  }
  .additional-information-list {
    display: grid;
    max-width: calc(100vw - 38px);
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-gap: 16px;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
