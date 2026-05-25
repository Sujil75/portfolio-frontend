import React from 'react'

import ProjectsCard from '../../components/cards/ProjectsCard';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    name: "To do",
    languages: ['JS', 'HTML', 'CSS'],
    framework: ['React', 'Node', 'Express'],
    description: "Todo App for listing Todos",
  },
  {
    id: 2,
    name: "Weather Map",
    languages: ['JS', 'HTML', 'CSS'],
    framework: "React",
    description: "Application to check weather conditions",
  },
  {
    id: 3,
    name: "Portfolio",
    languages: ['JS', 'HTML', 'CSS'],
    framework: ['React', 'Node', 'Express'],
    description: "Personal Portfolio",
  },
  {
    id: 4,
    name: "Skill Swap",
    languages: ['JS', 'HTML', 'CSS'],
    framework: ['React', 'Node', 'Express'],
    description: "Student Interaction Platform",
  }
];

function Projects() {
  return (
    <section id='Projects' className='pages-container'>
        <div className='glass'></div>

        <div className='projects-container'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>EDUCATION</strong>
                </div>
                
                <h1>The learning Path</h1>

                <p>Formal study and continuous growth</p>
            </div>
            
            <ProjectsCard projectsData={projectsData} />
        </div>
    </section>
  )
}

export default Projects