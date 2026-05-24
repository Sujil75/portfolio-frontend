import React from 'react'

import EducationCard from '../../components/cards/EducationCard';
import './Education.css';

function Education() {
    const educationList = [];  
    
    for (let i = 1; i <= 100; i++) {
        educationList.push(i)
    }
    
    return (
    <section id='Education' className='pages-container'>
        <div className='glass'></div>
        
        <div className='education-container'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>EDUCATION</strong>
                </div>
                
                <h1>The learning Path</h1>

                <p>Formal study and continuous growth</p>
            </div>
            
            <EducationCard educationList={educationList} />
        </div>
    </section>
    )
}

export default Education