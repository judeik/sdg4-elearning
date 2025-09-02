// src/pages/instructors/InstructorCourses.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import InstructorSidebar from "../../components/InstructorSidebar";
import { Link } from "react-router-dom";

export default function InstructorCourses() {
  const courses = [
    { id: 1, title: "React for Beginners", students: 50 },
    { id: 2, title: "JavaScript Advanced", students: 40 },
    { id: 3, title: "CSS Animations", students: 30 },
  ];

  return (
    <>
      <AppNavbar />
      <div className="d-flex">
        <InstructorSidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">My Courses</h2>

          <Row xs={1} md={3} className="g-4">
            {courses.map((course) => (
              <Col key={course.id}>
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title>{course.title}</Card.Title>
                    <Card.Text>{course.students} students enrolled</Card.Text>

                    {/* Navigate to InstructorCourseDetails for this course */}
                    <Link
                      to={`/instructor/course-details/${course.id}`}
                      className="btn btn-info me-2"
                    >
                      View Students
                    </Link>

                    {/* Navigate to CourseEditor */}
                    <Link
                      to={`/instructor/course-editor/${course.id}`}
                      className="btn btn-primary"
                    >
                      Edit Course
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
}
