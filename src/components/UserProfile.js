import { useCallback, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import UserDataService from '../services/users';

export default function UserProfile({ user }) {
    const [userProfile, setUserProfile] = useState(null);

    const retrieveUserInfo = useCallback(() => {
        if (!userProfile) {
            UserDataService.getUserInfo(user.googleId)
                .then((response) => {
                    setUserProfile(response.data);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [userProfile, user]);

    useEffect(() => {
        if (!userProfile && user) {
            retrieveUserInfo();
        }
    }, [userProfile, user, retrieveUserInfo]);

    return (
        <div className="App">
            <div className="form-container">
                <Container className="main-container profile-container">
                    User Profile page
                </Container>
            </div>
        </div>
    );
}
