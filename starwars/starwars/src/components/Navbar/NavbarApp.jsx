import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import img from '../../assets/logo.jpg';
import './Navbar.css';

const NavbarApp = () => {
  return (
    <div>
      <Navbar className='navbar' bg='dark' varient='ligth'>
        <Container>
          <Navbar.Brand className='brand' href='/'>
            <img src={img} width="70" height="60" />
          </Navbar.Brand>
        </Container>
        <Nav className='link'>
          <Nav.Link><Link className='navlink' to='/personajes'>Personajes</Link></Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarApp;
