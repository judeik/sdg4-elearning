// src/pages/payment/Checkout.js
// Placeholder Checkout page with basic payment form
// Future integration points for Stripe, PayPal, and PayStack are indicated
import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Checkout = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment processed (placeholder)");
    // TODO: Integrate backend API for payment processing
    // For example:
    // 1. Stripe API integration
    // 2. PayPal API integration
    // 3. PayStack API integration
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Checkout</h1>
      <Card className="shadow-sm p-4">
        <Form onSubmit={handleSubmit} aria-label="Checkout Form">
          <Form.Group className="mb-3">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              name="cardName"
              value={paymentInfo.cardName}
              onChange={handleChange}
              aria-label="Cardholder Name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="1234 5678 9012 3456"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              aria-label="Card Number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex gap-2">
            <Form.Label className="w-100">Expiry</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/YY"
              name="expiry"
              value={paymentInfo.expiry}
              onChange={handleChange}
              aria-label="Expiry Date"
              required
            />
            <Form.Label className="w-100">CVC</Form.Label>
            <Form.Control
              type="text"
              placeholder="123"
              name="cvc"
              value={paymentInfo.cvc}
              onChange={handleChange}
              aria-label="CVC"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" aria-label="Submit Payment">
            Pay Now
          </Button>
        </Form>

        {/* Payment Gateway Placeholders for Future Integration */}
        <div className="mt-4">
          {/* Stripe Payment Button */}
          {/*
          <Button variant="dark" onClick={() => console.log("Stripe Checkout placeholder")}>
            Pay with Stripe
          </Button>
          */}

          {/* PayPal Payment Button */}
          {/*
          <Button variant="secondary" onClick={() => console.log("PayPal Checkout placeholder")}>
            Pay with PayPal
          </Button>
          */}

          {/* PayStack Payment Button */}
          {/*
          <Button variant="info" onClick={() => console.log("PayStack Checkout placeholder")}>
            Pay with PayStack
          </Button>
          */}
        </div>
      </Card>
    </Container>
  );
};

export default Checkout;
// Note: Actual payment integration (e.g., Stripe, PayPal, PayStack) is not included in this placeholder code.