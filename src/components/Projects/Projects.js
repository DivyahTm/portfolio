import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import eCom from "../../Assets/Projects/E-com.png";
import jsomBlog from "../../Assets/Projects/jsomBlog.png";
import SIRE from "../../Assets/Projects/SIRE.jpeg";
import mllm from "../../Assets/Projects/multimodalchat-ai.png";
import aA from "../../Assets/Projects/artisteeA.png";
import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SIRE}
              isBlog={false}
              title="SIRE (Semantic Image Retrieval Engine)"
              description="Developed a Semantic Image Retrieval Engine that leverages advanced machine learning techniques to enhance image search accuracy. The system extracts and analyzes visual features from images, enabling efficient and precise retrieval based on content similarity. This project involved implementing robust feature extraction algorithms and a streamlined search mechanism, significantly improving the user experience in finding relevant images. "
              link="https://github.com/DivyahTm/Semantic-Image-Retrieval-Engine"
              liveLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="easy-code"
              description="Easy code is my personal blog website which is build with nextjs. It has great support of the Markdown content. Easy-code is fully responsive blog website which has light and dark mode support."
              link="https://github.com/MohitSojitra/easy-code"
              liveLink="https://blog.mohitsojitra.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eCom}
              isBlog={false}
              title="Jsom Store"
              description="It is a basic e-commerce site which build in MERN tech stack. It has a features like login, signup as a part of authentication. Apart from that user add product in cart, modify quantity and also remove poduct in cart. It is a basic e-comerce site which build in pure html, css, reactjs and redux. You can watch live app in below button."
              link="https://github.com/MohitSojitra/e-commerce-store"
              liveLink="https://e-commerce-fronend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsomBlog}
              isBlog={false}
              title="Jsom Blog"
              description="It is a basic blog website which cover all the concept of REACTJS. Main Motivation of this project is understand basic features of the Reactjs like  api fetching, multiple filtering in profile , post and comments. It includes lots' of features which is necessary in any blog site. You can visit Live site by clicking below button."
              link="https://github.com/MohitSojitra/react-blog-website"
              liveLink="https://react-blog-website.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mllm}
              isBlog={false}
              title="Multimodal Local-llm Chatbot"
              description="Developed a Multimodal Chatbot that integrates text and image inputs to provide enhanced conversational experiences. The system uses advanced machine learning techniques to process and analyze user queries, offering accurate and context-aware responses. It supports a wide range of queries, including text-based questions and image-based requests, providing a seamless and interactive chat experience."
              link="https://github.com/DivyahTm/Multimodal_Chatbot"
              liveLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="E-Steer"
              description="E-Steer creates a virtual steering wheel for car games using advanced motion detection. It translates hand movements into precise in-game vehicle control, offering an immersive driving experience. Compatible with popular racing games, it uses sensors and real-time processing to capture steering, acceleration, and braking gestures, bringing racing thrills to your home."
              link="https://github.com/DivyahTm/Motion-Gesture-Based-Game-Controlled-System"
              liveLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
