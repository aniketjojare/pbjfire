import React from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { FaShieldAlt, FaBullseye, FaEye } from "react-icons/fa";
import "../styles/About.css";
import shaileshJadhav from "../assets/shailesh.jpg"; // Placeholder for CEO photo
import bhuvaneshManwatkar from "../assets/bhuvanesh.jpg"; // Placeholder for Pune Branch Head photo
import licensePage1 from "../assets/license-page1.jpg"; // License Page 1 image
import licensePage2 from "../assets/license-page2.jpg"; // License Page 2 image

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero-section">
        <div className="hero-overlay">
          <Container className="hero-content">
            <h1>Protecting Lives with PBJ Fire</h1>
            <p>Committed to Safety, Driven by Innovation.</p>
            <Button variant="danger" href="/contact" className="hero-button">
              Secure Your Future Now
            </Button>
          </Container>
        </div>
      </div>

      {/* Who We Are, Mission, Vision */}
      <Container fluid className="about-content-section">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <FaShieldAlt className="about-icon" />
                  <Card.Title>Who We Are</Card.Title>
                  <Card.Text>
                    Since 2015, PBJ Fire has been a trusted leader in fire safety from Chhatrapati Sambhajinagar. We deliver ISI & CE certified fire-fighting equipment, expert consulting, and turnkey installations, ensuring unmatched safety through innovation and reliability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <FaBullseye className="about-icon" />
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    We provide holistic fire safety and surveillance solutions, including fire detection and suppression systems, and advanced CCTV monitoring, to empower organizations. Using cutting-edge technology, with features such as remote monitoring and real-time alerts, and precision installation.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <FaEye className="about-icon" />
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    We aim to be India’s most reliable fire safety partner, a name synonymous with unwavering dependability and cutting-edge solutions. Through a relentless dedication to pioneering safety innovation, fostering deep-rooted trust with our clients, and consistently delivering measurable excellence.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Key People */}
      <Container fluid className="key-people-section">
        <Container>
          <h2 className="text-center mb-5">Our Leadership</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="person-card">
                <div className="person-image-wrapper">
                  <img src={shaileshJadhav} alt="Shailesh Jadhav" className="person-image" />
                </div>
                <Card.Body>
                  <Card.Title>Shailesh Jadhav</Card.Title>
                  <Card.Subtitle>CEO & Founder</Card.Subtitle>
                  <Card.Text>
                    A trailblazing leader with an <strong>unwavering dedication to fire safety</strong>, Shailesh Jadhav founded PBJ Fire to <strong>transform the industry</strong>. Under his guidance, PBJ Fire has become a <strong>reliable name</strong> in <strong>government, commercial, residential, medical and industrial sectors</strong>. His mantra: <em>“Fire safety is a duty to safeguard lives and assets.”</em>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="person-card">
                <div className="person-image-wrapper">
                  <img src={bhuvaneshManwatkar} alt="Bhuvanesh Manwatkar" className="person-image" />
                </div>
                <Card.Body>
                  <Card.Title>Bhuvanesh Manwatkar</Card.Title>
                  <Card.Subtitle>Pune Branch Head</Card.Subtitle>
                  <Card.Text>
                    Spearheading PBJ Fire’s <strong>expansion into Pune</strong>, Bhuvanesh ensures <strong>flawless service delivery</strong>. His <strong>technical mastery and strategic vision</strong> have solidified PBJ Fire’s reputation. Passionate about <strong>innovation and efficiency</strong>, he champions <strong>global safety standards</strong> to address India’s evolving fire safety demands.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Growth Story */}
      <Container fluid className="growth-story-section">
        <Container>
          <h2 className="text-center mb-5">Our Growth Journey</h2>
          <Row>
            <Col md={12}>
              <div className="growth-story-content">
                <p>
                  From our roots in <strong>Chhatrapati Sambhajinagar</strong> to expanding into <strong>Pune and beyond</strong>, PBJ Fire has delivered <strong>landmark fire safety projects</strong> for top industries and institutions. We’ve partnered with <strong>MGM University, Prozone Mall, PVR, INOX, and DRDO</strong>, showcasing our expertise in high-stakes environments. As we grow, our commitment to <strong>quality, trust, and life-saving innovation</strong> remains unwavering.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Government License & Certifications */}
      <Container fluid className="license-section">
        <Container>
          <h2 className="text-center mb-5">Government License & Certifications</h2>
          <p className="text-center mb-4">
            PBJ Fire Services is proud to be a licensed agency under the Maharashtra Fire Prevention
            and Life Safety Measures Act, 2006. Our official license, issued by the Directorate of
            Maharashtra Fire Service, is valid from 10.08.2024 to 09.08.2026.
          </p>
          <Row className="justify-content-center">
            <Col md={6} className="mb-4">
              <Image
                src={licensePage1}
                alt="Page 1 of PBJ Fire Services License from Maharashtra Fire Service"
                fluid
                className="license-image"
              />
            </Col>
            <Col md={6} className="mb-4">
              <Image
                src={licensePage2}
                alt="Page 2 of PBJ Fire Services License from Maharashtra Fire Service"
                fluid
                className="license-image"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default About;