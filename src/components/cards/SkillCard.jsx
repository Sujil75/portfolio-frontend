import React from 'react'
import SkillsAutoScroll from './SkillsAutoScroll'

function SkillCard({skillsList}) {
  const skillsLength = Math.ceil(skillsList.length / 3)
  const firstList = [...skillsList.slice(skillsLength, skillsLength * 3), ...skillsList.slice(0, skillsLength)]
  const secondList = [...skillsList.slice(skillsLength * 2, skillsLength * 3), ...skillsList.slice(0, skillsLength * 2)]

  return (
    <section className='skills-card-section'>
        <SkillsAutoScroll first={skillsList} second={firstList} third={secondList} classCss={"skills-list-container"} />
        <SkillsAutoScroll first={firstList} second={secondList} third={skillsList} classCss={"skills-list-center-container"} />
        <SkillsAutoScroll first={secondList} second={skillsList} third={firstList} classCss={"skills-list-container"} />
    </section>
  )
}

export default SkillCard