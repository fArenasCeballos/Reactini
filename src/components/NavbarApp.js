import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png'
import './Css/NavbarApp.css';

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand ><img class="logo" src={logo}/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="Nava">
          <Nav navbarScroll>
            <Nav.Link classname="ItemN" href='/'>Casa</Nav.Link>
            <Nav.Link classname="ItemN" href='/Personajes'>Personajes</Nav.Link>
            <Nav.Link classname="ItemN" href='/Planetas'>Planetas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;