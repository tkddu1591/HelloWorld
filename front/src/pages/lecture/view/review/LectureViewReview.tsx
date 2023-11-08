import React from "react";
import {Button, Col, Progress} from "reactstrap";
import Subhead from "../../../../Subhead";
import LectureReviewStart from "./LectureViewReviewStar";
import LectureViewReviewList from "./LectureViewReviewList";
import LectureViewReviewWrite from "./LectureViewReviewWrite";

function LectureViewReview({popup, setPopup}) {
    let total = 44;
    return <>
        <Col lg='9'>
            <Subhead title={'수강생 리뷰'}></Subhead>
            <LectureReviewStart total={total}></LectureReviewStart>
            <LectureViewReviewList popup={popup} setPopup={setPopup}></LectureViewReviewList>
            <LectureViewReviewWrite></LectureViewReviewWrite>
        </Col>
    </>
}


export default LectureViewReview