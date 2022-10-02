import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    //Navbar from react-bootstrap set up to direct the routes
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
            <Navbar.Brand as={Link} to={'/'}>Home</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to={'/orders'}>Order Info</Nav.Link>
                <Nav.Link as={Link} to={'/reviews'}>Reviews</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
     
  )
}

export default NavBar