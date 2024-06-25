import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiFigma,
  SiAmazonaws,
  SiDigitalocean,
  SiNetlify,
  SiGithub,
} from "react-icons/si";
import { IoLogoAmazon, IoLogoFigma, IoLogoVercel } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
    </Row>
  );
}

export default Toolstack;
