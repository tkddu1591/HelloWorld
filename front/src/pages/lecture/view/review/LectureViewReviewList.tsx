import React, {useEffect, useRef, useState} from "react";
import ReviewList from "../../../../components/Lecture/ReviewList";
import LecturePagination from "../../../../components/Lecture/LecturePagination";

function LectureViewReviewList({
                                   popup, setPopup, setPageRequest, pageResponse, member, setIsReviewWrite,
                                   isReviewWrite, checkBuy, top
                               }) {
    return <div style={{marginTop: '40px'}}>
        {pageResponse?.list.map((item) => {
            return <ReviewList member={member} setPopup={setPopup} popup={popup} setPageRequest={setPageRequest}
                               isReviewWrite={isReviewWrite} setIsReviewWrite={setIsReviewWrite}
                               pageResponse={pageResponse} key={item.reviewNo} item={item}></ReviewList>
        })}
            <LecturePagination top={top} setPageRequest={setPageRequest}
                               pageResponse={pageResponse}></LecturePagination>
    </div>
}


export default LectureViewReviewList