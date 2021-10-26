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
                            <Link to="Experience">EXPERIENCE</Link>
                            <Link to="Education">EDUCATION</Link>
                            {/*<Nav.Link href="Interests">INTERESTS</Nav.Link>*/}
                            <Link to="Footer">CONTACT</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComp
