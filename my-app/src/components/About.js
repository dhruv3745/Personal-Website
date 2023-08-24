import React from 'react';
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import headshotImage from './headshotImage.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="headshot-text-container">
          <div className="headshot-container">
            <img src={headshotImage} alt="Dhruv Saxena" className="headshot" />
          </div>
          <div className="typing-text">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                '',
                200,
                'Hi', 600,
                'Hi, my name is Dhruv Saxena.', 900,
                'Hi, my name is Dhruv Saxena.\nI funnel my drive for creation into development, design, and innovation.',
                10000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                whiteSpace: 'pre-line',
                fontSize: '2.25em', // Adjusted font size
                fontWeight: 'bold', // Added to make the text bold
                color: 'white', // Added to make the text white
              }}
              repeat={Infinity}
            />
          </div>
        </div>
        <p>
          Hi there! I'm Dhruv Saxena, a passionate web developer with a keen
          interest in creating amazing user experiences. I enjoy turning complex
          problems into simple, beautiful, and intuitive solutions.
        </p>
        <p>
          My skills include HTML, CSS, JavaScript, React, and more. I'm always
          eager to learn and explore new technologies to expand my skillset.
        </p>
      </div>
    </section>
  );
};

export default About;
