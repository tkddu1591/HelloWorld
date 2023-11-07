import LectureHeader from "./LectureHeader";
import React from "react";
import CardList from "../CardList";


function LectureHome() {


    return <>
        <LectureHeader></LectureHeader>
        <CardList title={"추천강의"} more={true}></CardList>
        <CardList title={"인기강의"} more={true}></CardList>
        <CardList title={"최근강의"} more={true}></CardList>
    </>
}

export default LectureHome;