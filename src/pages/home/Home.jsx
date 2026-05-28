import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import './Home.css'

function Home() {
  return (
    <section id='Home' className='pages-container'>
        <div className='glass'></div>

        <div className='home-content'>
            <div className='available-container'>
                <div className='available-container-glass'></div>

                <div className='topic-container available-topic'>
                    <div className='available-notify-container'></div>
                    
                    <p>AVAILABLE TO WORK</p>
                </div>
            </div>

            <section className='home-profile-section'>
                <div className='profile-details-container'>
                    <h1>Hello, I'm <span>Name</span></h1>

                    <h3>I'm a <span>FullStack Developer</span></h3>

                    <p>Crafting premium digital experiences with code, design, and obsessive attention to detail</p>
                    
                    <button
                        type='button'
                        className='resume-btn'
                    >Get Resume</button>
                </div>

                <img src="" className='profile-img' alt="profile img" />
            </section>
        </div>
    </section>
  )
}

export default Home