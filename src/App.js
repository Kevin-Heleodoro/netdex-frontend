import { useState, useEffect, useCallback } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Navbar';
import ContactList from './components/ContactList';
import UserProfile from './components/UserProfile';
import ContactForm from './components/Actions/ContactForm';
import NoteForm from './components/Actions/NoteForm';
import ContactDataService from './services/contacts';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/OAuth/Login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
    const [user, setUser] = useState(null);
    const [contacts, setContacts] = useState([]);

    const retrieveContacts = useCallback(() => {
        ContactDataService.getAll(user.googleId)
            .then((response) => {
                setContacts(response.data.contactList);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [user]);

    useEffect(() => {
        if (user) {
            retrieveContacts();
        }
    }, [user, retrieveContacts]);

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
                                element={
                                    <ContactList
                                        user={user}
                                        contacts={contacts}
                                        retrieveContacts={retrieveContacts}
                                    />
                                }
                            />
                            <Route
                                exact
                                path="/profile"
                                element={
                                    <div className="form-container">
                                        <UserProfile user={user} />
                                    </div>
                                }
                            />
                            <Route
                                exact
                                path="/add-contact"
                                element={
                                    <div className="form-container">
                                        <ContactForm
                                            editDisabled={false}
                                            newContact={true}
                                            userId={user.googleId}
                                            retrieveContacts={retrieveContacts}
                                        />
                                    </div>
                                }
                            />
                            <Route
                                exact
                                path="/add-note"
                                element={
                                    <div className="form-container">
                                        <NoteForm />
                                    </div>
                                }
                            />
                        </>
                    ) : (
                        ''
                    )}
                </Routes>
                {!user && (
                    <div className="form-container login-container">
                        <Login
                            user={user}
                            setUser={setUser}
                            clientId={clientId}
                        />
                    </div>
                )}
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
