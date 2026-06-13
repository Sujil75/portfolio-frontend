import React from 'react'

import ProjectsCard from '../../components/cards/ProjectsCard';
import './Projects.css';

// const projectsData = [
//   {
//     id: 1,
//     name: "To do",
//     languages: ['JS', 'HTML', 'CSS'],
//     framework: ['React', 'Node', 'Express'],
//     description: "Todo App for listing Todos",
//   },
//   {
//     id: 2,
//     name: "Weather Map",
//     languages: ['JS', 'HTML', 'CSS'],
//     framework: "React",
//     description: "Application to check weather conditions",
//   },
//   {
//     id: 3,
//     name: "Portfolio",
//     languages: ['JS', 'HTML', 'CSS'],
//     framework: ['React', 'Node', 'Express'],
//     description: "Personal Portfolio",
//   },
//   {
//     id: 4,
//     name: "Skill Swap",
//     languages: ['JS', 'HTML', 'CSS'],
//     framework: ['React', 'Node', 'Express'],
//     description: "Student Interaction Platform",
//   }
// ];

function Projects({portfolio}) {
  const projectsData = portfolio?.projects
  
  return (
    <section id='Projects' className='pages-container'>
        <div className='glass'></div>

        <div className='projects-container'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>PROJECTS</strong>
                </div>
                
                <h1>Selected <span>Work</span></h1>

                <p>A hand full of recent build --- production code, design system and experiments</p>
            </div>
            
            <div className='projects-card-section'>
              {projectsData !== undefined && projectsData.length > 0 ? (
                <ProjectsCard projectsData={projectsData} />
              ) : (
                <h2>Coming Soon...</h2>
              )}
            </div>
        </div>
    </section>
  )
}

export default Projects