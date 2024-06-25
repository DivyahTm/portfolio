import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import { FaLaptopCode, FaGamepad, FaPen, FaFilm } from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify', fontSize: '1.1em' }}>
            Greetings, fellow tech enthusiasts! I'm <span className="purple">Divyah Mandavia</span>, 
            hailing from the bustling metropolis of <span className="purple">Mumbai, India</span>.
            <br />
            <br />
            <FaLaptopCode className="about-icon" /> By day, I'm an <span className="purple">AI/ML Sorcerer</span>, 
            weaving code into intelligent solutions.
            <br />
            <br />
            But when the sun sets, my adventures continue...
          </p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li className="about-activity">
              <FaGamepad className="about-icon" /> Conquering virtual realms
            </li>
            <li className="about-activity">
              <FaPen className="about-icon" /> Crafting tech tales in my blog
            </li>
            <li className="about-activity">
              <FaFilm className="about-icon" /> Exploring cinematic universes
            </li>
          </ul>
          <p style={{ 
            marginBlockEnd: 0, 
            color: 'rgb(155 126 172)', 
            fontStyle: 'italic',
            fontSize: '1.2em',
            borderLeft: '4px solid rgb(155 126 172)',
            paddingLeft: '10px'
          }}>
            "The world rewards you for value provided, not time spent."
          </p>
          <footer className="blockquote-footer" style={{ marginTop: '10px', textAlign: 'right' }}>
            James Clear, Architect of Atomic Habits
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard;