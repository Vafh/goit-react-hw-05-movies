import PropTypes from "prop-types";
import React from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ hits, handleClick }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem hits={hits} handleClick={handleClick} />
    </ul>
  );
};
ImageGallery.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
};
export default ImageGallery;
