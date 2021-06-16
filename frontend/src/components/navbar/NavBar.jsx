import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Gardenly</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link className="text-white" to="/">My Garden</Link></Nav.Link>
                    <Nav.Link><Link className="text-white" to="/signup">Sign Up</Link></Nav.Link>
                    <Nav.Link><Link className="text-white" to="/signin">Sign In</Link></Nav.Link>
                    <Nav.Link><Link className="text-white" to="/">Sign Out</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar