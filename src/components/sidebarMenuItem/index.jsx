import React, { useState } from 'react'

import './sidebarMenuItem.css'

function MenuItem(props) {
    const { menu } = props;
    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <section className='sidebar-menu-container' key={menu.index} onClick={() => {setSelectedIndex(menu.index)}}>
            <p className="menu-icon">
                {menu.icon}
            </p>
            <p className="menu-title">
                {menu.title}
            </p>
        </section>
    )
}

export default MenuItem