// src/pages/auth/ResendVerification.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResendVerification() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!email) {
      setError("Please enter your email address.");
      setMessage("");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    setError("");
    // Placeholder for backend verification resend integration
    setMessage("If this email exists, a verification link has been resent (placeholder).");
  };

  return (
    <>
      <AppNavbar />

      <section className="py-5" aria-label="Resend verification page">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h2 className="mb-4 text-center">Resend Verification Email</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}

              <Form onSubmit={handleSubmit} aria-label="Resend verification form">
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Resend Verification Link
                </Button>

                <p className="text-center mt-3">
                  Already verified? <a href="/login">Login</a>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
