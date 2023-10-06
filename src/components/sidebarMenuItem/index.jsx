import React, { useState } from 'react'

import './sidebarMenuItem.css'

function MenuItem(props) {
    const { menu, isActive, handleClick } = props;

    return (
        <section style={{display:'flex', alignItems:'center'}} key={menu.index} onClick={handleClick}>
            <section className="active-indicator" style={{display: isActive ? "block" : "none"}}></section>
            <section className={isActive ? 'active-sidebar-menu-container' : 'sidebar-menu-container'} >
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