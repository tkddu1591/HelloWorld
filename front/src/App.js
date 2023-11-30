import React, {lazy, Suspense, useEffect} from 'react';

// reactstrap components
// import {
// } from "reactstrap";
// core components
import './scss/main.scss';
import IndexNavbar from './components/Navbars/IndexNavbar.js';
import DarkFooter from './components/Footers/DarkFooter.js';
// sections for this page
import NucleoIcons from './views/index-sections/NucleoIcons.js';
import {Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import LandingPage from './views/examples/LandingPage';
import ProfilePage from './views/examples/ProfilePage';
import LoginPage from './pages/member/LoginPage';
import LectureList from './pages/lecture/list/LectureList';

import CodingtestView from './pages/codingtest/CodingtestView';

import CodingtestList from './pages/codingtest/CodingtestList';
import SignUp from './pages/member/SignUp';
import CodingtestResult from './pages/codingtest/CodingtestResult';
import FindByPass from './pages/member/FindByPass';
import CompanyList from './pages/company/CompanyList';
import CompanyView from './pages/company/CompanyView';

import CodingtestQna from './pages/codingtest/CodingtestQna';
import CodingtestQnaView from './pages/codingtest/CodingtestQnaView';
import CodingtestQnaWrite from './pages/codingtest/CodingtestQnaWrite';
import CodingtestBestCode from './pages/codingtest/CodingtestBestCode';
import CommunityList from './pages/community/List/CommunityList';
import CommunityView from './pages/community/View/CommunityView';
import CommunityWrite from './pages/community/Write/CommunityWrite';
import CompanyApply from './pages/company/CompanyApply';
import CompanyBookmark from './pages/company/CompanyBookmark';
import FindByEmail from './pages/member/FindByEmail';
import FinishSignup from './pages/member/FinishSignup';
import DmChat from './pages/dm/Chat/DmChat';
import DmHide from './pages/dm/DmHide/DmHide';
import DmBlock from './pages/dm/block/DmBlock';
import DmMain from './pages/dm/main/DmMain';
import MyInfo from './pages/my/MyInfo';
import Fallback from './pages/Fallback';
import LectureHome from "./pages/lecture/home/LectureHome";
import LectureView from "./pages/lecture/view/LectureView";
import LectureCart from "./pages/lecture/cart/LectureCart";
import LectureOrder from "./pages/lecture/order/LectureOrder";
import LectureComplete from "./pages/lecture/complete/LectureComplete";
import LectureWriteMain from "./pages/lecture/write/main/LectureWriteMain";
import Home from "./pages/home/Home";
import LectureDetail from "./pages/lecture/detail/LectureDetail";
import LectureWriteContent from "./pages/lecture/write/content/LectureWriteContent";
import MemberRoutes from "./pages/member/MemberRoutes";
import {useDispatch} from "react-redux";
import axios from "axios";
import OAuth2RedirectHandler from "./pages/member/OAuth2RedirectHandler";
import {insertMyIp} from "./slice/myIpSlice";


export const API_BASE_URL = process.env.REACT_APP_API_ROOT;
export const API_FRONT_URL = process.env.REACT_APP_API_FRONT;
const host = window.location.hostname === "localhost"
    ? 'http://localhost:8080'
    : "/api";

export const apiClient = axios.create({
    baseURL: host,
});
function App() {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('https://geolocation-db.com/json/')
            .then((res) => {
                dispatch(insertMyIp(res.data.IPv4))
            })
    }, [])

    React.useEffect(() => {
        document.body.classList.add('index-page');
        document.body.classList.add('sidebar-collapse');
        document.documentElement.classList.remove('nav-open');
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove('index-page');
            document.body.classList.remove('sidebar-collapse');
        };
    });
    const [color, setColor] = React.useState('black');
    const [display, setDisplay] = React.useState('flex');
    const [pageChange, setPageChange] = React.useState(false);
    useEffect(() => {
        setColor(null);
        setTimeout(() => {
            setDisplay('none');
        }, 1000);
    }, [color]);

    function pageLoading() {
        setColor('black');
        setDisplay('flex');
        setPageChange(!pageChange);
    }

    function fallback() {
        pageLoading();
    }

    return (
        <>
        <div
            style={{
                position: 'fixed',
                opacity: color === 'black' ? '1' : '0',
                width: '100%',
                height: '100%',
                top: '0',
                zIndex: '99999',
                display: display,
                justifyContent: 'center',
                alignItems: 'center',
                transitionDuration: '1s',
            }}>
            <i className="now-ui-icons loader_gear spin" style={{color: 'gray', fontSize: '65px'}}></i>
        </div>
        <Routes>
            <Route path={'/lecture/write/content'} element={
                <Suspense fallback={<Fallback fallback={fallback}></Fallback>}>

                    <IndexNavbar/>
                    <LectureWriteContent/>
                </Suspense>}></Route>
        <Route
            path="/lecture/detail"
            element={
                <Suspense fallback={<Fallback fallback={fallback}></Fallback>}>
                    <LectureDetail/>
                </Suspense>
            }
        />
        <Route path="/dm" element={<DmMain></DmMain>}></Route>
        <Route path="/dm/block" element={<DmBlock></DmBlock>}></Route>
        <Route path="/dm/hide" element={<DmHide></DmHide>}></Route>
        <Route path="/dm/chat/:id" element={<DmChat></DmChat>}></Route>

        <Route
            path="/"
            element={
                <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                    <Suspense fallback={<Fallback fallback={fallback}></Fallback>}>
                        <IndexNavbar/>
                        <div className="main" style={{flex: 1}}>
                            <Outlet></Outlet>
                        </div>
                        <DarkFooter/>
                    </Suspense>
                </div>
            }>
            <Route
                path="/"
                element={
                    <Suspense fallback={<Fallback fallback={fallback}/>}>
                        <Home/>
                    </Suspense>
                }></Route>

            <Route
                path="member"
                element={<MemberRoutes fallback={fallback} />}>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="signup" element={<SignUp/>}/>
                <Route path="finishSignup" element={<FinishSignup/>}/>
                <Route path="findByPass" element={<FindByPass/>}/>
                <Route path="findByEmail" element={<FindByEmail/>}/>
            </Route>
            <Route path="/login/oauth2/:provider" element={<OAuth2RedirectHandler/>}></Route>

            <Route
                path="company"
                element={
                    <Suspense fallback={<Fallback fallback={fallback}></Fallback>}>
                        <Outlet></Outlet>
                    </Suspense>
                }>
                <Route path="list" element={<CompanyList/>}></Route>
                <Route path="view" element={<CompanyView/>}></Route>
                <Route path="apply" element={<CompanyApply/>}></Route>
                <Route path="bookmark" element={<CompanyBookmark/>}></Route>
            </Route>

            <Route path="/codingTest/list" element={<CodingtestList/>}></Route>
            <Route path="/codingTest/Result" element={<CodingtestResult/>}></Route>
            <Route path="/codingTest/Qna" element={<CodingtestQna/>}></Route>
            <Route path="/codingTest/View" element={<CodingtestView/>}></Route>
            <Route path="/codingTest/view" element={<CodingtestView/>}></Route>
            <Route path="/codingtest/Qna/View" element={<CodingtestQnaView/>}></Route>
            <Route path="/codingtest/Qna/write" element={<CodingtestQnaWrite/>}></Route>
            <Route path="/codingtest/Qna/best" element={<CodingtestBestCode/>}></Route>
            <Route
                path="lecture"
                element={
                        <Suspense fallback={<Fallback fallback={fallback}></Fallback>}>
                            <Outlet></Outlet>
                        </Suspense>
                }>
                <Route path="list" element={<LectureList></LectureList>}></Route>
                <Route path="index" element={<LectureHome></LectureHome>}></Route>
                <Route path="view" element={<LectureView></LectureView>}></Route>
                <Route path="cart" element={<LectureCart></LectureCart>}></Route>
                <Route path="order" element={<LectureOrder></LectureOrder>}></Route>
                <Route path="complete" element={<LectureComplete></LectureComplete>}></Route>
                <Route path={'write/main'} element={<LectureWriteMain/>}></Route>

            </Route>
            <Route path="/" element={<Home/>}></Route>


            <Route
                path="community"
                element={
                    <div className="community">
                        <Outlet></Outlet>
                    </div>
                }>
                <Route path={'list'} element={<CommunityList></CommunityList>}/>
                <Route path={'view'} element={<CommunityView></CommunityView>}/>
                <Route path={'write'} element={<CommunityWrite></CommunityWrite>}/>
            </Route>
            <Route path="my">
                <Route path={'info'} element={<MyInfo/>}/>

            </Route>
        </Route>
        <Route path="/nucleo-icons" element={<NucleoIcons/>}/>
        <Route path="/landing-page" element={<LandingPage/>}/>
        <Route path="/profile-page" element={<ProfilePage/>}/>
        <Route
            path="*"
            element={
                <>
                    {/*<Navigate to="/" replace/>*/}
                    <div>404Page</div>
                </>
            }
        />
        </Routes>
    {/*얘네가 인덱스*/
    }
</>
)
    ;
}

export default App;
