import Banner from "../../../components/Lecture/Banner";
import React from "react";
import CardList from "../CardList";


function LectureHome() {


    return <>
        <div className="clear-filter page-header" style={{minHeight: '30vh', maxHeight: '500px', height: 'auto'}}>
            <Banner></Banner>
        </div>
        <CardList title={"추천강의"} more={true}></CardList>
        <CardList title={"인기강의"} more={true}></CardList>
        <CardList title={"최근강의"} more={true}></CardList>
    </>
}

export default LectureHome;