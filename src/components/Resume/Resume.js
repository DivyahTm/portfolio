import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Divyah_M_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-column">
            <h3 className="resume-title"><FaBriefcase /> Professional Experiences</h3>
            <Resumecontent
              title="Gen AI Intern [EXL Services]"
              date="Mar 2024 - May 2024"
              content={[
                "Developed a conversational chatbot using Retrieval Augmented Generation (RAG) technique to interact with users through multimedia inputs, achieving a 35% increase in user interaction and engagement.",
                "Conducted extensive research on user interaction patterns to improve the chatbot's response accuracy, leading to a 20% reduction in user query resolution time.",
              ]}
            />
            <Resumecontent
              title="ML Intern [Fafadia Tech]"
              date="July 2023 - Mar 2024"
              content={[
                "Designed and developed a reverse image search engine using convolutional neural networks (CNNs) and Streamlit, enabling users to find visually similar images within a vast database.",
                "Trained CNN models on large datasets, achieving an 86% accuracy rate in image recognition tasks.",
                "Implemented user-friendly search interfaces and optimized backend algorithms, leading to a 20% increase in user engagement and satisfaction.",
              ]}
            />
            <Row className="resume">
            <h3 className="resume-title"><FaGraduationCap /> Certifications</h3>
            <Resumecontent
              title=""
              content={[
                <a href="https://www.coursera.org/account/accomplishments/verify/your-certificate-id" target="_blank" rel="noopener noreferrer">
                  Supervised Machine Learning: Regression and Classification
                </a>
              ]}
            />
            <Resumecontent
              title=""
              content={[
                <a href="https://www.cloudskillsboost.google/public_profiles/04fdb3d8-4541-4e76-bd69-e3baeda1ab47/badges/6364589?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share">
                  Introduction to Generative AI
                </a>
              ]}
            />
            <Resumecontent
              title=""
              content={[
                <a href="https://www.cloudskillsboost.google/public_profiles/04fdb3d8-4541-4e76-bd69-e3baeda1ab47/badges/6357552?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank" rel="noopener noreferrer">
                  Introduction to Large Language Models
                </a>
              ]}
            />
            </Row>
          </Col>
          <Col md={6} className="resume-column">
            <h3 className="resume-title"><FaGraduationCap /> Education</h3>
            <Resumecontent
              title="B.E Artificial Intelligence and Data Science [V.C.E.T.]"
              date="May 2024"
              content={[
                "Developed a strong foundation in computer science while specializing in the dynamic field of Artificial Intelligence and Data Science. Acquired comprehensive knowledge and practical skills in areas such as machine learning, data analysis, and statistical modeling",
                "CGPA: 8.8/10",
              ]}
            />
            
            <h3 className="resume-title"><FaTrophy /> Achievements & Publications</h3>
            <Resumecontent
              title="IEEE Conference Publication"
              date="2024"
              content={[
                "Published a research paper titled 'Retroflex: Uncovering Visual Equivalences through Reverse Image Recon' in the IEEE International Conference on Artificial Intelligence and Data Science (ICAIDS) 2024. The paper explores the use of convolutional neural networks (CNNs) to develop a reverse image search engine that finds visually similar images within a vast database.",
                "Read the paper here: ",
                <a href="https://ieeexplore.ieee.org/document/10498900/" target="_blank" rel="noopener noreferrer">
                  https://ieeexplore.ieee.org/document/10498900/
                </a>
              ]}
            />
            <Resumecontent
              title="Leadership & Recognition"
              content={[
                "First place in Technical Paper Presentation at VCET Oscillation",
                "Chairperson, NSDC Student Chapter at VCET",
                "Pioneered the establishment of the NSDC student chapter and led its first-year activities",
                "Launched and organized Tech Blitz, an intercollege AI-based challenge event",
                "Coordinated multiple technical and non-technical events, fostering a collaborative and innovative environment"
                
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", marginTop: "30px" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;