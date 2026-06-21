import React from 'react';
import Navbar from '../../components/navbar/Navbar';

import useHomeRolesDisplay from '../../hooks/useHomeRolesDisplay';
import './Home.css'

const demoRoles = [
  "Frontend Developer",
  "React Engineer",
  "UI Designer",
  "Problem Solver"
]

function Home({portfolio}) {
    const {name, role, resume, userImgHome} = portfolio
    let roles = role

    if (role === undefined) {
        roles = demoRoles
    }
    const text = useHomeRolesDisplay(roles)

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
                        <h1>Hello, I'm <span>{name}</span></h1>

                        <h3>I'm a <span>{text}</span></h3>

                        <p>Crafting premium digital experiences with code, design, and obsessive attention to detail</p>
                        
                        <button
                            type='button'
                            className='resume-btn'
                            onClick={() => window.open(resume, '_blank', 'noopener, noreferrer')}
                        >Get Resume</button>
                    </div>

                    <div className="profile-img-container">
                        <img src={userImgHome} alt="profile img" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Home