import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <section id="contact" className="py-5 bg-white">
      <Container>

        <h2 className="text-center mb-4">Contact Me @: </h2>
        <Form className="mx-auto" style={{ maxWidth: "500px" }}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </section>
  );
}

export default Contact;
