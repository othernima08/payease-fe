import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AfterLoginLayout from './layout/afterLogin'


const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<AfterLoginLayout/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router