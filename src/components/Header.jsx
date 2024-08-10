import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Bulk Email Tool</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/create-template">Create Template</Nav.Link>
        <Nav.Link as={Link} to="/send-email">Send Email</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
