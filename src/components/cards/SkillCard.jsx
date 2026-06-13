import React from 'react'

function SkillCard({skillsList}) {
  return (
    <section>
        <ul className='skills-list-container'>
        {
            skillsList.map(each => (
            <li key={each.id}>
                <img src={each.img} alt="skill img" />

                <h5>{each.name}</h5>
            </li>
            ))
        }
        </ul>
    </section>
  )
}

export default SkillCard