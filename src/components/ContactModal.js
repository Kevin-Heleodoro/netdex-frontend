import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ContactModal = ({ showModal, setShowModal }) => {
    return (
        <Modal
            show={showModal}
            fullscreen={'md-down'}
            onHide={() => setShowModal(!showModal)}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body</Modal.Body>
        </Modal>
    );
};

export default ContactModal;
