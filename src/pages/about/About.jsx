import React from 'react'

import './Style.css'

function About() {
  return (
    <section className='pages-container'>
        <div className='glass'></div>

        <div className='about-content'>
            <div className='about-intro-container'>
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

                <ul className='about-me-list'>
                    <li>
                        <div className='about-me-blur-bg'></div>

                        <div className='about-me-list-content'>
                            <img src="" alt="email icon" />

                            <div>
                                <h5>EMAIL</h5>
                                <p>mail@gmail.com</p>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div className='about-me-blur-bg'></div>
                        
                        <div className='about-me-list-content'>
                            <img src="" alt="phone icon" />

                            <div>
                                <h5>PHONE</h5>
                                <p>_____</p>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div className='about-me-blur-bg'></div>
                        
                        <div className='about-me-list-content'>
                            <img src="" alt="status icon" />

                            <div>
                                <h5>STATUS</h5>
                                <p>_____</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </section>
  )
}

export default About