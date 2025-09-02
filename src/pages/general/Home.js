// src/pages/general/Home.js
// This is the Home page component
import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <AppNavbar />

      {/* Hero Section */}
      <section className="py-5 text-center bg-light" aria-label="Hero section">
        <Container>
          <h1 className="display-4">Learn Anything, Anywhere</h1>
          <p className="lead">
            Join thousands of students and instructors on our SaaS E-Learning platform.
          </p>
          <Button href="/register" variant="primary" size="lg" className="mt-3">
            Get Started
          </Button>
        </Container>
      </section>

      {/* Featured Courses Carousel */}
      <section className="py-5" aria-label="Featured courses">
        <Container>
          <h2 className="mb-4 text-center">Featured Courses</h2>
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/images/course1.jpg"
                alt="React for Beginners course banner"
              />
              <Carousel.Caption>
                <h3>React for Beginners</h3>
                <p>Start building dynamic web apps with React.js today!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/assets/images/course2.jpg"
                alt="HTML & CSS Mastery course banner"
              />
              <Carousel.Caption>
                <h3>HTML & CSS Mastery</h3>
                <p>Learn modern web design techniques from scratch.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section className="sdg-info">
        <h2>About SDG 4 – Quality Education</h2>
        <p>
          Sustainable Development Goal 4 (SDG 4) is a global commitment to:
          ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
        </p>
        <ul>
          <li><strong>Target 4.1:</strong> Free primary and secondary education by 2030</li>
          <li><strong>Target 4.5:</strong> Eliminate gender disparities and ensure equal access</li>
          <li><strong>Target 4.7:</strong> Promote education for sustainable development and global citizenship</li>
        </ul>
        <p>
          Learn more at the <a href="https://www.unesco.org/sdg4education2030/en/knowledge-hub" target="_blank" rel="noopener noreferrer">
            UNESCO SDG 4 Knowledge Hub</a>.
        </p>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 text-center bg-secondary text-white" aria-label="Call to action">
        <Container>
          <h2>Start Learning Today</h2>
          <p className="lead">Sign up and explore hundreds of courses instantly.</p>
          <Button href="/register" variant="light" size="lg">
            Sign Up Now
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
