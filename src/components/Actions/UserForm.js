import { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';

import UserDataService from '../../services/users';

export default function UserForm({ userProfile }) {
    const [disabled, setDisabled] = useState(true);

    const {
        _id,
        email,
        last_name,
        first_name,
        company,
        gender,
        position,
        phone,
        city,
        state,
    } = userProfile || '';

    const handleEdit = (e) => {
        e.preventDefault();
        setDisabled(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData.entries());

        UserDataService.updateUser(_id, formObj)
            .then((response) => {
                setDisabled(true);
                console.log(response.data.status);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setDisabled(true);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="userForm.firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={first_name}
                    disabled={disabled}
                    name="first_name"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={last_name}
                    disabled={disabled}
                    name="last_name"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={email}
                    disabled={disabled}
                    name="email"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.email">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                    type="Phone"
                    defaultValue={phone}
                    disabled={disabled}
                    name="phone"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.email">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={city}
                    disabled={disabled}
                    name="city"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.email">
                <Form.Label>State</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={state}
                    disabled={disabled}
                    name="state"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={company}
                    disabled={disabled}
                    name="company"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.position">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={position}
                    disabled={disabled}
                    name="position"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="userForm.gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                    type="text"
                    defaultValue={gender}
                    disabled={disabled}
                    name="gender"
                />
            </Form.Group>
            <ButtonGroup>
                {disabled ? (
                    <Button variant="primary" onClick={handleEdit}>
                        Edit
                    </Button>
                ) : (
                    <>
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                        <Button variant="danger" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </>
                )}
            </ButtonGroup>
        </Form>
    );
}
