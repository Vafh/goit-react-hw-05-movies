import React from "react";
import PropTypes from "prop-types";

import { ButtonStyles } from "./ButtonStyles";

const Btn = ({ onKeyPress, handler, text, spanStyles, btnStyles }) => {
  return (
    <ButtonStyles>
      <button
        onClick={handler}
        onKeyPress={onKeyPress}
        type="button"
        className={btnStyles}
      >
        <span className={spanStyles}>{text}</span>
      </button>
    </ButtonStyles>
  );
};

export default Btn;

Btn.propTypes = {
  handleBtnClick: PropTypes.string,
};
