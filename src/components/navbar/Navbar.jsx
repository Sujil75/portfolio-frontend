import React from 'react'

import './Style.css'

function Navbar() {
  return (
    <nav className='nav-container'>
        <div className='logo-container'>
          <img src="" alt="logo" className='nav-logo' />
          <h3>Portfolio</h3>
        </div>

        <div className='nav-main-container'>
          <ul className='nav-content-container'>
            <li className='nav-content'>Home</li>
            <li className='nav-content'>About</li>
            <li className='nav-content'>Skills</li>
            <li className='nav-content'>Education</li>
            <li className='nav-content'>Cover Letter</li>
            <li className='nav-content'>Contact</li>
          </ul>

          <button type='button'>Admin</button>
        </div>
    </nav>
  )
}

export default Navbar