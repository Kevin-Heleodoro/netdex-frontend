import { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function UserProfile({ user }) {
    const [userProfile, setUserProfile] = useState(null);

    return (
        <div className="App">
            <Container className="main-container">User Profile page</Container>
        </div>
    );
}
