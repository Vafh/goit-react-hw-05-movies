import React from "react";
// import PropTypes from "prop-types";
import { useHistory } from "react-router";

const BtnGoBack = ({ goBack }) => {
  const history = useHistory();
  const onClick = () => {
    history.push(goBack || "/");
  };
  return (
    <button onClick={onClick} type="button">
      <span>Go back</span>
    </button>
  );
};

export default BtnGoBack;

// BtnGoBack.propTypes = {
//   handleBtnClick: PropTypes.func.isRequired,
// };
