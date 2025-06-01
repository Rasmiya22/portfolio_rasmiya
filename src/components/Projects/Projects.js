import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Replace these with your own image paths or use placeholders
import traffic from "../../Assets/Projects/traffic.jpg";
import face from "../../Assets/Projects/face.jpg";
import nitconf from "../../Assets/Projects/nitconf.jpg";
import todo from "../../Assets/Projects/todo.png";
import spam from "../../Assets/Projects/spam.png";
import bitcoin from "../../Assets/Projects/bitcoin.jpg";
import ecommerce from "../../Assets/Projects/ecommerce.jpg";
import portfolio from "../../Assets/Projects/portfolio.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={traffic}
              isBlog={false}
              title="Urban Traffic Congestion Reduction"
              description="Real-time traffic management system prioritizing emergency vehicles. Used YOLOv8n, Faster R-CNN (ResNet/MobileNet), SUMO, and BoT-SORT with datasets modeled on Indian road conditions."
              ghLink="https://github.com/yourusername/urban-traffic-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Face Recognition Attendance System"
              description="Automated attendance tracking using CNNs, OpenCV, dlib, and face recognition library. Achieves facial recognition and feature extraction with high accuracy."
              ghLink="https://github.com/yourusername/face-attendance"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nitconf}
              isBlog={false}
              title="NITCONF - Conference Management System"
              description="Spring Boot-based system for managing paper submissions and reviews. Program Committee dashboard and integrated MySQL for paper and review management."
              ghLink="https://github.com/Rasmiya22/SE_LAB.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="Task manager built using Django, Python, HTML, and MySQL. Includes task prioritization, editing, and deletion features with user-friendly UI."
              ghLink="https://github.com/Rasmiya22/Todo_project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spam}
              isBlog={false}
              title="Email Spam Classifier"
              description="Spam detection using Python and scikit-learn. Built efficient classifier through preprocessing and model training in Jupyter Notebook."
              ghLink="https://github.com/Rasmiya22/spam_email_classifier.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitcoin}
              isBlog={false}
              title="Bitcoin Price Predictor"
              description="Machine learning-based Bitcoin price trend prediction using regression algorithms. Analyzed historical data to forecast price movements."
              ghLink="https://github.com/Rasmiya22/Bitcoin_Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce Website"
              description="Full-fledged e-commerce website using Django with product catalog, search and filter capabilities. Focused on user-friendly design and backend management."
              ghLink="https://github.com/Rasmiya22/Ecommerce_project.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Interactive personal portfolio website built with Django and custom HTML/CSS templates. Showcases projects, achievements, and skills with navigation animations."
              ghLink="https://github.com/Rasmiya22/portfolio_rasmiya"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
