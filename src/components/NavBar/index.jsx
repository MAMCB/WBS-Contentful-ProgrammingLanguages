import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid> {/*to occupy the entire width*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Programming languages</Nav.Link>
            <Nav.Link href="#link">Scripting languages</Nav.Link>
            <Nav.Link href="#link">Query languages</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
