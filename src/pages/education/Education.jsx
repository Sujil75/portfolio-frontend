import React from 'react'

import EducationCard from '../../components/cards/EducationCard';
import './Education.css';

function Education({portfolio}) {  
    const educationData = portfolio?.educations
  
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
            
            <div className='educations-card-section'>
              {educationData !== undefined && educationData.length > 0 ? (
                <EducationCard educationData={educationData} />
              ) : (
                <h2>Will be updated soon...</h2>
              )}
            </div>
        </div>
    </section>
    )
}

export default Education