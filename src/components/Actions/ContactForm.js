import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ContactDataService from '../../services/contacts';

export default function ContactForm({
    contact,
    editDisabled,
    newContact,
    userId,
    retrieveContacts,
}) {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(editDisabled);

    const { first_name, last_name, email, company, position } = contact || '';

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());

        if (newContact) {
            handleCreateContact(formObj);
        } else {
            handleUpdateContact(formObj);
        }
    };

    const handleCreateContact = (newContactObj) => {
        newContactObj.user_id = userId;
        newContactObj.notes = 'Contact added to list';

        ContactDataService.createNewContact(newContactObj)
            .then(() => {
                retrieveContacts();
                navigate('/');
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleUpdateContact = (updateContactObj) => {
        ContactDataService.updateContact(updateContactObj)
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        setDisabled(editDisabled);
    }, [editDisabled]);

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactForm.firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    value={first_name}
                    disabled={disabled}
                    placeholder="John"
                    name="first_name"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    value={last_name}
                    disabled={disabled}
                    placeholder="Smith"
                    name="last_name"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    value={email}
                    disabled={disabled}
                    placeholder="name@email.com"
                    name="email"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                    type="text"
                    value={company}
                    disabled={disabled}
                    placeholder="Google"
                    name="company"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.position">
                <Form.Label>Position</Form.Label>
                <Form.Control
                    type="text"
                    value={position}
                    disabled={disabled}
                    placeholder="Pro Googler"
                    name="position"
                />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
    );
}
