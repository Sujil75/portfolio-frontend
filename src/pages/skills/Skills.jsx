import React from 'react'

import SkillCard from '../../components/cards/SkillCard';
import './Skills.css'

function Skills({portfolio}) {
  const skillsList = portfolio?.skills;

  return (
    <section id='Skills' className='pages-container'>
      <div className='glass'></div>

      <div className='section-container'>
        <div className='pages-intro-container'>
          <div className='topic-container'>
              <strong>SKILLS</strong>
          </div>
          
          <h1>Tools of the <span>trade</span></h1>

          <p>A living set of skills sharpened on real projects</p>
        </div>

        {(skillsList !== undefined) && <SkillCard skillsList={skillsList} />}
      </div>
    </section>
  )
}

export default Skills