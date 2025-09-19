import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar className="romantic-navbar" expand="lg" collapseOnSelect>
            <Container className="romantic-container justify-content-center">
                <Navbar.Brand as={NavLink} to="/" className="romantic-brand">
                    Karen No Uta
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="romantic-nav ms-auto">
                        <Nav.Link as={NavLink} to="/" className="nav-link">
                            <span className="desktop-text">Home</span>
                            <span className="mobile-text">Home</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter1" className="nav-link">
                            <span className="desktop-text">Chapter 1</span>
                            <span className="mobile-text">C1</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter2" className="nav-link">
                            <span className="desktop-text">Chapter 2</span>
                            <span className="mobile-text">C2</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter3" className="nav-link">
                            <span className="desktop-text">Chapter 3</span>
                            <span className="mobile-text">C3</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/chapter4" className="nav-link">
                            <span className="desktop-text">Chapter 4</span>
                            <span className="mobile-text">C4</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/gallery" className="nav-link">
                            <span className="desktop-text">Gallery</span>
                            <span className="mobile-text">Gallery</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/decisions" className="nav-link">
                            <span className="desktop-text">Decisions</span>
                            <span className="mobile-text">Decisions</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;