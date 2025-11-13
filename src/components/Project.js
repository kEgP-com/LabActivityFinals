import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  const projects = [
    { title: "Cofee Management System", description: "A system wherein you can browse and order online your favorite coffee. It was build using Java Swing." },
    { title: "E-OBS", description: "Energy Observer using Python and ESP32 with integration of React Native for mobile application. This system ir application is used to observe energy consumptions such as water bill, electricity, internet and health" },
    { title: "PanahonAhon", description: "Weather app with API integration." },
  ];

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col xs={12} sm={6} lg={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
