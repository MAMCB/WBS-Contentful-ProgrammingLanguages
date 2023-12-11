import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'; 

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container id="navBar" fluid>
        {" "}
        {/*to occupy the entire width*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">
              <h5>Home</h5>
            </NavLink>
            <NavLink to="/programming">
              <h5>Programming languages</h5>
            </NavLink>
            <NavLink to="/script">
              <h5>Scripting languages</h5>
            </NavLink>
            <NavLink to="/query">
              <h5>Query languages</h5>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
