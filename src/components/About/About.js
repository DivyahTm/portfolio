import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import ReactGA from "react-ga";

function About() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.6em", paddingBottom: "20px" }}>
              Unmasking the <strong className="purple">Tech Enthusiast</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="Digital Playground" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Arsenal of <strong className="purple">Digital Prowess</strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">Weapons</strong> of Creation
        </h1>
        <Toolstack />
        <h1 className="project-heading">
          <strong className="purple">Digital Footprint</strong>
        </h1>
        <Github />
      </Container>
    </Container>
  );
}

export default About;