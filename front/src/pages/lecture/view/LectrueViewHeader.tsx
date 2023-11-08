import {Button, Col, Progress, Row} from "reactstrap";
import React from "react";
import '../scss/lecture.scss'
import Star from "../../../components/Lecture/Star";
import {useNavigate} from "react-router-dom";

function LectrueViewHeader(){
    let navigate = useNavigate();
    return<>
        <h3 style={{marginBottom: '15px'}}>(무료) 매우쉽게 알려주는 git & github</h3>
        <div className='ddd'>
            <Star size={20} score={5}></Star>
            <span style={{marginLeft: '5px'}}>( 1,200 리뷰 )</span>
            <span style={{marginLeft: '20px'}}>
                    <i className="bi bi-people-fill" style={{fontSize: '15px', marginRight: '3px'}}></i>
                    1,222명 수강</span>
        </div>
        <Row>
            <Col lg='9' style={{marginTop: '10px'}}>
                <img
                    style={{borderRadius: '15px'}}
                    alt="..."
                    src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                ></img>
            </Col>
            <Col lg='3' style={{marginTop: '10px'}}>
                <div
                    style={{border: '1px solid lightgray', borderRadius: '2px', height: '240px', padding: '20px', backgroundColor: '#Fafafa'}}>
                    <Button
                        onClick={()=>{navigate('/lecture/detail/lectureNo')}}
                        style={{borderRadius: '5px', height: '60px', width:'100%',backgroundColor: '#FF5554', paddingTop: '20px', display: "flex", justifyContent: "center", cursor: "pointer", marginBottom: '20px'}}>
                            <span
                                style={{textAlign: "center", color: "white", display: "inline-block", fontSize: '17px', fontWeight: 'bold', fontFamily: '한컴 말랑말랑'} }>수강 계속하기</span>
                    </Button>

                    <div className="progress-container progress-danger"
                         style={{display: "flex", justifyContent: "center"}}>

                        <Progress max="100" value="60" style={{height: '10px', borderRadius: '2px', width: '85%'}}>

                        </Progress>


                        <span style={{fontSize: '10px', width: '10%', marginTop: '12px', marginLeft: '5%'}}
                              className="progress-value">60%</span>


                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <span style={{textAlign: "center", fontSize: '12px', fontFamily: 'NanumSquare'}}>수강중</span>
                    </div>

                    <div
                        style={{paddingBottom: '10px', paddingTop: '20px', marginTop: '10px', borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray', display: "flex", justifyContent: "space-between"}}>

                        <span style={{fontFamily: '', fontSize: '12px'}}>145 Days</span>
                        <i className="bi bi-calendar"></i>
                    </div>
                </div>
                <div
                    style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                        <span style={{borderBottom: '1px solid lightgray'}}>
                        22745명의 수강생
                            </span>
                </div>
                <div style={{display: "flex", justifyContent: "center", marginTop: '20px'}}>
                    <Button style={{fontFamily:'nanumsquare'}}>
                        영상 버퍼링 이슈가 있다면?
                    </Button>
                </div>
            </Col>
        </Row></>
}
export default LectrueViewHeader