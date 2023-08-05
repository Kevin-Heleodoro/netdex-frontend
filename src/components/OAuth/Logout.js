import React from 'react';
import Button from 'react-bootstrap/Button';
import { googleLogout } from '@react-oauth/google';

function Logout({ setUser, clientId }) {
    const onClick = () => {
        googleLogout();
        setUser(null);
        localStorage.setItem('login', null);
        console.log('Logout made successfully');
    };

    return (
        <div>
            <div onClick={onClick}>Logout</div>
        </div>
    );
}

export default Logout;
