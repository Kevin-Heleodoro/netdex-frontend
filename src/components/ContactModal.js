import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ContactForm from './Actions/ContactForm';
import NoteForm from './Actions/NoteForm';

const ContactModal = ({
    showModal,
    setShowModal,
    contact,
    user,
    retrieveContacts,
}) => {
    const [editDisabled, setEditDisabled] = useState(true);
    const [confirmDelete, setConfirmDelete] = useState(false);

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
                    setEditDisabled={setEditDisabled}
                    retrieveContacts={retrieveContacts}
                />
                <NoteForm />
            </Modal.Body>
            <Modal.Footer>
                {editDisabled && !confirmDelete && (
                    <>
                        <Button onClick={handleEdit}>Edit</Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Delete
                        </Button>
                    </>
                )}
                {!editDisabled && !confirmDelete && (
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
