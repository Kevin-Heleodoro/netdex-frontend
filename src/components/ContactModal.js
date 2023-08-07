import { useState } from 'react';
import { Button, Form, Modal, Tabs } from 'react-bootstrap';
import ContactForm from './Actions/ContactForm';
import NoteForm from './Actions/NoteForm';

const ContactModal = ({ showModal, setShowModal, contact }) => {
    const handleEdit = () => {
        // if (!isEditing) {
        //     setIsEditing(true);
        // } else {
        //     setIsEditing(false);
        // }
    };

    const handleDelete = () => {
        console.log('dlete clicked');
    };

    return (
        <Modal
            show={showModal}
            fullscreen={'sm-down'}
            onHide={() => setShowModal(!showModal)}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {contact
                        ? contact.first_name + contact.last_name
                        : 'New Contact'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm contact={contact || ''} isEditing={false} />
                <NoteForm />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleEdit}>Edit</Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;
