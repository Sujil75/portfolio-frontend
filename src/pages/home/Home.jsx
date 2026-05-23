import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import './Style.css'

function Home() {
  return (
    <section className='home-container'>
        <div className='pages-blur-bg'></div>

        <div className='home-content'>
            <div className='available-container'>
                <div className='available-color-container'></div>
                
                <strong>AVAILABLE TO WORK</strong>
            </div>

            <section className='home-profile-section'>
                <div className='profile-details-container'>
                    <h1>Hello, I'm ___</h1>

                    <h3>I'm a ___</h3>

                    <p>Crafting premium digital experiences with code, design, and obsessive attention to detail</p>
                    
                    <button type='button' className='resume-btn'>Get Resume</button>
                </div>

                <img src="" className='profile-img' alt="profile img" />
            </section>
        </div>
    </section>
  )
}

export default Home