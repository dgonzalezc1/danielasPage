import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./Navbar.css"; 
import { Link } from "react-scroll";

function NavbarComp() {
    return (
        <div className="Navbar" id="Navbar">
            <Navbar expand="lg">
                <Container className="navContainer">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="navCollapse" id="basic-navbar-nav">
                        <Nav className="mr-auto navPrincipal" activeKey="Banner">
                            <Link to="Banner" className="active">HOME</Link>
                            <Link to="About">ABOUT</Link>
                            <Link to="Portfolio">PORTFOLIO</Link>
                            <Nav.Link href="Experience">EXPERIENCE</Nav.Link>
                            <Nav.Link href="Education">EDUCATION</Nav.Link>
                            <Nav.Link href="Interests">INTERESTS</Nav.Link>
                            <Nav.Link href="Contact">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
