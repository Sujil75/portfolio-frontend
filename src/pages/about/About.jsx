import React from 'react'

import './About.css'

function About({portfolio}) {
    const {desc, userImgAbt} = portfolio

    return (
    <section id='About' className='pages-container'>
        <div className='glass'></div>

        <div className='about-content'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>ABOUT</strong>
                </div>
                
                <h1>A Bit About <span>Me</span></h1>

                <p>The story, the craft, and what drives the work</p>
            </div>

            <section className='about-desc'>
                <div className='about-me-container'>
                    <div className='about-me-blur-bg'></div>

                    {desc !== undefined && (
                        <>
                            <p>{desc.slice(0, 378)}</p>
                            <br />
                            <p>{desc.slice(379)}</p>
                        </>
                    )}
                </div>

                <div className='user-img-card'>
                    <img 
                        src={userImgAbt}
                        alt='user img' 
                    />
                </div>
            </section>
        </div>
    </section>
    )
}

export default About