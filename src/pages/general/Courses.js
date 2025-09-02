// src/pages/general/Courses.js
// This is the Courses page component
import React from "react";
import { Container, Row, Col, Card, Badge, Button, Form } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Courses() {
  // Sample courses data
  const courses = [
    {
      title: "React for Beginners",
      instructor: "John Doe",
      description: "Start building dynamic web apps with React.js today!",
      badge: "New",
      image: "/assets/images/course1.jpg",
    },
    {
      title: "HTML & CSS Mastery",
      instructor: "Jane Smith",
      description: "Learn modern web design techniques from scratch.",
      badge: "Popular",
      image: "/assets/images/course2.jpg",
    },
    {
      title: "JavaScript Essentials",
      instructor: "Mark Wilson",
      description: "Master core JavaScript concepts for web development.",
      badge: "Recommended",
      image: "/assets/images/course3.jpg",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <AppNavbar />

      {/* Page Header */}
      <section className="py-5 bg-light" aria-label="Courses page header">
        <Container>
          <h1 className="display-5 text-center mb-3">Our Courses</h1>
          <p className="text-center lead">Explore and enroll in hundreds of online courses.</p>
        </Container>
      </section>

      {/* Search / Filter */}
      <section className="py-4" aria-label="Course search and filter">
        <Container>
          <Form className="d-flex justify-content-center mb-4">
            <Form.Control
              type="search"
              placeholder="Search courses..."
              className="me-2"
              aria-label="Search courses"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Container>
      </section>

      {/* Courses Grid */}
      <section className="py-4" aria-label="Course listings">
        <Container>
          <Row xs={1} sm={2} md={3} className="g-4">
            {courses.map((course, index) => (
              <Col key={index}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={course.image} alt={`${course.title} course image`} />
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title>{course.title}</Card.Title>
                      <Badge bg="info">{course.badge}</Badge>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted">{course.instructor}</Card.Subtitle>
                    <Card.Text>{course.description}</Card.Text>
                    {/* Placeholder for course progress */}
                    <div className="progress mb-2" aria-label="Course progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        25%
                      </div>
                    </div>
                    <Button href={`/courses/${course.title.replace(/\s+/g, "-").toLowerCase()}`} variant="primary">
                      View Course
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
