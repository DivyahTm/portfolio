import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import QASystem from "../../Assets/Projects/QASystem.png";
import ntc from "../../Assets/Projects/ntc.png";
import SIRE from "../../Assets/Projects/SIRE.jpeg";
import mllm from "../../Assets/Projects/multimodalchat-ai.png";
import mcs from "../../Assets/Projects/MCS.png";
// import easyCode from "../../Assets/Projects/easy-code.png";
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

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="easy-code"
              description="Easy code is my personal blog website which is build with nextjs. It has great support of the Markdown content. Easy-code is fully responsive blog website which has light and dark mode support."
              link="https://github.com/MohitSojitra/easy-code"
              liveLink="https://blog.mohitsojitra.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QASystem}
              isBlog={false}
              title="QA System For NVIDIA CUDA"
              description="Developed a Question Answering System NVIDIA CUDA documentation using web crawling, vector databases, and natural language processing techniques.This QA System uses NVIDIA CUDA documentation, LangChain, Milvus (HNSW),BM25, and SentenceTransformers for hybrid search and reranking"
              link="https://github.com/DivyahTm/QA-System-using-Milvis"
              liveLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ntc}
              isBlog={false}
              title="News Text Classification"
              description="It is a text classification project focused on classifying news articles into predefined categories using various machine learning algorithms and vectorization techniques."
              link="https://github.com/DivyahTm/News-Text_Classification"
              liveLink=""
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
              imgPath={mcs}
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
