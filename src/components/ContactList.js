import { useState, useCallback, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ContactDataService from '../services/contacts';
import ContactModal from './ContactModal';

const ContactList = ({ user, contacts }) => {
    const [contactDetails, setContactDetails] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = (contact) => {
        setContactDetails(contact);
        setShowModal(true);
    };

    return (
        <div className="App">
            <Container className="main-container">
                <Row className="contact-row g-4" xs={1} md={2}>
                    {contacts.map((contact) => {
                        return (
                            <Col key={contact._id}>
                                <Card className="contact-list-card">
                                    {/* <Card.Img variant='top' src='' /> */}
                                    <Card.Body>
                                        <Card.Title>
                                            {contact.first_name}{' '}
                                            {contact.last_name}
                                        </Card.Title>
                                        <Card.Subtitle>
                                            {contact.company} -{' '}
                                            {contact.position}
                                        </Card.Subtitle>
                                        <Card.Text>
                                            {contact.social.linkedin}
                                        </Card.Text>
                                        <Card.Text>{contact.email}</Card.Text>
                                        <Button
                                            onClick={() =>
                                                handleShowModal(contact)
                                            }
                                        >
                                            View more details
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
                <ContactModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    contact={contactDetails}
                />
            </Container>
        </div>
    );
};

export default ContactList;
