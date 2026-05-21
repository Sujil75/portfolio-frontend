import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import './Style.css'

function Home() {
  return (
    <section className='home-container'>
        <div className='available-container'>
            <div className='available-color-container'></div>
            
            <strong>AVAILABLE TO WORK</strong>
        </div>

        <section className='home-profile-section'>
            <div className='profile-details-container'>
                <h1 className='profile-name'>Hello, I'm ___</h1>

                <h3 className='profile-roles'>I'm a ___</h3>

                <p className='profile-para'>Crafting premium digital experiences with code, design, and obsessive attention to detail</p>
                
                <button type='button' className='resume-btn'>Get Resume</button>
            </div>

            <img src="" className='profile-img' />
        </section>
    </section>
  )
}

export default Home