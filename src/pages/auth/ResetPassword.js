// src/pages/auth/ResetPassword.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!formData.newPassword || !formData.confirmPassword) {
      setError("Please fill in all fields.");
      setMessage("");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setMessage("");
      return;
    }

    if (formData.newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      setMessage("");
      return;
    }

    setError("");
    // Placeholder for backend password reset integration
    setMessage("Password has been successfully reset (placeholder).");
  };

  return (
    <>
      <AppNavbar />

      <section className="py-5" aria-label="Reset password page">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <h2 className="mb-4 text-center">Reset Your Password</h2>

              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}

              <Form onSubmit={handleSubmit} aria-label="Reset password form">
                <Form.Group controlId="formNewPassword" className="mb-3">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="newPassword"
                    placeholder="Enter new password"
                    value={formData.newPassword}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3">
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm new password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    aria-required="true"
                  />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Reset Password
                </Button>

                <p className="text-center mt-3">
                  Remembered your password? <a href="/login">Login</a>
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
