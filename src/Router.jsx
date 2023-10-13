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

import Profile from './pages/profile/profile-information/Index'
import ProfilePage from './pages/profile/profile page/Index'

import LandingPage from './pages/landingpage/Index';

import Dashboard from './pages/home/dashboard';

import PaymentMethod from './pages/topUp/payment-method';
import Transfer from './pages/transfer'
import InputAmount from './pages/transfer/input-amount'
import TopUp from './pages/topUp/topup-code'
import ChangePinPage1 from './pages/changePin/changePinPage1'
import ChangePinPage2 from './pages/changePin/changePinPage2'
import ChangePassword from './pages/changePassword'
import TransferHistory from './pages/history';
import Confirmation from './pages/transfer/confirmation';
import TransferStatus from './pages/transfer/transfer-status';
import PaymentCode from './pages/topUp/topup-code';
import TopUpHistory from './pages/top-up-history';
import InputAmountTopUp from './pages/topUp/input-amount-topup';

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                  
                {/* <Route exact path="/transfer" element={<Transfer />} /> */}

                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/pin-confirm" element={<Pin />} />
                <Route exact path="/pin-success" element={<Success />} />
                <Route exact path="/create-password/:token" element={<CreatePassword />} />
                <Route exact path="/reset-password" element={<ResetPassword />} />

                <Route exact path="/home" element={<Dashboard/>}/>
                <Route exact path="/home/history" element={<TransferHistory />} />

                <Route exact path="/profile/add-phone" element={<AddPhoneNumber />} />
                <Route exact path="/profile/profile-information" element={<Profile />} />
                <Route exact path="/profile" element={<ProfilePage />} />
                <Route exact path="/profile/manage-phone" element={<ManagePhoneNumber />} />
                <Route exact path="/profile/change-pin-1" element={<ChangePinPage1 />} />
                <Route exact path="/profile/change-pin-2" element={<ChangePinPage2 />} />
                <Route exact path="/profile/change-password" element={<ChangePassword />} />

                <Route exact path="/transfer/receiver" element={<Transfer />} />
                <Route exact path="/transfer/to/:id" element={<InputAmount />} />
                <Route exact path="/transfer/confirmation" element={<Confirmation />} />
                <Route exact path="/transfer/status" element={<TransferStatus />} />
                
                <Route exact path="/top-up" element={<TopUp />} />
                <Route exact path="/top-up/payment-code" element={<PaymentCode />} />
                <Route exact path="/top-up/input-amount" element={<InputAmountTopUp />} />
                <Route exact path="/top-up/payment-method" element={<PaymentMethod/>}/>
                <Route exact path="/top-up/history" element={<TopUpHistory />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
