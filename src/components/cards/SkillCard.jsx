import React from 'react'

function SkillCard({skillsList}) {
  return (
    <section>
        <ul className='skills-list-container'>
        {
            skillsList.map(() => (
            <li>
                <img src="" alt="skill img" />

                <h6>Skill Name</h6>
            </li>
            ))
        }
        </ul>
    </section>
  )
}

export default SkillCard