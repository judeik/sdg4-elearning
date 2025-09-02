// src/pages/payment/PaymentPlans.js
// Placeholder Payment Plans page
// Future integration points for Stripe, PayPal, and PayStack are commented out
import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

const plans = [
  { name: "Free", price: "$0", features: ["Access to limited courses"] },
  { name: "Pro", price: "$29/month", features: ["All courses", "Certificates"] },
  { name: "Premium", price: "$49/month", features: ["All Pro features", "1-on-1 Mentorship"] },
];

const PaymentPlans = () => {
  return (
    <Container className="py-5">
      <h1 className="mb-4">Subscription Plans</h1>
      <Row>
        {plans.map((plan, idx) => (
          <Col key={idx} md={4} className="mb-3">
            <Card className="shadow-sm h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title>{plan.name}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted">{plan.price}</Card.Subtitle>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <Button
                  variant={plan.name === "Pro" ? "primary" : "outline-primary"}
                  className="mt-auto mb-2"
                  aria-label={`Subscribe to ${plan.name} plan`}
                >
                  Subscribe
                </Button>

                {/* Payment Gateway Placeholders for Future Integration */}
                <div className="d-flex flex-column gap-2">
                  {/*
                  <Button
                    variant="dark"
                    onClick={() => console.log(`Stripe placeholder for ${plan.name}`)}
                    aria-label={`Pay with Stripe for ${plan.name}`}
                  >
                    Pay with Stripe
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() => console.log(`PayPal placeholder for ${plan.name}`)}
                    aria-label={`Pay with PayPal for ${plan.name}`}
                  >
                    Pay with PayPal
                  </Button>

                  <Button
                    variant="info"
                    onClick={() => console.log(`PayStack placeholder for ${plan.name}`)}
                    aria-label={`Pay with PayStack for ${plan.name}`}
                  >
                    Pay with PayStack
                  </Button>
                  */}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PaymentPlans;
// Future payment gateway integrations (commented out for now)
// import { loadStripe } from '@stripe/stripe-js';
// import { PayPalButton } from 'react-paypal-button-v2';
// import PaystackButton from 'react-paystack';