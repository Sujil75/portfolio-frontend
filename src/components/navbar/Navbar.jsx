import React from 'react'

import { icons } from '../../assets/icons'
import './Navbar.css'

function Navbar() {
  const MenuIcon = icons.hamburgerMenu
  const AdminIcon = icons.admin

  return (
    <nav className='nav-container'>
        <div className='logo-container'>
          <p>{"</>"}</p>
          <h3>Portfolio</h3>
        </div>

        <div className='nav-main-container'>
          <div className='nav-content-container'>
            <a href='#Home' className='nav-content'>Home</a>
            <a href='#About' className='nav-content'>About</a>
            <a href='#Skills' className='nav-content'>Skills</a>
            <a href='#Education' className='nav-content'>Education</a>
            <a href='#Projects' className='nav-content'>Projects</a>
            <a href='#ContactMe' className='nav-content'>Contact Me</a>
          </div>

          <button
            type='button'
            className='nav-admin-btn'
          >
            Admin
          </button>
        </div>

        <div className='nav-mobile-main-container'>
          <button type='button'>
            <MenuIcon size={24} className='mobile-icon' />
          </button>
          
          <button type='button'>
            <AdminIcon size={24} className='mobile-icon' />
          </button>
        </div>
    </nav>
  )
}

export default Navbar