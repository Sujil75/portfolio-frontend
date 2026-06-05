import React from 'react'

import { icons } from '../../assets/icons'
import { NavLinks } from '../../data/NavLink'

function MenuCard({setMenuBtn}) {
    const CloseBtnIcon = icons.closeBtn

    return (
    <section className='mobile-menu-card'>
        <button type='button' onClick={() => setMenuBtn(false)}>
            <CloseBtnIcon size={24} className='mobile-icon' />
        </button>

        <hr />

        <ul className='mobile-nav-content-container'>
            {
                NavLinks.map(each => (
                <li key={each.id} onClick={() => setMenuBtn(false)}>
                    <a href={each.href} className='nav-content'>{each.content}</a>
                </li>
                ))
            }
        </ul>
    </section>
    )
}

export default MenuCard