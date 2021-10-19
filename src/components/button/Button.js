import PropTypes from "prop-types";
import React from "react";

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="Button" type="button">
      go to back
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default Button;
