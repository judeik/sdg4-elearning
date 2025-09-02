// src/pages/students/NotificationsPage.js
// 
import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";

export default function NotificationsPage() {
  const notifications = [
    { message: "New course 'React for Beginners' added.", date: "2025-08-30" },
    { message: "Your subscription has been renewed.", date: "2025-08-01" },
    { message: "Certificate for 'CSS Animations' is available.", date: "2025-08-10" },
  ];

  return (
    <>
      <AppNavbar />

      <div className="d-flex">
        <Sidebar role="navigation" />

        <Container fluid className="p-4">
          <h2 className="mb-4">Notifications</h2>

          <Row>
            <Col xs={12} md={8}>
              <ListGroup variant="flush" aria-label="Student notifications list">
                {notifications.map((notif, idx) => (
                  <ListGroup.Item key={idx}>
                    <strong>{notif.date}:</strong> {notif.message}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
}
