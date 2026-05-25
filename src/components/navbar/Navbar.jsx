import React from 'react'

import './Navbar.css'

function Navbar() {
  return (
    <nav className='nav-container'>
        <div className='logo-container'>
          <img src="" alt="logo" className='nav-logo' />
          <h3>Portfolio</h3>
        </div>

        <div className='nav-main-container'>
          <div className='nav-content-container'>
            <a href='#Home' className='nav-content'>Home</a>
            <a href='#About' className='nav-content'>About</a>
            <a href='#Skills' className='nav-content'>Skills</a>
            <a href='#Education' className='nav-content'>Education</a>
            <a href='#Projects' className='nav-content'>Projects</a>
            <a href='#Contact' className='nav-content'>Contact</a>
          </div>

          <button type='button'>Admin</button>
        </div>
    </nav>
  )
}

export default Navbar