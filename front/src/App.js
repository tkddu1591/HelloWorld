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

function App() {
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
            <IndexNavbar/>
            <div className="wrapper">
                {/*<IndexHeader />*/}
                <div className="main">
                    <HomeHeader></HomeHeader>
                    <HomeMain></HomeMain>

                    {/*<Carousel />*/}
                    {/*<Pagination />*/}
                    {/* <Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <SignUp />
          <Notifications />
          <Typography />
          <Javascript />

          <NucleoIcons />
          <CompleteExamples />

          <Examples />
          <Download />*/}
                </div>
                <DarkFooter/>
            </div>
        </>
    );
}

export default App;
