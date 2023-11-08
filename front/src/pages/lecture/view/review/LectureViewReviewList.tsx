import React from "react";
import ReviewList from "../../../../components/Lecture/ReviewList";

function LectureViewReviewList({popup, setPopup}) {

    return <>
        <div style={{marginTop: '40px'}}>
            <ReviewList setPopup={setPopup} popup={popup}></ReviewList>
        </div>
    </>
}


export default LectureViewReviewList