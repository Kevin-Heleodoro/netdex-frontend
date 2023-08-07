import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Logout from './OAuth/Logout';
import Login from './OAuth/Login';

function Header({ user, setUser, clientId }) {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            sticky="top"
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="/images/rolodex-logo.png"
                        alt="netdex logo"
                        className="netdex-logo"
                    />
                    NETDEX
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto navbar">
                        <div className="navbar-left">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            {/* {user ? (
                                <Nav.Link as={Link} to="/profile">
                                    Profile
                                </Nav.Link>
                            ) : (
                                ''
                            )} */}
                        </div>
                        {user ? (
                            <div className="navbar-right">
                                <Nav.Link as={Link} to="/profile">
                                    Profile
                                </Nav.Link>
                                <NavDropdown
                                    title="User Actions"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item
                                        as={Link}
                                        to="/add-contact"
                                    >
                                        Add a Contact
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/add-note">
                                        Add a Note
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>
                                        <Logout
                                            setUser={setUser}
                                            clientId={clientId}
                                        />
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </div>
                        ) : (
                            <div className="navbar-login">
                                <Login setUser={setUser} />
                            </div>
                        )}
                    </Nav>
                    {/* {user ? '' : <Login setUser={setUser} />} */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
