import {Button, Col, Progress, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import '../scss/lecture.scss'
import Star from "../../../components/Lecture/Star";
import {useNavigate} from "react-router-dom";
import {getRandomValueFromArray} from "../../../utils/getRandomValueFromArray";
import {API_BASE_URL, apiClient} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {changeContentCount} from "../../../slice/LectureContent";

function LectureViewHeader({lecture, tagColor, member, checkBuy, checkSeller}) {
    let navigate = useNavigate();
    let [arrayList, setArrayList] = useState<string[]>([]);
    let contentCount = useSelector((state: any) => state.contentCount);
    let dispatch = useDispatch()
    useEffect(() => {
        if (lecture.lectureNo !== undefined)
            apiClient.get(`/lecture/content/countByLecture`, {params: {lectureNo: lecture.lectureNo}}).then((res) => {
                dispatch(changeContentCount(res.data))
            }).catch(err => console.log(err));
    }, [lecture]);
    let lectureIHeardList = useSelector((state: any) => state.lectureIHeardList);
    return <>
        <h3 style={{marginBottom: '15px', fontSize: '30px'}}>{lecture.title}</h3>

        <div>
            {lecture.score !== 0 && <>
                <Star size={20} score={lecture.score}></Star>
                <span style={{
                    marginLeft: '5px', marginRight: '20px'
                }}>( {lecture.review?.toLocaleString()} 리뷰 )</span></>}

            {lecture?.sold !== 0 && lecture.sold && <span style={{marginRight: '10px'}}><i className="bi bi-people-fill"
                                                                                           style={{
                                                                                               fontSize:    '15px',
                                                                                               marginRight: '3px'
                                                                                           }}></i>
                {lecture.sold.toLocaleString()}명 수강</span>}
            {lecture.hasTagNames?.map((tag, index) => {
                arrayList.push(getRandomValueFromArray())
                return <Button
                    key={tag}
                    className="btn-round"
                    color={(tagColor?.find(item => item.value === tag) as {
                        value: string;
                        color: string
                    } | undefined)?.color || 'defaultColor'}
                    type="button"
                    onClick={e => {
                        e.preventDefault();
                    }}
                    style={{
                        fontFamily: 'nanumsquare',
                        padding:    '5px',
                    }}>
                    #{tag}
                </Button>
            })}
        </div>
        <Row>
            <Col lg='9' style={{marginTop: '10px', display: "flex", justifyContent: "center"}}>
                <img
                    style={{borderRadius: '15px'}}
                    alt="..."
                    src={lecture.thumbURL}
                ></img>
            </Col>
            <Col lg='3' style={{marginTop: '10px'}}>

                <div
                    style={{
                        border:          '1px solid lightgray', borderRadius: '2px', height: 'auto', padding: '20px',
                        backgroundColor: '#Fafafa'
                    }}>
                    <Button
                        onClick={() => {
                            console.log(lecture)
                            console.log(member)
                            if (checkSeller)
                                navigate(`/lecture/write/main?lectureNo=${lecture.lectureNo}`)
                            else if (checkBuy) {
                                navigate('/lecture/detail?lectureNo=' + lecture?.lectureNo)
                            } else if (member.uid !== undefined) {
                                const cart = async () => {
                                    let cart = 0;
                                    await apiClient.get(`/api/lecture/cart/count`, {
                                        params: {
                                            uid:       member.uid,
                                            lectureNo: lecture.lectureNo,
                                        }
                                    }).then(res => cart = res.data)
                                    if (cart > 0) {
                                        if (window.confirm('중복된 상품이 있습니다. 장바구니에 담으시겠습니까?')) {
                                            cartSave()
                                        }
                                    } else if (window.confirm('장바구니에 담으시겠습니까?')) {
                                        cartSave()
                                    }
                                }
                                const cartSave = async () => {
                                    await apiClient.post(`/api/lecture/cart`,
                                        {
                                            uid:       member.uid,
                                            lectureNo: lecture.lectureNo,
                                            count:     1,
                                            price:     lecture.price,
                                            discount:  lecture.discount,
                                            total:     lecture.price - lecture.price * lecture.discount / 100,
                                        }).then(res => {
                                        alert('장바구니에 담았습니다.')
                                    }).catch(err => {
                                        alert('오류가 발생했습니다. 다시 시도해주세요')
                                    })
                                }
                                cart()
                            } else {
                                alert('로그인 후 시도해주세요')
                                if (window.confirm('로그인 하시겠습니까?'))
                                    navigate('/member/login')
                            }
                        }}

                        style={{
                            borderRadius: '5px', height: '60px', width: '100%', backgroundColor: '#FF5554',
                            paddingTop:   '20px', display: "flex", justifyContent: "center", cursor: "pointer",
                            marginBottom: '20px'
                        }}>

                            <span
                                style={{
                                    textAlign:  "center", color: "white", display: "inline-block", fontSize: '17px',
                                    fontWeight: 'bold', fontFamily: '한컴 말랑말랑'
                                }}>{checkSeller ? '수정하기' : checkBuy ? '강의듣기' : '수강하기'}</span>
                    </Button>

                    {!checkBuy ? <>
                        {lecture.discount !== 0 &&
                            <div style={{display: "flex", justifyContent: "center"}}>
                            <span style={{
                                textAlign:  "center", fontSize: '12px', textDecoration: 'line-through', color: "gray",
                                fontFamily: 'NanumSquare'
                            }}>{(lecture.price?.toLocaleString()) + ' ￦'}</span>
                            </div>}
                        <div style={{display: "flex", justifyContent: "center"}}>
                        <span style={{
                            textAlign: "center", fontSize: '12px', fontFamily: 'NanumSquare'
                        }}>{lecture.discount !== 0 && lecture ?
                            Number((lecture?.price - lecture?.discount * lecture?.price / 100).toFixed(0)).toLocaleString() :
                            lecture?.price.toLocaleString()} ￦</span>
                        </div>

                        {/*                        <div
                            style={{
                                paddingBottom:  '10px', paddingTop: '20px', marginTop: '10px',
                                borderBottom:   '1px solid lightgray', borderTop: '1px solid lightgray', display: "flex",
                                justifyContent: "space-between"
                            }}>

                            <span style={{fontFamily: '', fontSize: '12px'}}>145 Days</span>
                            <i className="bi bi-calendar"></i>
                        </div>*/}
                    </> : <>

                        <div className="progress-container progress-danger"
                             style={{display: "flex", justifyContent: "center"}}>

                            <Progress max="100" value={(lectureIHeardList?.length / contentCount * 100)}
                                      style={{height: '10px', borderRadius: '2px', width: '85%'}}>

                            </Progress>


                            <span style={{fontSize: '10px', width: '10%', marginTop: '12px', marginLeft: '5%'}}
                                  className="progress-value">{(lectureIHeardList?.length / contentCount * 100).toFixed(2)}%</span>


                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <span
                                style={{textAlign: "center", fontSize: '12px', fontFamily: 'NanumSquare'}}>{lectureIHeardList?.length / contentCount === 1 ?
                                '수강완료' : '수강중'}</span>
                        </div>

                        {/*<div
                            style={{
                                paddingBottom:  '10px', paddingTop: '20px', marginTop: '10px',
                                borderBottom:   '1px solid lightgray', borderTop: '1px solid lightgray', display: "flex",
                                justifyContent: "space-between"
                            }}>

                            <span style={{fontFamily: '', fontSize: '12px'}}>145 Days</span>
                            <i className="bi bi-calendar"></i>
                        </div>*/}
                    </>}
                </div>
                <div
                    style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                    {lecture?.sold !== 0 ? <span style={{borderBottom: '1px solid lightgray'}}>
                        {lecture.sold}명의 수강생
                    </span> : <span style={{borderBottom: '1px solid lightgray'}}>수강생이 없습니다</span>}
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                    <Button style={{fontFamily: 'nanumsquare'}}>
                        영상 버퍼링 이슈가 있다면?
                    </Button>
                </div>
            </Col>
        </Row></>
}

export default LectureViewHeader