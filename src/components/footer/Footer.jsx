import React from 'react'

import { icons } from '../../assets/icons'
import './Footer.css'

function Footer() { 
  const {HeartIcon, CopyrightIcon} = icons

  return (
    <section className='footer-section'>
        <div className='footer-first-container'>
            <CopyrightIcon size="25" className='copyright-icon' />

            <p>2026 <span>Portfolio</span> -- Crafted With care.</p>
        </div>

        <div className='footer-second-container'>
            <p>Build With Care </p>
            <div></div>
            <p>Framer Motion</p>
            <div></div>
            <HeartIcon size='12' className='heart-icon' />
        </div>
    </section>
  )
}

export default Footer