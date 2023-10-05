import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AfterLoginLayout from './layout/afterLogin'
import AddPhoneNumber from "./pages/home/addPhoneNumber";
import ManagePhoneNumber from "./pages/home/managePhone";
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Pin from './pages/auth/register/pin'
import CreatePassword from './pages/auth/login/create-password'
import ResetPassword from './pages/auth/login/reset-password'
import Success from './pages/auth/register/pinsuccess'
import LandingPage from './pages/landingpage/Index';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<AfterLoginLayout />} />
                <Route exact path="/home" element={<LandingPage/>} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/pin-confirm" element={<Pin />} />
                <Route exact path="/pin-success" element={<Success />} />
                <Route exact path="/create-password" element={<CreatePassword />} />
                <Route exact path="/reset-password" element={<ResetPassword />} />
                <Route exact path="/addPhone" element={<AddPhoneNumber/>}/>
                <Route exact path="/managePhone" element={<ManagePhoneNumber/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
