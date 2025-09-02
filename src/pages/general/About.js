// src/pages/general/About.js
// This is the About page component
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <AppNavbar />

      <section className="py-5 bg-light" aria-label="About page header">
        <Container>
          <h1 className="display-5 text-center mb-3">About Our Platform</h1>
          <p className="text-center lead">
            Our SaaS E-Learning platform is designed to help students, instructors, and institutions achieve their learning goals with ease.
          </p>
        </Container>
      </section>

      <section className="py-5" aria-label="Platform features">
        <Container>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Quality Courses</Card.Title>
                  <Card.Text>Access expertly curated courses across various domains.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Expert Instructors</Card.Title>
                  <Card.Text>Learn from experienced professionals and educators.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm h-100">
                <Card.Body>
                  <Card.Title>Flexible Learning</Card.Title>
                  <Card.Text>Learn at your own pace with our intuitive platform.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
}
