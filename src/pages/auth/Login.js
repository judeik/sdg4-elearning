// src/pages/auth/Login.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic frontend validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    // Regex email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // Placeholder for backend login integration
    alert("Login successful (placeholder)");
  };

  return (
    <>
      <AppNavbar />

      <section className="py-5" aria-label="Login page">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h2 className="mb-4 text-center">Login to Your Account</h2>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit} aria-label="Login form">
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-required="true"
                  />
                </Form.Group>

                <div className="d-flex justify-content-between mb-3">
                  <a href="/forgot-password" className="small">
                    Forgot Password?
                  </a>
                  <a href="/resend-verification" className="small">
                    Resend Link
                  </a>
                </div>

                <Button type="submit" variant="primary" className="w-100">
                  Login
                </Button>

                <p className="text-center mt-3">
                  Don't have an account? <a href="/register">Sign Up</a>
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
