import React, { useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { RxDashboard } from "react-icons/rx";
import { AiOutlineArrowUp, AiOutlineUser } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

import './sidebar.css'

import MenuItem from '../sidebarMenuItem';

const CustomSidebar = () => {
    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <Container bsPrefix='sidebar-container'>
            <section>
                <MenuItem
                    menu={{
                        index: 1,
                        title: "Dashboard",
                        icon: <RxDashboard />
                    }}
                    selectedIndex={selectedIndex} 
                    handleClick={() => setSelectedIndex(1)}/>
                <MenuItem
                    menu={{
                        index: 2,
                        title: "Transfer",
                        icon: <AiOutlineArrowUp />
                    }} 
                    selectedIndex={selectedIndex} 
                    handleClick={() => setSelectedIndex(2)}/>
                <MenuItem
                    menu={{
                        index: 3,
                        title: "Top Up",
                        icon: <IoAdd />
                    }} 
                    selectedIndex={selectedIndex}
                    handleClick={() => setSelectedIndex(3)}/>
                <MenuItem
                    menu={{
                        index: 4,
                        title: "Profile",
                        icon: <AiOutlineUser />
                    }} 
                    selectedIndex={selectedIndex}
                    handleClick={() => setSelectedIndex(4)}/>
            </section>
            <section>
                <MenuItem
                    menu={{
                        index: 5,
                        title: "Log Out",
                        icon: <div style={{rotate:"90deg"}}><HiOutlineArrowUpTray /></div>
                    }} 
                    selectedIndex={selectedIndex}
                    handleClick={() => setSelectedIndex(5)}
                />
            </section>
        </Container>
    )
}

export default CustomSidebar