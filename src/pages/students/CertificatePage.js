// src/pages/students/CertificatesPage.js
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function CertificatesPage() {
  // Sample certificate data
  const certificates = [
    { course: "React for Beginners", issuedDate: "2025-08-31", link: "/assets/certificates/react.pdf" },
    { course: "JavaScript Advanced", issuedDate: "2025-08-20", link: "/assets/certificates/js.pdf" },
    { course: "CSS Animations", issuedDate: "2025-08-10", link: "/assets/certificates/css.pdf" },
  ];

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">My Certificates</h2>

          <Row xs={1} md={3} className="g-4">
            {certificates.map((cert, idx) => (
              <Col key={idx}>
                <Card className="shadow-sm h-100">
                  <Card.Body>
                    <Card.Title>{cert.course}</Card.Title>
                    <Card.Text>Issued: {cert.issuedDate}</Card.Text>
                    <Button
                      variant="primary"
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Download certificate for ${cert.course}`}
                    >
                      Download PDF
                    </Button>
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
