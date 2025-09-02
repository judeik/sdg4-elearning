// src/pages/students/StudentProfile.js
// A student profile page for a SaaS e-learning platform using React and React-Bootstrap.
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Card } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function StudentProfile() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend profile update
    setMessage("Profile updated successfully (placeholder).");
  };

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">My Profile</h2>

          {message && <Alert variant="success">{message}</Alert>}

          <Row>
            <Col xs={12} md={6}>
              <Card className="shadow-sm p-3">
                <Form onSubmit={handleSubmit} aria-label="Student profile form">
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100">
                    Update Profile
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
