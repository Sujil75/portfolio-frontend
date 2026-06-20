import React from 'react'

import { icons } from '../../assets/icons'
import { NavLinks } from '../../data/NavLink'

function MenuCard({setMenuBtn, location, setLocation}) {
    const CloseBtnIcon = icons.closeBtn

    function chooseNavLink(href) {
        setMenuBtn(false)
        setLocation(href)
    }

    window.addEventListener('beforeunload', () => {
        const lastScroll = localStorage.getItem('scrollY')

        if (lastScroll) {
            localStorage.removeItem('scrollY')
        }

        localStorage.setItem('scrollY', window.scrollY)
    })

    return (
    <section className='mobile-menu-card'>
        <button type='button' onClick={() => setMenuBtn(false)}>
            <CloseBtnIcon size={15} className='mobile-icon' />
        </button>

        <hr />

        <ul className='mobile-nav-content-container'>
            {
                NavLinks.map(each => (
                <li key={each.id} onClick={() => chooseNavLink(each.href)}>
                    <a 
                        href={each.href} 
                        className={
                            location === each.href ?
                            'active' : ''
                        }
                    >{each.content}</a>
                </li>
                ))
            }
        </ul>
    </section>
    )
}

export default MenuCard