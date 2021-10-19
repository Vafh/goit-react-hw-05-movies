import PropTypes from "prop-types";
import { useEffect } from "react";

export default function Modal({ onClose, modalImg }) {
  useEffect(() => {
    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  });

  const onEscape = (e) => {
    onClose(e);
  };
  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal">
        <img src={modalImg} alt="" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  modalImg: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
