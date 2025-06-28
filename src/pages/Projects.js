import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTrash, FaUniversity, FaHotel, FaIndustry, FaBuilding, FaConciergeBell } from "react-icons/fa";
import "../styles/Projects.css";

import proj1 from "../assets/csmc_garbage.webp";
import proj2 from "../assets/gmc_aurangabad.webp";
import proj3 from "../assets/lemon_tree.webp";
import proj4 from "../assets/cipet.webp";
import proj5 from "../assets/shivajinagar_site.webp";
import proj6 from "../assets/a_square_hotel.webp";

function Projects() {
  const projects = [
    {
      icon: <FaTrash />,
      image: proj1,
      title: "CSMC Garbage Depot",
      description: "Installed high-capacity hydrant pumps to suppress fires quickly at the municipal garbage depot, protecting the environment and community.",
    },
    {
      icon: <FaUniversity />,
      image: proj2,
      title: "Government Medical College",
      description: "Comprehensive fire safety systems installed at Government Medical College including alarms, extinguishers, and hydrants for institutional safety.",
    },
    {
      icon: <FaHotel />,
      image: proj3,
      title: "Hotel Lemon Tree",
      description: "Fire alarm systems and hydrant pumps implemented, meeting strict hotel safety regulations for guest protection.",
    },
    {
      icon: <FaIndustry />,
      image: proj4,
      title: "CIPET",
      description: "Installed fire safety equipment and provided trained crew to safeguard this critical plastic engineering and manufacturing facility.",
    },
    {
      icon: <FaBuilding />,
      image: proj5,
      title: "Shivajinagar Commercial Complex",
      description: "Turnkey fire protection project for a prominent commercial real estate site, including extinguishers, smoke detectors, and alarms.",
    },
    {
      icon: <FaConciergeBell />,
      image: proj6,
      title: "A Square Executive Hotel",
      description: "Supplied and installed fire detection and suppression systems tailored to hospitality safety requirements in a bustling hotel zone.",
    },
  ];

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <div className="projects-hero-section">
        <div className="hero-overlay">
          <Container className="hero-content">
            <h1>Showcasing Our Fire Safety Excellence</h1>
            <p>Trusted Solutions for Leading Industries and Institutions.</p>
            <Button variant="danger" href="/contact" className="hero-button">
              Explore Our Work
            </Button>
          </Container>
        </div>
      </div>

      {/* Projects Section */}
      <Container fluid className="projects-content-section">
        <Container>
          <h2 className="text-center mb-5">Our Landmark Projects in Chhatrapati Sambhajinagar</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className="project-card">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                  <Card.Body>
                    <div className="project-icon">{project.icon}</div>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Projects;