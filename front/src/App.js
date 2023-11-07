import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "./components/Navbars/IndexNavbar.js";
import IndexHeader from "./components/Headers/IndexHeader.js";
import DarkFooter from "./components/Footers/DarkFooter.js";

// sections for this page
import Images from "./views/index-sections/Images.js";
import BasicElements from "./views/index-sections/BasicElements.js";
import Navbars from "./views/index-sections/Navbars.js";
import Tabs from "./views/index-sections/Tabs.js";
import Pagination from "./views/index-sections/Pagination.js";
import Notifications from "./views/index-sections/Notifications.js";
import Typography from "./views/index-sections/Typography.js";
import Javascript from "./views/index-sections/Javascript.js";
import Carousel from "./views/index-sections/Carousel.js";
import NucleoIcons from "./views/index-sections/NucleoIcons.js";
import CompleteExamples from "./views/index-sections/CompleteExamples.js";
import SignUp from "./views/index-sections/SignUp.js";
import Examples from "./views/index-sections/Examples.js";
import Download from "./views/index-sections/Download.js";
import HomeHeader from "./pages/home/HomeHeader";
import HomeMain from "./pages/home/HomeMain";
import {Navigate, Outlet, Route, Routes} from "react-router-dom";
import LandingPage from "./views/examples/LandingPage";
import ProfilePage from "./views/examples/ProfilePage";
import LoginPage from "./views/examples/LoginPage";
import Home from "./pages/home/Home";
import LectureList from "./pages/lecture/list/LectureList";
import Member from "./pages/member/Member";

import CodingtestView from "./pages/codingtest/CodingtestView";

import CodingtestList from "./pages/codingtest/CodingtestList";
import SignUp from "./pages/member/SignUp";
import LectureView from "./pages/lecture/view/LectureView";

const LectureHome = lazy(() => import("./pages/lecture/home/LectureHome"));

// COMMUNITY
import List from "./pages/community/List";
import View from "./pages/community/View";
import Write from "./pages/community/Write";

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
                    <Route path="member" element={<Member/>}>

                    </Route>
                    <Route path="/codingTest" element={<CodingtestList/>}>

                    </Route>
                    <Route path="/codingTest/view" element={<CodingtestView/>}>

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
                        <Route path={"list"} element={<List></List>}/>
                        <Route path={"view"} element={<View></View>}/>
                        <Route path={"write"} element={<Write></Write>}/>
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

                <Route path="*" element={<>{/*<Navigate to="/" replace/>*/}
                    <div>404Page</div>
                </>}/>
            </Routes>
            {/*얘네가 인덱스*/}

        </>
    );
}

export default App;
