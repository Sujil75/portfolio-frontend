import React from 'react'

import usePortfolio from '../../hooks/usePortfolio'
import './About.css'

function About() {
    const portfolio = usePortfolio()
    const {name} = portfolio
    console.log(name)

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

                    <p>About me</p>
                </div>

                <div className='user-img-card'>
                    <img 
                        src='https://imgs.search.brave.com/rqVkJY3vBi5aVMeigx1i3W3QuDhP6zRF_YDO2y8e3mA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzE1L2Zj/LzI0LzE1ZmMyNGQx/ODM2NzQ0NDgwODdk/YmY4ODA5ODBhNjQ1/LmpwZw' 
                        alt='user img' 
                    />
                </div>
            </section>
        </div>
    </section>
    )
}

export default About