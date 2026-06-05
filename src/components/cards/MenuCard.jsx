import React from 'react'

import { icons } from '../../assets/icons'

function MenuCard({setMenuBtn}) {
    const CloseBtnIcon = icons.closeBtn

    return (
    <section className='mobile-menu-card'>
        <button type='button' onClick={() => setMenuBtn(false)}>
            <CloseBtnIcon size={24} className='mobile-icon' />
        </button>
    </section>
    )
}

export default MenuCard