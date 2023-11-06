import {Outlet, Routes, Route} from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";

function Member() {
    return (
        <Routes>
            <Route path="/" element={<Outlet />}>
                <Route path="/" element={<LoginPage />} />
                <Route path="login" element={<LoginPage />} />

                <Route path="signup" element={<SignUp />} />

                <Route path="find-by-id" element={<div>Find by ID Page</div>} />
                <Route path="find-by-pw" element={<div>Find by Password Page</div>} />
            </Route>
        </Routes>
    )
}

export default Member;