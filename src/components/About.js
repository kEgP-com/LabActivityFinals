import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col xs={12} md={4} className="mb-4 mb-md-0">
            <Image
              src=""
              roundedCircle
              fluid
              alt="Profile"
            />
          </Col>
          <Col xs={12} md={8}>
            <h2>About Me</h2>
            <p>
              I'm a computer Science student at Pamantasan ng Cabuyao who's passionate about creating software 
              solutions that make everyday tasks simpler and more efficient.

              My Interest span across UI/UX design, front-end development, and digital art, where I enjoy combining creativity
              with logic with logic to build meaningfull user experiences.


              Here is my Contact:
              Email: prudente.ke.g@gmail.com
              Contact No.: 09305706725
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
