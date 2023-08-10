import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import ContactForm from './Actions/ContactForm';
import NoteForm from './Actions/NoteForm';

import ContactDataService from '../services/contacts';

const ContactModal = ({
    showModal,
    setShowModal,
    contact,
    user,
    retrieveContacts,
}) => {
    const navigate = useNavigate();

    const [editDisabled, setEditDisabled] = useState(true);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleEdit = () => {
        setEditDisabled(!editDisabled);
    };

    const handleConfirmDelete = () => {
        setConfirmDelete(!confirmDelete);
        setEditDisabled(true);
    };

    const handleDelete = () => {
        ContactDataService.deleteContact(contact._id)
            .then((response) => {
                console.log(response);
                setShowModal(false);
                retrieveContacts();
                navigate('/');
            })
            .catch((e) => {
                console.log(e);
            });
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
                        <Button variant="danger" onClick={handleConfirmDelete}>
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
                {confirmDelete && (
                    <>
                        <Button
                            variant="secondary"
                            onClick={handleConfirmDelete}
                        >
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={handleDelete}>
                            Confirm Delete
                        </Button>
                    </>
                )}
            </Modal.Footer>
        </Modal>
    );
};

export default ContactModal;
