import { useCallback, useEffect, useState } from 'react';

import UserDataService from '../services/users';
import UserForm from './Actions/UserForm';

export default function UserProfile({ user }) {
    const [userProfile, setUserProfile] = useState({});

    const handleCreateUser = useCallback(() => {
        const userObj = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            googleId: user.googleId,
        };

        UserDataService.createNewUser(userObj)
            .then((response) => {
                console.log(response);
                retrieveUserInfo();
            })
            .catch((e) => {
                console.log(e);
            });
    });

    const retrieveUserInfo = useCallback(() => {
        UserDataService.getUserInfo(user.googleId)
            .then((response) => {
                setUserProfile(response.data);
            })
            .catch((e) => {
                if (e.response.data.error && user) {
                    handleCreateUser();
                } else {
                    console.log(e);
                }
            });
    }, [user, handleCreateUser]);

    useEffect(() => {
        retrieveUserInfo();
    }, [retrieveUserInfo, userProfile]);

    return (
        <div className="App">
            <div className="form-container">
                <h1 style={{ alignSelf: 'center' }}>Your Profile</h1>
                <UserForm userProfile={userProfile} />
            </div>
        </div>
    );
}
