import React from 'react';
import './Modal.css'; // Ensure correct path

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay show">
      <div className="modal show">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
