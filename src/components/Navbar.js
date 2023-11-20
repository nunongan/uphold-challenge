import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './styles.css';

function NavigationBar() {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      className="bg-body-tertiary navbar"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-lg-flex justify-content-between"
        >
          <Nav className="">
            <Navbar.Brand href="#" className="my-3 mx-2 ">
              <a href="https://uphold.com/en-eu">
                <Image src="/logo.svg" />
              </a>
            </Navbar.Brand>
            <Nav className="my-3 align-items-center mx-2">
              <Nav.Link
                href="#personal"
                className="navAnchor"
              >
                Personal
              </Nav.Link>
              <Nav.Link
                href="#business"
                className="navAnchor"
              >
                Business
              </Nav.Link>
              <Nav.Link
                href="#partners"
                className="navAnchor"
              >
                Partners
              </Nav.Link>
            </Nav>
          </Nav>

          <Nav className="ml-auto d-flex align-items-center">
            <Button className="rounded-pill loginBtn w-25 w-md-25 w-lg-100">
              Log In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
