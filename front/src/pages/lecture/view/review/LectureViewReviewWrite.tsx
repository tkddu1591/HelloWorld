import React, {useEffect, useState} from "react";
import Star from "../../../../components/Lecture/Star";
import {Button} from "reactstrap";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {changeDTO} from "../../../../store/changeDTO";
import {apiClient} from "../../../../App";

function LectureViewReviewWrite({setIsReviewWrite, isReviewWrite, member}) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    let myIp = useSelector((state: { myIp: string }) => state.myIp)
    const [review, setReview] = useState<{
        content: string, title: string, uid: string, regIp: string, score: number, lectureNo: number
    }>();
    useEffect(() => {
        changeDTO(setReview, 'regIp', myIp).then()
        changeDTO(setReview, 'uid', member.uid).then()
        changeDTO(setReview, 'lectureNo', lectureNo).then()
    }, [member]);
    const setScore = (value) => {
        changeDTO(setReview, 'score', value).then()
    }
    return <div style={{marginTop: '50px'}}>
        <p style={{fontSize: '25px'}}>리뷰 작성</p>
        <p>제목</p>
        <input value={review?.title} onChange={(e) => {
            changeDTO(setReview, 'title', e.target.value).then()
        }} style={{padding: '5px', width: '100%', border: '1px solid lightgray', borderRadius: '2px'}}/>
        <p style={{marginTop: '20px'}}>점수 <Star setChange={setScore} change={true} score={review?.score}
                                                size={17}></Star></p>
        <textarea style={{
            width: '100%', height: '200px', border: '1px solid lightgray', padding: '5px', borderRadius: '2px'
        }} value={review?.content}
                  onChange={(e) => {
                      changeDTO(setReview, 'content', e.target.value).then()
                  }}/>
        <Button color='info' style={{fontFamily: 'nanumsquare', fontWeight: '500'}}
                onClick={() => {
                    apiClient.post(`/lecture/review`, review).then(res => {
                        changeDTO(setReview,'content','').then(res=>{
                            changeDTO(setReview,'title','').then(res=>{
                                changeDTO(setReview,'score',0).then(res=>{
                                    setIsReviewWrite(!isReviewWrite)
                                })
                            })
                        })
                    }).catch(err => {console.log(err)})
                }}
        >리뷰 작성</Button>
    </div>
}

export default LectureViewReviewWrite