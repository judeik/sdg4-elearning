// src/pages/general/CourseDetails.js
// This is the Course Details page component
import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CourseDetails() {
  // Sample course details
  const course = {
    title: "React for Beginners",
    instructor: "John Doe",
    description: "Start building dynamic web apps with React.js today!",
    syllabus: [
      "Introduction to React",
      "JSX & Components",
      "State & Props",
      "Hooks Overview",
      "Building a Todo App",
    ],
    lessons: [
      { title: "Lesson 1: Introduction", type: "video" },
      { title: "Lesson 2: JSX Basics", type: "video" },
      { title: "Lesson 3: State & Props", type: "text" },
    ],
  };

  return (
    <>
      {/* Navbar */}
      <AppNavbar />

      {/* Course Header */}
      <section className="py-5 bg-light" aria-label="Course header">
        <Container>
          <h1 className="display-5">{course.title}</h1>
          <p className="lead">{course.description}</p>
          <p className="text-muted">Instructor: {course.instructor}</p>
          <Button href="/checkout" variant="primary" size="lg">
            Enroll Now
          </Button>
        </Container>
      </section>

      {/* Course Content */}
      <section className="py-5" aria-label="Course content">
        <Container>
          <Row>
            {/* Left Column: Lessons & Syllabus */}
            <Col lg={8} md={12} className="mb-4">
              <h2 className="mb-3">Lessons</h2>
              <ListGroup as="ul">
                {course.lessons.map((lesson, idx) => (
                  <ListGroup.Item as="li" key={idx}>
                    {lesson.title} ({lesson.type})
                  </ListGroup.Item>
                ))}
              </ListGroup>

              <h2 className="mt-4 mb-3">Syllabus</h2>
              <ListGroup as="ul">
                {course.syllabus.map((item, idx) => (
                  <ListGroup.Item as="li" key={idx}>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            {/* Right Column: Instructor & Enrollment */}
            <Col lg={4} md={12}>
              <Card className="shadow-sm mb-4">
                <Card.Body>
                  <Card.Title>Instructor</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {course.instructor}
                  </Card.Subtitle>
                  <Card.Text>
                    {course.instructor} is an experienced web developer with years of teaching React.
                  </Card.Text>
                  <Button href="/checkout" variant="success">
                    Enroll Now
                  </Button>
                </Card.Body>
              </Card>

              {/* Quiz Placeholder */}
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title>Quizzes</Card.Title>
                  <Card.Text>Quizzes will be available after enrollment.</Card.Text>
                  <Button variant="info" disabled>
                    Start Quiz
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
