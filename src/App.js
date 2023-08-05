import { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Navbar';
import ContactList from './components/ContactList';
import UserProfile from './components/UserProfile';
import ContactForm from './components/Actions/ContactForm';
import NoteForm from './components/Actions/NoteForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let loginData = JSON.parse(localStorage.getItem('login'));

        if (loginData) {
            let loginExp = loginData.exp;
            let now = Date.now() / 1000;

            if (now < loginExp) {
                setUser(loginData);
            } else {
                localStorage.setItem('login', null);
            }
        }
    }, []);

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="App">
                <Header user={user} setUser={setUser} clientId={clientId} />
                <Routes>
                    {user ? (
                        <>
                            <Route
                                exact
                                path="/"
                                element={<ContactList user={user} />}
                            />
                            <Route
                                exact
                                path="/profile"
                                element={<UserProfile user={user} />}
                            />
                            <Route
                                exact
                                path="/add-contact"
                                element={<ContactForm />}
                            />
                            <Route
                                exact
                                path="/add-note"
                                element={<NoteForm />}
                            />
                        </>
                    ) : (
                        ''
                    )}
                </Routes>
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
