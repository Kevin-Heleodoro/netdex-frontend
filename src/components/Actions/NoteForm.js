import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ContactDataService from '../../services/contacts';

export default function NoteForm({ user, contacts, retrieveContacts }) {
    const navigate = useNavigate();

    const [contactId, setContactId] = useState(contacts[0]._id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());

        ContactDataService.createNewNote(contactId, formObj)
            .then(() => {
                console.log(`note added: ${formObj.note}`);
                navigate('/');
                retrieveContacts();
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="noteForm.contact">
                <Form.Label>Select Contact</Form.Label>
                <Form.Control
                    as="select"
                    value={contactId}
                    onChange={(e) => {
                        setContactId(e.target.value);
                    }}
                >
                    {contacts.map((c) => (
                        <option value={c._id} key={c._id}>
                            {c.first_name} {c.last_name}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="noteForm.note">
                <Form.Label>Enter note</Form.Label>
                <Form.Control
                    type="textarea"
                    placeholder="Note details..."
                    name="note"
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}
