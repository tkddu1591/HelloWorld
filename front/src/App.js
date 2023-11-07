import React, {lazy, Suspense} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import DarkFooter from "./components/Footers/DarkFooter.js";

// sections for this page
import NucleoIcons from "./views/index-sections/NucleoIcons.js";
import {Outlet, Route, Routes} from "react-router-dom";
import LandingPage from "./views/examples/LandingPage";
import ProfilePage from "./views/examples/ProfilePage";
import LoginPage from "./pages/member/LoginPage";
import Home from "./pages/home/Home";
import LectureList from "./pages/lecture/list/LectureList";

import CodingtestView from "./pages/codingtest/CodingtestView";

import CodingtestList from "./pages/codingtest/CodingtestList";
import SignUp from "./pages/member/SignUp";
import FindByPass from "./pages/member/FindByPass";
import LectureView from "./pages/lecture/LectureView/LectureView";

const LectureHome = lazy(() => import("./pages/lecture/home/LectureHome"));


function App() {
    function fallback() {
        return <i>loading....</i>
    }

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <>
            <Routes>
                <Route path="/" element={<>
                    <IndexNavbar/>
                    <div className="main">
                        <Outlet></Outlet>
                    </div>
                    <DarkFooter/>
                </>}>
                    <Route path="/" element={<Home/>}>

                    </Route>
                    <Route path="company">

                    </Route>
                    <Route path="/codingTest" element={<CodingtestList/>}>

                    </Route>
                    <Route path="/codingTestView" element={<CodingtestView/>}>

                    </Route>
                    <Route path="lecture" element={<><Suspense fallback={fallback()}>
                        <Outlet></Outlet>
                    </Suspense>
                    </>}>
                        <Route path="list" element={<LectureList></LectureList>}></Route>
                        <Route path="index" element={<LectureHome></LectureHome>}></Route>
                        <Route path="view" element={<LectureView></LectureView>}></Route>
                    </Route>
                    <Route path="community">

                    </Route>
                    <Route path="dm">

                    </Route>
                    <Route path="my">

                    </Route>

                </Route>
                <Route path="/nucleo-icons" element={<NucleoIcons/>}/>
                <Route path="/landing-page" element={<LandingPage/>}/>
                <Route path="/profile-page" element={<ProfilePage/>}/>

                <Route path="/login-page" element={<LoginPage/>}/>
                <Route path="/signup-page" element={<SignUp/>}/>
                <Route path="/findByPass-page" element={<FindByPass/>}/>

                <Route path="*" element={<>{/*<Navigate to="/" replace/>*/}
                    <div>404Page</div>
                </>}/>
            </Routes>
            {/*얘네가 인덱스*/}

        </>
    );
}

export default App;
