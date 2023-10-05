import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Pin from './pages/auth/register/pin'
import CreatePassword from './pages/auth/login/create-password'
import ResetPassword from './pages/auth/login/reset-password'
import Success from './pages/auth/register/pinsuccess'

import Home from './pages/home'
import Transfer from './pages/transfer'
import TopUp from './pages/topUp'
import Profile from './pages/profile'
import ChangePinPage1 from './pages/changePin/changePinPage1'
import ChangePinPage2 from './pages/changePin/changePinPage2'
import ChangePassword from './pages/changePassword'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/profile/change-pin-1" element={<ChangePinPage1 />} />
                <Route exact path="/profile/change-pin-2" element={<ChangePinPage2 />} />
                <Route exact path="/profile/change-password" element={<ChangePassword />} />

                <Route exact path="/home" element={<Home />} />
                <Route exact path="/transfer" element={<Transfer />} />
                <Route exact path="/top-up" element={<TopUp />} />
                <Route exact path="/profile" element={<Profile />} />

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/pin-confirm" element={<Pin />} />
                <Route exact path="/pin-success" element={<Success />} />
                <Route exact path="/create-password" element={<CreatePassword />} />
                <Route exact path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router