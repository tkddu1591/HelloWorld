import React, {useEffect, useRef, useState} from "react";
import {Container, Row} from "reactstrap";
import LectureViewHeader from "./LectureViewHeader";
import '../scss/content.scss'
import '../scss/lecture.scss'
import LectureViewContent from "./LectureViewContent";
import LectureViewCurriculum from "./LectureViewCurriculum";
import LectureViewReview from "./review/LectureViewReview";
import LectureViewRecommendation from "./LectureViewRecommendation";
import axios from "axios";
import {API_BASE_URL} from "../../../App";
import {useLocation, useNavigate} from "react-router-dom";
import {getRandomValueFromArray} from "../../../utils/getRandomValueFromArray";
import {sendRefreshToken} from "../../../utils/member/sendRefreshToken";
import {useDispatch} from "react-redux";

function LectureView() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [tags, setTags] = useState<{
        value: number,
        label: string
    }[]>([])
    let [tagColor, setTagColor] = useState<{ value: string, color: string }[]>([]);
    const [member, setMember] = useState<any>({})
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
        const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")

        if (accessToken !== null)
            axios.get(`${API_BASE_URL}/me`, {
                headers: {"Authorization": `Bearer ${accessToken}`}
            })
                .then((res) => {
                    setMember(res.data);
                })
                .catch((err) => {
                    console.log("실패? : " + JSON.stringify(err));
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
    const initialLectureNo = searchParams.get('lectureNo');
    const [lectureNo, setLectureNo] = useState(initialLectureNo);
    const [isReviewWrite, setIsReviewWrite] = useState(false);
    useEffect(() => {
        if (lectureNo !== null) {
            axios.get(API_BASE_URL + `/lecture/view?lectureNo=${searchParams.get('lectureNo')}`).then(response => {
                setLecture(response.data)
                console.log(response.data)
            }).catch(err => {
                console.log(err)
            });
        }
    }, [isReviewWrite, location.search]);
    const [checkBuy, setCheckBuy] = useState(false)
    const [checkSeller, setCheckSeller] = useState(false)
    const div = useRef<HTMLDivElement>(null);

    let [top, setTop] = useState(0);
    const findTop = (div) => {
        if (div.current) {
            setTop(Number(div.current.getBoundingClientRect().top)-20)
        }
        console.log(div.current?.getBoundingClientRect())
    };
    useEffect(() => {
        if((member.uid && lecture.seller)&&member?.uid ===lecture?.seller){
            setCheckSeller(true)
        }
        else if (member.uid && lecture.lectureNo)
            axios.get(`${API_BASE_URL}/api/lecture/orderItem/buy?uid=${member.uid}&lectureNo=${lecture.lectureNo}`).then((res) => {
                if (res.data > 0) {
                    setCheckBuy(true)
                }
            }).catch(err => console.log(err));
        findTop(div)
    }, [member, lecture])

    return <>
        <div style={{marginTop: '100px'}} className="lectureView"></div>
        <Container onClick={() => {
            if (popup !== '') setPopup('')
        }}>
            <LectureViewHeader  tagColor={tagColor} checkBuy={checkBuy} checkSeller={checkSeller} lecture={lecture} member={member}></LectureViewHeader>
            <Row>
                <LectureViewContent lecture={lecture}></LectureViewContent>
                <LectureViewCurriculum lecture={lecture}></LectureViewCurriculum>
                <LectureViewReview div={div} top={top} checkBuy={checkBuy} member={member} popup={popup} isReviewWrite={isReviewWrite} setIsReviewWrite={setIsReviewWrite}
                                   lecture={lecture} setPopup={setPopup}></LectureViewReview>
                <LectureViewRecommendation tagColor={tagColor} tagList={lecture.tagList}></LectureViewRecommendation>
            </Row>
        </Container>
    </>
}

export default LectureView