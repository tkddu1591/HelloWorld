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
import {getRandomValueFromArray} from "../../../utils/getRandomValueFromArray";

function LectureView() {

    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    let [tagColor, setTagColor] = useState<{ value: string, color: string }[]>([]);
    useEffect(() => {
        //태그
        if (tags.length === 0)
            axios.get(`${API_BASE_URL}/lecture/tags`).then((res) => {
                if (res.data.length !== 0) {
                    const newTags = res.data.map((tag) => ({
                        value: tag.tagNo,
                        label: tag.tagName,
                    }));
                    // 중복된 값을 필터링하여 추가
                    setTags((prevTags) => {
                        const uniqueTags = newTags.filter(newTag => !prevTags.some(prevTag => prevTag.value === newTag.value));
                        return [...(prevTags || []), ...uniqueTags];
                    });
                }
            }).catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {

        if (tags !== undefined) {
            setTagColor(tags.map(tag => ({value: tag.label, color: getRandomValueFromArray()})));
        }
    }, [tags]);
    let [popup, setPopup] = useState<string>('');
    let [lecture, setLecture] = useState<any>({});
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    const [isReviewWrite, setIsReviewWrite] = useState(false);
    useEffect(() => {
        if (lectureNo !== null) {
            axios.get(API_BASE_URL + `/lecture/view?lectureNo=${lectureNo}`).then(response => {
                setLecture(response.data)
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            });
        }
    }, [isReviewWrite]);
    return <>
        <div style={{marginTop: '100px'}} className="lectureView"></div>
        <Container onClick={() => {
            if (popup !== '') setPopup('')
        }}>
            <LectureViewHeader tagColor={tagColor} lecture={lecture}></LectureViewHeader>
            <Row>
                <LectureViewContent lecture={lecture}></LectureViewContent>
                <LectureViewCurriculum lecture={lecture}></LectureViewCurriculum>
                <LectureViewReview popup={popup} isReviewWrite={isReviewWrite} setIsReviewWrite={setIsReviewWrite} lecture={lecture} setPopup={setPopup}></LectureViewReview>
                <LectureViewRecommendation tagColor={tagColor} tagList={lecture.tagList}></LectureViewRecommendation>
            </Row>
        </Container>
    </>
}

export default LectureView