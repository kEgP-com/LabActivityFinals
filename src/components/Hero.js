import React from "react";
import { Container, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero() {
  return (
    <section
      className="bg-light d-flex align-items-center text-center"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h1 className="display-4 fw-bold">Hi, I'm Kin Edrian Prudente</h1>
        <p className="lead mb-4">
          Aspiring Software Developer | Digital Artist | UI/UX Enthusiast 
        </p>
        <Button variant="primary" size="lg" href="#projects">
          View Resume
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
