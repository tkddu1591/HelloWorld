import React, {useEffect, useState} from "react";
import ReviewList from "../../../../components/Lecture/ReviewList";
import axios from "axios";
import {API_BASE_URL} from "../../../../App";
import {useLocation} from "react-router-dom";
import LecturePagination from "../../../../components/Lecture/LecturePagination";

function LectureViewReviewList({popup, setPopup, setPageRequest, pageResponse}) {

    return <div style={{marginTop: '40px'}}>
        <ReviewList setPopup={setPopup} popup={popup} setPageRequest={setPageRequest} pageResponse={pageResponse}></ReviewList>
        <LecturePagination setPageRequest={setPageRequest} pageResponse={pageResponse}></LecturePagination>
    </div>
}


export default LectureViewReviewList