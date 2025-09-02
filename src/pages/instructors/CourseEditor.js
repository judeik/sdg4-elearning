// src/pages/instructors/CourseEditor.js
import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstructorSidebar from "../../components/InstructorSidebar";

export default function CourseEditor() {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    lessons: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for backend API
    setMessage("Course saved successfully (placeholder).");
  };

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <InstructorSidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Course Editor</h2>

          {message && <Alert variant="success">{message}</Alert>}

          <Card className="shadow-sm p-3">
            <Form onSubmit={handleSubmit} aria-label="Course editor form">
              <Form.Group controlId="formTitle" className="mb-3">
                <Form.Label>Course Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={course.title}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </Form.Group>

              <Form.Group controlId="formDescription" className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </Form.Group>

              <Form.Group controlId="formLessons" className="mb-3">
                <Form.Label>Lessons (comma-separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="lessons"
                  value={course.lessons}
                  onChange={handleChange}
                  required
                  aria-required="true"
                />
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100">
                Save Course
              </Button>
            </Form>
          </Card>
        </Container>
      </div>

      <Footer />
    </>
  );
}
