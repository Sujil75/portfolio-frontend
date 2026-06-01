import React from 'react'

import EducationCard from '../../components/cards/EducationCard';
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "B.Tech Computer Science",
    institution: "XYZ University",
    year: "2020 - 2024",
    description: "Focused on fullstack development and AI."
  },
  {
    id: 2,
    degree: "Higher Secondary",
    institution: "ABC School",
    year: "2018 - 2020",
    description: "Science stream with mathematics."
  },
  {
    id: 3,
    degree: "Secondary School",
    institution: "DEF School",
    year: "2016 - 2018",
    description: "Foundational academic learning."
  },
  {
    id: 4,
    degree: "Certification in MERN",
    institution: "Online Academy",
    year: "2024",
    description: "Advanced MERN stack specialization."
  }
];

function Education() {    
    return (
    <section id='Education' className='pages-container'>
        <div className='glass'></div>
        
        <div className='education-container'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>EDUCATION</strong>
                </div>
                
                <h1>The learning <span>Path</span></h1>

                <p>Formal study and continuous growth</p>
            </div>
            
            <EducationCard educationData={educationData} />
        </div>
    </section>
    )
}

export default Education