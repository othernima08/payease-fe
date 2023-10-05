import React, { useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { RxDashboard } from "react-icons/rx";
import { AiOutlineArrowUp, AiOutlineUser } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

import './sidebar.css'

import MenuItem from '../sidebarMenuItem';
import { useNavigate } from 'react-router-dom';

const CustomSidebar = () => {
    const navigate = useNavigate()
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleClickDashboard = (e) => {
        e.preventDefault()

        setSelectedIndex(1)
        navigate("/home")
    }

    const handleClickTransfer = (e) => {
        e.preventDefault();

        setSelectedIndex(2)
        navigate("/transfer")
    }

    const handleClickTopUp = (e) => {
        e.preventDefault();

        setSelectedIndex(3)
        navigate("/top-up")
    }

    const handleClickProfile = (e) => {
        e.preventDefault();

        setSelectedIndex(4)
        navigate("/profile")
    }

    const handleClickLogOut = (e) => {
        e.preventDefault();

        setSelectedIndex(5)
        sessionStorage.clear()
        navigate("/")
    }

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
                    handleClick={handleClickDashboard}/>
                <MenuItem
                    menu={{
                        index: 2,
                        title: "Transfer",
                        icon: <AiOutlineArrowUp />
                    }} 
                    selectedIndex={selectedIndex} 
                    handleClick={handleClickTransfer}/>
                <MenuItem
                    menu={{
                        index: 3,
                        title: "Top Up",
                        icon: <IoAdd />
                    }} 
                    selectedIndex={selectedIndex}
                    handleClick={handleClickTopUp}/>
                <MenuItem
                    menu={{
                        index: 4,
                        title: "Profile",
                        icon: <AiOutlineUser />
                    }} 
                    selectedIndex={selectedIndex}
                    handleClick={handleClickProfile}/>
            </section>
            <section>
                <MenuItem
                    menu={{
                        index: 5,
                        title: "Log Out",
                        icon: <div style={{rotate:"90deg"}}><HiOutlineArrowUpTray /></div>
                    }} 
                    selectedIndex={selectedIndex}
                    handleClick={handleClickLogOut}
                />
            </section>
        </Container>
    )
}

export default CustomSidebar