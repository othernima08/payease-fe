import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import Register from './pages/auth/register'
import Pin from './pages/auth/register/pin'
import CreatePassword from './pages/auth/login/create-password'
import ResetPassword from './pages/auth/login/reset-password'
import Success from './pages/auth/register/pinsuccess'

function Router() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/pin-confirm" element={<Pin />} />
     <Route path="/pin-success" element={<Success />} />
     <Route path="/create-password" element={<CreatePassword />} />
     <Route path="/reset-password" element={<ResetPassword />} />
   </Routes>
   </BrowserRouter>
  )
}

export default Router