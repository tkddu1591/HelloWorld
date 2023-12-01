import UserPopup from './UserPopup';
import Star from './Star';
import React, {RefObject, useEffect, useRef, useState} from 'react';
import {changeDTO} from "../../store/changeDTO";
import axios from "axios";
import {API_BASE_URL} from "../../App";
import javascript from "../../views/index-sections/Javascript";
import {useSelector} from "react-redux";

interface ReviewListProps {
    popup: string;
    setPopup: React.Dispatch<React.SetStateAction<string>>;
    setPageRequest: React.Dispatch<React.SetStateAction<any>>;
    pageResponse?: any;
    member?: any
    item?: any
    setIsReviewWrite: (value: boolean) => void;
    isReviewWrite: boolean;
}

function ReviewList({popup, setPopup, item, setPageRequest, member, setIsReviewWrite, isReviewWrite}: ReviewListProps) {
    let popupSetting = {
        top:         20,
        marginLeft:  0,
        marginRight: 50,
        isPopup:     true,
        condition:   [
            {
                data:   '신고',
                action: '/member/report',
            },
            {
                data:   '차단',
                action: '/member/block',
            },
            {
                data:      '대화',
                action:    '/dm/chat/1',
                newWindow: true,
            },
        ],
    };

    const myIp = useSelector<any>(state => state.myIp);
    const [newReview, setNewReview] = useState({
        content: item.content, isChange: false, reviewNo: item.reviewNo, score: item.score, lectureNo: item.lectureNo,
        title:   item.title, uid: item.uid, regIp: myIp
    });
    useEffect(() => {
        setNewReview({
            content:   item.content, isChange: false, reviewNo: item.reviewNo, score: item.score,
            lectureNo: item.lectureNo, title: item.title, uid: member.uid, regIp: myIp
        })
    }, [item])
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleResizeHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
        }
    };


    useEffect(() => {
        handleResizeHeight(); // 초기 렌더링 시에도 높이를 조절하려면 추가
    }, [newReview.content]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    const titleTextareaRef = useRef<HTMLTextAreaElement>(null);

    const handleTitleResizeHeight = () => {
        if (titleTextareaRef.current) {
            titleTextareaRef.current.style.height = 'auto';
            titleTextareaRef.current.style.height = titleTextareaRef.current.scrollHeight + 'px';
        }
    };


    useEffect(() => {
        handleResizeHeight(); // 초기 렌더링 시에도 높이를 조절하려면 추가
    }, [newReview.title]); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    const setScore = function (value) {
        changeDTO(setNewReview, 'score', value).then()
    }


    console.log(item)
    return <div key={item.reviewNo}
                style={{
                    display:        'flex',
                    justifyContent: 'space-between',
                    marginTop:      '12px',
                    borderBottom:   '1px solid lightgray',
                    paddingBottom:  '10px',
                    position:       'relative',
                }}>
        <div style={{width: '10%', marginTop: '5px'}}>
            <i className="bi bi-person-circle" style={{fontSize: '40px'}}></i>
        </div>
        <div style={{width: '90%', marginLeft: '5px'}}>
            {popup === 'user' + item.reviewNo && <UserPopup popupSetting={popupSetting}></UserPopup>}
            <p style={{fontSize: '12px', color: 'gray', margin: 0}}>
						<span
                            style={{cursor: 'pointer'}}
                            onClick={() => {
                                setPopup('user' + item.reviewNo);
                            }}>
							{item.nick}
						</span>{' '}
                / {Array.isArray(item.regDate) && (
                item.regDate.slice(0, 6).map((number, index) => (
                    (index === 0 ? String(number).padStart(4, '0') : String(number).padStart(2, '0')) +
                    ((index < 2) ? '-' : (index === 2 ? ' ' : (index === 5 ? '' : ':')))
                )).join('')
            )}
            </p>
            <textarea style={{
                width:      '100%',
                resize:     'none',
                height:     "auto",
                fontFamily: 'nanumsquare',
                border:     newReview.isChange ? '1px solid lightgray' : 'none', fontSize: '15px', marginBottom: '10px'
            }} spellCheck={false} value={newReview.title} onChange={(e) => {
                handleTitleResizeHeight()
                if (newReview.isChange === true)
                    changeDTO(setNewReview, 'title', e.target.value)
            }} rows={1} ref={titleTextareaRef}></textarea>
            <div>
                <Star score={newReview.score} size={15} change={newReview.isChange} setChange={setScore}></Star>
            </div>


            {item.uid === member.uid && <>

                    <textarea value={newReview.content} onChange={(e) => {
                        handleResizeHeight()
                        if (newReview.isChange === true)
                            changeDTO(setNewReview, 'content', e.target.value)
                    }}
                              ref={textareaRef}
                              style={{
                                  width:      '100%',
                                  resize:     'none',
                                  height:     "auto",
                                  fontFamily: 'nanumsquare',
                                  border:     newReview.isChange ? '1px solid lightgray' : 'none',
                              }} rows={1} spellCheck={false}/>
                <div style={{display: "flex", justifyContent: "right", color: "gray", fontSize: '12px'}}>
                    {newReview.isChange && <>
                    <span style={{cursor: "pointer"}}
                          onClick={() => {
                              setNewReview({
                                  content: item.content, isChange: false, reviewNo: item.reviewNo,
                                  score:   item.score, lectureNo: item.lectureNo, title: item.title, uid: item.uid,
                                  regIp:   myIp
                              })
                          }}>취소</span>
                        <span style={{userSelect: "none"}}>|</span></>
                    }

                    <span style={{cursor: "pointer"}} onClick={async () => {
                        if (!newReview.isChange) {
                            changeDTO(setNewReview, 'isChange', true).then()
                        } else {
                            if (item.content === newReview.content && item.title === newReview.title && item.score === newReview.score)
                                alert('수정된 사항이 없습니다.')
                            else {
                                if (window.confirm('수정하시겠습니까?')) {
                                    await axios.post(`${API_BASE_URL}/lecture/review/update`, newReview)
                                    await changeDTO(setNewReview, 'isChange', false).then((res) => setIsReviewWrite(!isReviewWrite))
                                }
                            }
                        }
                    }}>수정</span>
                    <span style={{userSelect: "none"}}>|</span>
                    <span style={{cursor: "pointer"}} onClick={() => {
                        if (window.confirm('삭제하시겠습니까?'))
                            axios.delete(`${API_BASE_URL}/lecture/review`, {params: item}).then(() => setIsReviewWrite(!isReviewWrite))
                    }}>삭제</span></div>
            </>
            }
        </div>
    </div>
}

export default ReviewList;
