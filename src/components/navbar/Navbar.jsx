import React, {useState, useEffect} from 'react'

import { icons } from '../../assets/icons'
import MenuCard from '../cards/MenuCard'
import { NavLinks } from '../../data/NavLink'
import './Navbar.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [location, setLocation] = useState(window.location.hash || NavLinks[0].href)
  const MenuIcon = icons.hamburgerMenu
  const AdminIcon = icons.admin

  useEffect(() => {
    const position = localStorage.getItem('scrollY')

    if (position) {
      window.scrollTo(0, position)
    }
  }, [])


  window.addEventListener('beforeunload', () => {
    const lastScroll = localStorage.getItem('scrollY')

    if (lastScroll) {
        localStorage.removeItem('scrollY')
    }

    localStorage.setItem('scrollY', window.scrollY)
  })

  return (
    <nav className='nav-container'>
        <div className='logo-container'>
          <p>{"</>"}</p>
          <h3>Portfolio</h3>
        </div>

        <div className='nav-main-container'>
          <ul className='nav-content-container'>
            {
              NavLinks.map(each => (
                <li key={each.id}>
                  <a 
                    href={each.href} 
                    onClick={() => setLocation(each.href)}
                    className={
                      location.toUpperCase() === `#${each.id}` 
                      ? 'active' : ''
                    }
                  >{each.content}</a>
                </li>
              ))
            }
          </ul>

          <button
            type='button'
            className='nav-admin-btn'
          >
            Admin
          </button>
        </div>

        <div className='nav-mobile-main-container'>
          <button type='button'>
            <MenuIcon size={24} className='mobile-icon' onClick={() => setIsMenuOpen(true)} />
          </button>

          {isMenuOpen && <MenuCard setMenuBtn={setIsMenuOpen} location={location} setLocation={setLocation} />}
          
          <button type='button'>
            <AdminIcon size={20} className='mobile-icon' />
          </button>
        </div>
    </nav>
  )
}

export default Navbar