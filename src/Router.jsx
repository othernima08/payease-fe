import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage";
// import AddPhoneNumber from "./pages/home/addPhoneNumber";
// import ManagePhoneNumber from "./pages/home/managePhone";

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                {/* <Route path="/addPhone" element={<AddPhoneNumber/>}/>
                <Route path="/managePhone" element={<ManagePhoneNumber/>}/> */}
            </Routes>
        </BrowserRouter>
    )
}