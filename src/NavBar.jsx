import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navSheet.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className='myNavBar'>
      <Container className='hope'>
        <Navbar.Brand as={Link} to="/" id='special-logo'>
          <img src="./charity-svgrepo-com.svg" alt="logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='main-nav'>Home</NavLink>
            <NavLink to="/about" className='main-nav' >About</NavLink>
            <NavLink to="/causes"className='main-nav'>Causes</NavLink>
            <NavLink to="/gallery"className='main-nav'>Gallery</NavLink>
            <NavLink to="/volunteer" className='main-nav'>Volunteer</NavLink>
            <NavLink to="/contact" className='main-nav'>Contact</NavLink>
            <NavLink to="/donate" id='donate-special' className='main-nav'>Donate</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Link className='donate-link' to="/donate"> 
          <button className='butt'>Donate Now 💛</button>
        </Link>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
