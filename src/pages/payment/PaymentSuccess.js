// src/pages/payment/PaymentSuccess.js
// Placeholder Payment Success page
// This page confirms successful payment and provides navigation back to home.
import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card className="shadow-sm p-5 text-center">
        <h1 className="mb-3">Payment Successful!</h1>
        <p>
          Thank you for your subscription. Your payment has been processed successfully.
        </p>

        <Button
          variant="primary"
          onClick={() => navigate("/")}
          aria-label="Go to Home"
          className="mb-3"
        >
          Go to Home
        </Button>

        {/* Payment Gateway Confirmation Placeholders */}
        <div className="d-flex flex-column gap-2">
          {/*
          // Example: Confirm payment with Stripe
          <Button
            variant="dark"
            onClick={() => console.log("Stripe confirmation placeholder")}
            aria-label="Confirm Stripe payment"
          >
            Confirm Stripe Payment
          </Button>

          // Example: Confirm payment with PayPal
          <Button
            variant="secondary"
            onClick={() => console.log("PayPal confirmation placeholder")}
            aria-label="Confirm PayPal payment"
          >
            Confirm PayPal Payment
          </Button>

          // Example: Confirm payment with PayStack
          <Button
            variant="info"
            onClick={() => console.log("PayStack confirmation placeholder")}
            aria-label="Confirm PayStack payment"
          >
            Confirm PayStack Payment
          </Button>
          */}
        </div>
      </Card>
    </Container>
  );
};

export default PaymentSuccess;
