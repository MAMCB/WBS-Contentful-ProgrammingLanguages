// src/NavBar/index.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './index.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav>
            <Nav.Link href="#">Programming Languages</Nav.Link>
            <Nav.Link href="#">Scripting Languages</Nav.Link>
            <Nav.Link href="#">Querying Languages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
