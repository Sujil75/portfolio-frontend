import React from 'react'

import './Style.css'

function Skills() {
  const checkList = [];

  for (let i = 1; i <= 100; i++) {
    checkList.push(i);
  };

  return (
    <section className='pages-container'>
      <div className='glass'></div>

      <div className='section-container'>
        <div className='about-intro-container'>
          <div className='topic-container'>
              <strong>SKILLS</strong>
          </div>
          
          <h1>Tools of the trade</h1>

          <p>A living set of skills sharpened on real projects</p>
        </div>

        <div>
          <ul className='skills-list-container'>
            {
              checkList.map(each => {
                return (
                  <li></li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills