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
  const position = localStorage.getItem("scrollY");
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - 150 &&
        window.scrollY < sectionTop + sectionHeight - 150 // 150 is navbar height
      ) {
        currentSection = section.id;
      }
    });

    if (currentSection) {
      setLocation((prev) => {
        const newLocation = `#${currentSection}`;
        return prev === newLocation ? prev : newLocation;
      });
    }
  };

  if (position) {
    window.scrollTo(0, Number(position));
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


useEffect(() => {
  const handleBeforeUnload = () => {
    localStorage.setItem("scrollY", window.scrollY);
  };

  window.addEventListener("beforeunload", handleBeforeUnload);

  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
}, []);

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
                      location === each.href
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