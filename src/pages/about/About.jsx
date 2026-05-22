import React from 'react'

import './Style.css'

function About() {
  return (
    <section className='about-container'>
        <div className='about-blur-bg'></div>

        <div className='about-content'>
            <div>
                <div className='available-container'>
                    <strong>ABOUT</strong>
                </div>
                
                <h1>A bit about me</h1>

                <p>The story, the craft, and what drives the work</p>
            </div>

            <div>
                <div>
                    <p>About me</p>
                </div>

                <ul>
                    <li>
                        <div>
                            <img src="" alt="email icon" />

                            <div>
                                <h5>EMAIL</h5>
                                <p>_____</p>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <img src="" alt="phone icon" />

                            <div>
                                <h5>PHONE</h5>
                                <p>_____</p>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <div>
                            <img src="" alt="status icon" />

                            <div>
                                <h5>STATUS</h5>
                                <p>_____</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About