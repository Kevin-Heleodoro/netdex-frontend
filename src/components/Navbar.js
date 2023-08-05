import { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import Logout from './Logout';
import Login from './Login';

function Header({ user, setUser, clientId }) {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            bg="primary"
            sticky="top"
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
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        {user ? (
                            <Nav.Link as={Link} to="/profile">
                                Profile
                            </Nav.Link>
                        ) : (
                            ''
                        )}
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {user ? (
                    <Logout setUser={setUser} clientId={clientId} />
                ) : (
                    <Login setUser={setUser} />
                )}
            </Container>
        </Navbar>
    );
}

export default Header;
