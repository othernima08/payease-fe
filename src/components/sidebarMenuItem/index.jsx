import React, { useState } from 'react'

import './sidebarMenuItem.css'

function MenuItem(props) {
    const { menu, selectedIndex, handleClick } = props;

    return (
        <section style={{display:'flex', alignItems:'center'}} key={menu.index} onClick={handleClick}>
            <section className="active-indicator" style={{display: selectedIndex === menu.index ? "block" : "none"}}></section>
            <section className='sidebar-menu-container' style={{color: selectedIndex === menu.index ?  '#6379F4' :'#626468'}} >
                <p className="menu-icon">
                    {menu.icon}
                </p>
                <p className="menu-title">
                    {menu.title}
                </p>
            </section>
        </section>
    )
}

export default MenuItem