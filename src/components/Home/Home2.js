import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.png'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Diving deep into the digital realm, I'm on a mission to unlock the full potential of AI and Data Science.
              <br />
              <br />
              My arsenal includes
              <i>
                <b className="purple"> Python, C/C++ and JavaScript</b>
              </i>
              , weapons of choice for crafting intelligent solutions.
              <br />
              <br />
              I'm captivated by the art of
              <i>
                <b className="purple">
                  transforming raw data into actionable insights
                </b>
              </i>
              , and thrive on
              <i>
                <b className="purple">
                  pushing the boundaries of what's possible in tech
                </b>
              </i>
              .
              <br />
              <br />
              From
              <b className="purple"> training neural networks </b>
              with
              <i>
                <b className="purple">
                  TensorFlow and PyTorch
                </b>
              </i>
              , to crafting seamless user experiences with
              <i>
                <b className="purple"> React.js and Node.js</b>
              </i>
              , I'm constantly exploring the intersection of
              <b className="purple"> AI, web tech, and cloud solutions</b>
              .
              <br />
              <br />
              Ready to turn your data challenges into opportunities? Let's collaborate and build something extraordinary!
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
              <h1>LET'S CONNECT</h1>
              <p>
                Eager to <span className="purple">innovate </span>together?
              </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DivyahTm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divyah-mandavia/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
