import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className="romantic-navbar" expand="lg">
            <Container className="romantic-container justify-content-center">
                <Navbar.Brand as={NavLink} to="/" className="romantic-brand">
                    Karen No Uta
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="romantic-nav ms-auto">
                        <Nav.Link as={NavLink} to="/chapter1" className="nav-link">Chapter 1</Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter2" className="nav-link">Chapter 2</Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter3" className="nav-link">Chapter 3</Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter4" className="nav-link">Chapter 4</Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery" className="nav-link">Gallery</Nav.Link>
                        <Nav.Link as={NavLink} to="/decisions" className="nav-link">Decisions</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;