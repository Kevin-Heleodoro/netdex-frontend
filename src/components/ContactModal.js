import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ContactForm from './Actions/ContactForm';
import NoteForm from './Actions/NoteForm';

const ContactModal = ({ showModal, setShowModal, contact }) => {
    const [editDisabled, setEditDisabled] = useState(true);

    const handleEdit = () => {
        setEditDisabled(!editDisabled);
    };

    const handleDelete = () => {
        console.log('dlete clicked');
    };

    return (
        <Modal
            show={showModal}
            fullscreen={'sm-down'}
            onHide={() => {
                setEditDisabled(true);
                setShowModal(!showModal);
            }}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {contact
                        ? contact.first_name + ' ' + contact.last_name
                        : 'New Contact'}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactForm
                    contact={contact || ''}
                    editDisabled={editDisabled}
                />
                <NoteForm />
            </Modal.Body>
            <Modal.Footer>
                {editDisabled ? (
                    <>
                        <Button onClick={handleEdit}>Edit</Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </>
                ) : (
                    <>
                        <Button variant="secondary" onClick={handleEdit}>
                            Cancel
                        </Button>
                    </>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;
