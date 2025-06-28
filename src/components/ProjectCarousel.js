import React from "react";
import { Carousel, Container } from "react-bootstrap";
import "../styles/ProjectCarousel.css";

import csmcGarbageDepot from "../assets/csmc_garbage_depot.webp";
import shivajinagarProject from "../assets/shivajinagar_real_estate.webp";
import trainingSession from "../assets/fire_safety_training.webp";

function ProjectCarousel() {
  const projects = [
    {
      image: csmcGarbageDepot,
      title: "CSMC Garbage Depot – High-Capacity Hydrant Pumps",
      description: "Installed robust, high-pressure hydrant pumps for the Chhatrapati Sambhajinagar Municipal Corporation’s garbage depot to ensure rapid water deployment during fire emergencies.",
    },
    {
      image: shivajinagarProject,
      title: "Shivajinagar Commercial Complex – Complete Fire Solution",
      description: "Turnkey fire safety system installation for a major real estate project in Shivajinagar, including sprinklers, alarms, and hydrant systems.",
    },
    {
      image: trainingSession,
      title: "On-Site Training & Maintenance Program",
      description: "PBJ Fire experts delivering hands-on fire safety training and maintenance guidance to client staff — because preparedness saves lives.",
    },
  ];

  return (
    <Container className="project-carousel my-5">
      <h2 className="text-center mb-4">Our Major Projects</h2>
      <Carousel interval={3000} fade>
        {projects.map((project, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 carousel-image" src={project.image} alt={project.title} />
            <Carousel.Caption>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}

export default ProjectCarousel;