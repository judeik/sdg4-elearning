// src/pages/general/Pricing.js
// This is the Pricing page component
import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import AppNavbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Pricing() {
  // Sample subscription plans
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Access to free courses", "Community support", "Basic progress tracking"],
      popular: false,
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: ["All Free features", "Access to premium courses", "Certificates of completion", "Priority support"],
      popular: true,
    },
    {
      name: "Premium",
      price: "$59/mo",
      features: ["All Pro features", "1-on-1 mentorship", "Exclusive webinars", "Advanced analytics"],
      popular: false,
    },
  ];

  return (
    <>
      {/* Navbar */}
      <AppNavbar />

      {/* Page Header */}
      <section className="py-5 bg-light" aria-label="Pricing page header">
        <Container>
          <h1 className="display-5 text-center mb-3">Pricing Plans</h1>
          <p className="text-center lead">
            Choose a subscription plan that fits your learning goals.
          </p>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-5" aria-label="Subscription pricing plans">
        <Container>
          <Row xs={1} md={3} className="g-4 justify-content-center">
            {plans.map((plan, index) => (
              <Col key={index}>
                <Card className={`h-100 shadow-sm border-0 ${plan.popular ? "border-primary" : ""}`}>
                  <Card.Body className="d-flex flex-column">
                    {plan.popular && (
                      <Badge bg="primary" className="mb-2 align-self-start">
                        Most Popular
                      </Badge>
                    )}
                    <Card.Title className="text-center">{plan.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-center">{plan.price}</Card.Subtitle>
                    <ul className="list-unstyled flex-grow-1">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          ✅ {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant={plan.popular ? "primary" : "outline-primary"} className="mt-3">
                      Choose Plan
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
