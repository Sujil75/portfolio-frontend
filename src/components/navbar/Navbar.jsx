import React from 'react'

import './Style.css'

function Navbar() {
  return (
    <div className='nav-container'>
        <img src="" alt="logo" className='nav-logo' />

        <div className='nav-content-container'>
            <p className='nav-content'>Home</p>
            <p className='nav-content'>About</p>
            <p className='nav-content'>Skills</p>
            <p className='nav-content'>Education</p>
            <p className='nav-content'>Cover Letter</p>
            <p className='nav-content'>Contact</p>
        </div>
    </div>
  )
}

export default Navbar