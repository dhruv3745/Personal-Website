// src/components/Projects.js
import React, { useState, useEffect } from 'react';
import './Projects.css';
import { p21, p22, p23, p24 } from './images';

const projectsData = [
  {
    id: 1,
    title: 'Stencilify',
    images: [p21, p22, p23, p24],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'WiseSailor',
    images: ['project2_1.jpg', 'project2_2.jpg', 'project2_3.jpg', 'project2_4.jpg'],
    text: 'Endless Running mobile game being created in Unity. The sprites and materials were also all designed by me in Blender. The puprose of the game is to continuously control your ship as far as you can while dodging obstacles and collecting coins.',
  },
  {
    id: 3,
    title: 'Tunnel Dasher',
    images: ['project2_1.jpg', 'project2_2.jpg', 'project2_3.jpg', 'project2_4.jpg'],
    text: 'Endless Running mobile game being created in Unity. The sprites and materials were also all designed by me in Blender. The puprose of the game is to continuously control your ship as far as you can while dodging obstacles and collecting coins.',
  },
  {
    id: 4,
    title: 'AiRT (AI Image Retina Tracker)',
    images: ['project2_1.jpg', 'project2_2.jpg', 'project2_3.jpg', 'project2_4.jpg'],
    text: 'Endless Running mobile game being created in Unity. The sprites and materials were also all designed by me in Blender. The puprose of the game is to continuously control your ship as far as you can while dodging obstacles and collecting coins.',
  },
  // Add more projects
];


  
  const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % projectsData[currentImageIndex].images.length);
      }, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentImageIndex]);
  
    return (
      <section className="projects">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`project ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className={`project-image ${index === currentImageIndex ? 'active' : ''}`}>
              <img
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="project-image-inner"
              />
            </div>
            <div className="project-text">
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Projects;