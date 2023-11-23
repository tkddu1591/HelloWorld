import React, {useEffect, useState} from "react";
import {Container, Row} from "reactstrap";
import LectureViewHeader from "./LectrueViewHeader";
import '../scss/content.scss'
import '../scss/lecture.scss'
import LectureViewContent from "./LectureViewContent";
import LectureViewCurriculum from "./LectureViewCurriculum";
import LectureViewReview from "./review/LectureViewReview";
import LectureViewRecommendation from "./LectureViewRecommendation";
import axios from "axios";
import {API_BASE_URL} from "../../../App";
import {useLocation} from "react-router-dom";

function LectureView() {
    let [popup, setPopup] = useState<string>('');
    let [lecture, setLecture] = useState<any>({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    useEffect(() => {
        if (lectureNo !== null) {
            axios.get(API_BASE_URL + `/lecture/view?lectureNo=${lectureNo}`).then(response => {
                setLecture(response.data)
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            });
        }

    }, []);
    return <>
        <div style={{marginTop: '100px'}} className="lectureView"></div>
        <Container onClick={() => {
            if (popup === 'user') setPopup('')
        }}>
            <LectureViewHeader lecture={lecture}></LectureViewHeader>
            <Row>
                <LectureViewContent lecture={lecture}></LectureViewContent>
                <LectureViewCurriculum lecture={lecture}></LectureViewCurriculum>
                <LectureViewReview popup={popup} setPopup={setPopup}></LectureViewReview>
                <LectureViewRecommendation></LectureViewRecommendation>
            </Row>
        </Container>
    </>
}

export default LectureView