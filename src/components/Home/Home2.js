import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mypic.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I’ve been exploring it ever since!
              <br />
              <br />
              My skills are
              <i>
                <b className="purple">
                  {" "}
                  Python, C, C++, HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, MongoDB, SQL, Git, GitHub, Firebase, Bootstrap, Tailwind CSS, OpenCV, scikit-learn, TensorFlow, Keras, NumPy, Pandas, DSA, REST APIs
                </b>
              </i>
              <br />
              <br />
              My fields of interest include building scalable &nbsp;
              <i>
                <b className="purple">Web Technologies and Full Stack Applications</b>, working on{" "}
                <b className="purple">Machine Learning Projects</b>, and exploring areas related to{" "}
                <b className="purple">AI, Blockchain</b>, and{" "}
                <b className="purple">Real-Time Intelligent Systems</b>.
              </i>
              <br />
              <br />
              Whenever possible, I apply my passion for developing impactful products using <b className="purple">Node.js</b> and
              <i>
                <b className="purple"> Modern JavaScript Libraries and Frameworks</b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>, and ML frameworks such as
              <i>
                <b className="purple"> TensorFlow, Keras, and scikit-learn</b>
              </i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Rasmiya22"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/your_twitter" // Replace with your actual Twitter
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rasmiyarasheed/" // Replace with your actual LinkedIn
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__ras_miya__/" // Replace with your actual Instagram
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
