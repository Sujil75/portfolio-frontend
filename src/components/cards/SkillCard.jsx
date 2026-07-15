import React from 'react'

function SkillCard({skillsList}) {
  // const skillsLength = Math.ceil(skillsList.length / 2)
  // const newSkillsList = skillsList.slice(skillsLength)
  // const concatenatedList = newSkillsList.concat(skillsList.slice(0, skillsLength))
  // console.log(concatenatedList.length, concatenatedList)

  
  const skillsLength = Math.ceil(skillsList.length / 3)
  const firstList = skillsList.slice(0, skillsLength)
  const secondList = skillsList.slice(skillsLength, skillsLength * 2)
  const thirdList = skillsList.slice(skillsLength * 2)

  return (
    <section className='skills-card-section'>
        <div className='skills-row'>
          <ul className='skills-list-container'>
            {
              [...firstList, ...firstList, ...firstList].map(each => (
              <li key={each.id}>
                <img src={each.img} alt="skill img" />

                <h5>{each.name}</h5>
              </li>
              ))
            }
          </ul>
        </div>

        <div className='skills-row'>
          <ul className='skills-list-center-container'>
            {
              [...secondList, ...secondList, ...secondList].map(each => (
              <li key={each.id}>
                <img src={each.img} alt="skill img" />

                <h5>{each.name}</h5>
              </li>
              ))
            }
          </ul>
        </div>

        <div className='skills-row'>
          <ul className='skills-list-container'>
            {
              [...thirdList, ...thirdList, ...thirdList].map(each => (
              <li key={each.id}>
                <img src={each.img} alt="skill img" />

                <h5>{each.name}</h5>
              </li>
              ))
            }
          </ul>
        </div>
    </section>
  )
}

export default SkillCard