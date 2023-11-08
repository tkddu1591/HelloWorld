import React, {useState} from "react";
import { Container, Row} from "reactstrap";
import LectrueViewHeader from "./LectrueViewHeader";
import '../scss/content.scss'
import '../scss/lecture.scss'
import LectureViewContent from "./LectureViewContent";
import LectureViewCurriculum from "./LectureViewCurriculum";
import LectureViewReview from "./review/LectureViewReview";
import LectureViewRecommendation from "./LectureViewRecommendation";

function LectureView() {
    let [popup, setPopup] = useState<string>('');
    return <>
        <div style={{marginTop: '100px'}} className="lectureView"></div>
        <Container onClick={()=>{if(popup==='user')setPopup('')}}>
            <LectrueViewHeader></LectrueViewHeader>
            <Row>
                <LectureViewContent></LectureViewContent>
                <LectureViewCurriculum></LectureViewCurriculum>
                <LectureViewReview popup={popup} setPopup={setPopup}></LectureViewReview>
                <LectureViewRecommendation></LectureViewRecommendation>
            </Row>
        </Container>
    </>
}

export default LectureView