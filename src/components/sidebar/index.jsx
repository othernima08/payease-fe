import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'

import { RxDashboard } from "react-icons/rx";
import { AiOutlineArrowUp, AiOutlineUser } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";

import './sidebar.css'

import MenuItem from '../sidebarMenuItem';

const CustomSidebar = () => {
    return (
        <Container bsPrefix='sidebar-container'>
            <section>
                <MenuItem
                    menu={{
                        index: 1,
                        title: "Dashboard",
                        icon: <RxDashboard />
                    }} />
                <MenuItem
                    menu={{
                        index: 2,
                        title: "Transfer",
                        icon: <AiOutlineArrowUp />
                    }} />
                <MenuItem
                    menu={{
                        index: 3,
                        title: "Top Up",
                        icon: <IoAdd />
                    }} />
                <MenuItem
                    menu={{
                        index: 4,
                        title: "Profile",
                        icon: <AiOutlineUser />
                    }} />
            </section>
            <section>
                <MenuItem
                    menu={{
                        index: 5,
                        title: "Log Out",
                        icon: <HiArrowLeftOnRectangle />
                    }} />
            </section>
        </Container>
    )
}

export default CustomSidebar