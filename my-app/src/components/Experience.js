// src/components/Experience.js
import React from 'react';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'Web Developer',
    company: 'ABC Company',
    duration: 'June 2019 - Present',
    description: 'Worked on front-end development of web applications using React, HTML, CSS.',
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'XYZ Agency',
    duration: 'January 2017 - May 2019',
    description: 'Designed user interfaces and user experiences for various projects.',
  },
  // Add more experience items
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map(experience => (
          <div key={experience.id} className="experience-item">
            <h3>{experience.title}</h3>
            <p className="company">{experience.company}</p>
            <p className="duration">{experience.duration}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
