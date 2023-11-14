const Modal = ({ name, open, onClose }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-center">Confirm Delete Profile ?</h2>
        <hr />
        <div className="modal-buttons">
          <div className="d-flex padding-10">
            <button className="btn-padding">Yes</button>
            <button
              onClick={onClose}
              autoFocus={true}
              className="modal-button not-now-btn btn-padding"
            >
              Not Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
