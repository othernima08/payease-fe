import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./confirmation-delete.css";

const DeleteConfirmationModal = (props) => {
  const { show, handleCancelDelete, handleDeletePhoneNumber, deleteConfirmationMessage } = props;

  return (
    <Modal show={show} onHide={handleCancelDelete} centered>
      <Modal.Header closeButton>
        <Modal.Title>Delete Phone Number Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>{deleteConfirmationMessage}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancelDelete}>
          No
        </Button>
        <Button variant="primary" onClick={handleDeletePhoneNumber} className="custom-yes-button">
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteConfirmationModal;