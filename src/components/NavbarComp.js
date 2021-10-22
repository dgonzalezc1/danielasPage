import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css"; 

function NavbarComp() {
    return (
        <div className="Navbar">
            <Navbar expand="lg">
                <Container className="navContainer">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="navCollapse" id="basic-navbar-nav">
                        <Nav className="mr-auto navPrincipal" activeKey="#home">
                            <Nav.Link href="#home">HOME</Nav.Link>
                            <Nav.Link href="#about">ABOUT</Nav.Link>
                            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                            <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
                            <Nav.Link href="#education">EDUCATION</Nav.Link>
                            <Nav.Link href="#interests">INTERESTS</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
