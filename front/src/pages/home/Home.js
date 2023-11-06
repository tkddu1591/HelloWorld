import IndexNavbar from "../../components/Navbars/IndexNavbar";
import HomeHeader from "./HomeHeader";
import HomeMain from "./HomeMain";
import DarkFooter from "../../components/Footers/DarkFooter";
import React from "react";

function Home(){
    return<>

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
        </div></>
}
export default Home;