import React, {useEffect, useState} from "react";
import {Button, Col, Progress} from "reactstrap";
import Subhead from "../../../../Subhead";
import LectureReviewStart from "./LectureViewReviewStar";
import LectureViewReviewList from "./LectureViewReviewList";
import LectureViewReviewWrite from "./LectureViewReviewWrite";
import reviewList from "../../../../components/Lecture/ReviewList";
import LecturePagination from "../../../../components/Lecture/LecturePagination";
import {useLocation} from "react-router-dom";
import {API_BASE_URL, apiClient} from "../../../../App";
import {changeDTO} from "../../../../store/changeDTO";

function LectureViewReview({checkBuy, popup, setPopup, lecture, setIsReviewWrite, isReviewWrite, member, div, top}) {
    let total = 44;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [lectureNo,setLectureNo] = useState(searchParams.get('lectureNo'));
    const [pageRequest, setPageRequest] = useState({
        pg:        1,
        size:      5,
        lectureNo: lectureNo,
        sort:      'reviewNo'
    });
    const [pageResponse, setPageResponse] = useState();
    useEffect(() => {
        setLectureNo(searchParams.get('lectureNo'))
    }, [ location.search]);
    useEffect(() => {
        changeDTO(setPageRequest,'lectureNo',lectureNo)
    }, [lectureNo]);
    useEffect(() => {
        apiClient.get(`/lecture/review/list`, {params: pageRequest})
            .then(response => {
                // lectureReviewList의 이름을 list로 변경
                const modifiedResponse = {...response.data, list: response.data.lectureReviewList};
                // 변경된 response를 state에 저장
                setPageResponse(modifiedResponse);
            })
            .catch(err => {
                console.log(err);
            });
    }, [isReviewWrite, pageRequest]);

    useEffect(() => {
        console.log(pageResponse)
    }, [pageResponse]);
    return <Col lg='9'>
        <div ref={div}>
            <Subhead title={'수강생 리뷰'}></Subhead>
            <LectureReviewStart pageResponse={pageResponse} lecture={lecture}
                                isReviewWrite={isReviewWrite}></LectureReviewStart>
            <LectureViewReviewList member={member} popup={popup} setPopup={setPopup} pageResponse={pageResponse}
                                   setPageRequest={setPageRequest} setIsReviewWrite={setIsReviewWrite}
                                   checkBuy={checkBuy}
                                   isReviewWrite={isReviewWrite} top={top}></LectureViewReviewList>
            {checkBuy &&
                <LectureViewReviewWrite setIsReviewWrite={setIsReviewWrite} member={member}
                                        isReviewWrite={isReviewWrite}></LectureViewReviewWrite>}
        </div>
    </Col>

}


export default LectureViewReview