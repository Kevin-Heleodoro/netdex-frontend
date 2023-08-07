import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

export default function ContactForm({ contact, isEditing }) {
    const [disabled, setDisabled] = useState(true);

    const { first_name, last_name, email, company, position } = contact || '';

    useEffect(() => {
        setDisabled(isEditing);
    }, [isEditing]);

    return (
        <Form>
            <Form.Group className="mb-3" controlId="contactForm.firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    value={first_name}
                    disabled={disabled}
                    placeholder="John"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    value={last_name}
                    disabled={disabled}
                    placeholder="Smith"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    value={email}
                    disabled={disabled}
                    placeholder="name@email.com"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                    type="text"
                    value={company}
                    disabled={disabled}
                    placeholder="Google"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.position">
                <Form.Label>Position</Form.Label>
                <Form.Control
                    type="text"
                    value={position}
                    disabled={disabled}
                    placeholder="Pro Googler"
                />
            </Form.Group>
        </Form>
    );
}
