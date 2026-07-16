import React from 'react'

const SkillsAutoScroll = ({first, second, third, classCss}) => {
  return (
    <div className='skills-row'>
        <ul className={classCss}>
        {
            [...first, ...second, ...third].map(each => (
            <li key={each.id}>
            <img src={each.img} alt="skill img" />

            <h5>{each.name}</h5>
            </li>
            ))
        }
        </ul>
    </div>
  )
}

export default SkillsAutoScroll