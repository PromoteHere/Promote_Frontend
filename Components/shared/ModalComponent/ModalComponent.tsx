import React from 'react';
import { Button, Modal } from 'react-bootstrap';

interface ModalPopupProps {
  show: boolean;
  handleClose: () => void;
  content: any;
}

const ModalComponent: React.FC<ModalPopupProps> = ({ show, handleClose, content }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>PROMOTE</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{content}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
