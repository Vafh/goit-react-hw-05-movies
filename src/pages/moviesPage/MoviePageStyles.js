import styled from "styled-components";
import img from "../../images/search.png";

export const MoviePageStyles = styled.div`
  .SearchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    &__title {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: bold;
      font-size: 34px;
      line-height: 40px;
      color: #474747;
    }
    &__label {
      display: flex;
      position: relative;
    }
  }
  .SearchForm-input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }
  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }
  .SearchForm-button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-image: url(${img});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  .SearchForm-button:hover {
    opacity: 1;
  }
  .SearchForm-button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
  .ImageGallery {
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 16px;
    margin-top: 20px;
    margin-bottom: 15px;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
  }
`;
