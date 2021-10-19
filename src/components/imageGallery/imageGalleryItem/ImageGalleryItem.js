import PropTypes from "prop-types";
import React from "react";

const ImageGalleryItem = ({ hits, handleClick }) => {
  return hits.map((hit, index) => (
    <li key={hit.id + index} className="ImageGalleryItem">
      <img
        src={hit.webformatURL}
        onClick={() => handleClick(hit.largeImageURL)}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  ));
};
ImageGalleryItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
};
export default ImageGalleryItem;
