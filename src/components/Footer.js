// src/components/Footer.js
// A responsive footer for a SaaS e-learning platform using React and React-Bootstrap.
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto" aria-label="Footer">
      <Container>
        <Row className="align-items-center">
          {/* Logo & Branding */}
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <img
              src="/assets/images/logo.png"
              alt="SaaS E-Learning Platform Logo"
              width="140"
              className="mb-2"
            />
            <p className="small">&copy; {new Date().getFullYear()} SaaS E-Learning. All rights reserved.</p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="text-center mb-3 mb-md-0">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/courses" className="text-light text-decoration-none">Courses</a></li>
              <li><a href="/pricing" className="text-light text-decoration-none">Pricing</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Social / Contact */}
          <Col md={4} className="text-center text-md-end">
            <h6 className="text-uppercase">Connect with us</h6>
            <a href="https://facebook.com" className="text-light me-2" aria-label="Facebook">FB</a>
            <a href="https://twitter.com" className="text-light me-2" aria-label="Twitter">TW</a>
            <a href="https://linkedin.com" className="text-light" aria-label="LinkedIn">LI</a>
            <p className="mt-2 small">Email: <a href="mailto:support@saas-elearning.com" className="text-light">support@saas-elearning.com</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
