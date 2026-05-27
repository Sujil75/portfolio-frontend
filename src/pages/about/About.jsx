import React from 'react'

import './About.css'

function About() {
  return (
    <section id='About' className='pages-container'>
        <div className='glass'></div>

        <div className='about-content'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>ABOUT</strong>
                </div>
                
                <h1>A bit about me</h1>

                <p>The story, the craft, and what drives the work</p>
            </div>

            <section className='about-desc'>
                <div className='about-me-container'>
                    <div className='about-me-blur-bg'></div>

                    <p>About me</p>
                </div>
            </section>
        </div>
    </section>
  )
}

export default About