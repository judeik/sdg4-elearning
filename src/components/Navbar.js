// src/components/Navbar.js
// A responsive navigation bar for a SaaS e-learning platform using React, React Router, and React-Bootstrap.
import React, { useState } from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ import Link from React Router

export default function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      expanded={expanded}
      aria-label="Main navigation"
      className="shadow-sm"
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" aria-label="Homepage">
          <img
            src="/assets/images/logo.png"
            alt="SaaS E-Learning Platform Logo"
            width="150"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        {/* Hamburger for mobile */}
        <Navbar.Toggle
          aria-controls="main-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-navbar-nav">
          {/* Main Links */}
          <Nav className="ms-auto" role="menu">
            <Nav.Link
              as={Link}
              to="/"
              role="menuitem"
              onClick={() => setExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/courses"
              role="menuitem"
              onClick={() => setExpanded(false)}
            >
              Courses
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/pricing"
              role="menuitem"
              onClick={() => setExpanded(false)}
            >
              Pricing
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              role="menuitem"
              onClick={() => setExpanded(false)}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              role="menuitem"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>

            {/* Auth Buttons */}
            <Nav.Link as={Link} to="/login" role="menuitem">
              <Button variant="outline-primary" className="ms-2">
                Login
              </Button>
            </Nav.Link>
            <Nav.Link as={Link} to="/register" role="menuitem">
              <Button variant="primary" className="ms-2">
                Sign Up
              </Button>
            </Nav.Link>

            {/* Optional Dropdown for logged-in users */}
            {/*
            <NavDropdown title="Account" id="user-nav-dropdown" role="menu">
              <NavDropdown.Item as={Link} to="/student/dashboard">
                Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/student/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
