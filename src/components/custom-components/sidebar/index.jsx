import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { RxDashboard } from "react-icons/rx";
import { AiOutlineArrowUp, AiOutlineUser } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { HiOutlineArrowUpTray } from "react-icons/hi2";

import './sidebar.css'

import MenuItem from '../../reusable-components/sidebarMenuItem';
import { useLocation, useNavigate } from 'react-router-dom';

const CustomSidebar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const handleClickDashboard = (e) => {
        e.preventDefault()

        navigate("/home")
    }

    const handleClickTransfer = (e) => {
        e.preventDefault();

        navigate("/transfer/receiver")
    }

    const handleClickTopUp = (e) => {
        e.preventDefault();

        navigate("/top-up/input-amount")
    }

    const handleClickProfile = (e) => {
        e.preventDefault();

        navigate("/profile")
    }

    const handleClickLogOut = (e) => {
        e.preventDefault();

        localStorage.clear();

        navigate("/login")
    }

    return (
        <Container bsPrefix='sidebar-container flex-column flex-wrap'>
            <section className='responsive-view'>
                <MenuItem
                    menu={{
                        index: 1,
                        title: "Dashboard",
                        icon: <RxDashboard />
                    }}
                    isActive={location.pathname.includes("home")}
                    handleClick={handleClickDashboard}/>
                <MenuItem
                    menu={{
                        index: 2,
                        title: "Transfer",
                        icon: <AiOutlineArrowUp />
                    }} 
                    isActive={location.pathname.includes("transfer")}
                    handleClick={handleClickTransfer}/>
                <MenuItem
                    menu={{
                        index: 3,
                        title: "Top Up",
                        icon: <IoAdd />
                    }} 
                    isActive={location.pathname.includes("top-up")}
                    handleClick={handleClickTopUp}/>
                <MenuItem
                    menu={{
                        index: 4,
                        title: "Profile",
                        icon: <AiOutlineUser />
                    }} 
                    isActive={location.pathname.includes("profile")}
                    handleClick={handleClickProfile}/>
            </section>
            <section>
                <MenuItem
                    menu={{
                        index: 5,
                        title: "Log Out",
                        icon: <div style={{rotate:"90deg"}}><HiOutlineArrowUpTray /></div>
                    }} 
                    isActive={false}
                    handleClick={handleClickLogOut}
                />
            </section>
        </Container>
    )
}

export default CustomSidebar