import React from "react";
import {Col, Container, Progress, Row} from "reactstrap";

function LectureView() {
    return <>
        <div style={{marginTop: '100px'}}></div>
        <Container>
            <h3 style={{marginBottom: '15px'}}>(무료) 매우쉽게 알려주는 git & github</h3>
            <div>
                <i className={"bi bi-star-fill"} style={{color: "orange", fontSize: '20px'}}></i>
                <i className={"bi bi-star-fill"} style={{color: "orange", fontSize: '20px'}}></i>
                <i className={"bi bi-star-fill"} style={{color: "orange", fontSize: '20px'}}></i>
                <i className={"bi bi-star-fill"} style={{color: "orange", fontSize: '20px'}}></i>
                <i className={"bi bi-star-fill"} style={{color: "orange", fontSize: '20px'}}></i>
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
                        <div
                            style={{borderRadius: '5px', height: '60px', backgroundColor: '#FF5554', paddingTop: '20px', display: "flex", justifyContent: "center", cursor: "pointer", marginBottom: '20px'}}>
                            <span
                                style={{textAlign: "center", color: "white", display: "inline-block", fontSize: '17px', fontWeight: 'bold', fontFamily: '한컴 말랑말랑'}}>수강 계속하기</span>
                        </div>

                        <div className="progress-container progress-danger"
                             style={{display: "flex", justifyContent: "center"}}>

                            <Progress max="100" value="60" style={{height: '10px', borderRadius: '2px', width: '85%'}}>

                            </Progress>


                            <span style={{fontSize: '10px', width: '10%', marginTop: '12px', marginLeft: '5%'}}
                                  className="progress-value">60%</span>


                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <span style={{textAlign: "center",fontSize:'13px',fontFamily:'nanumsquare'}}>수강중</span>
                        </div>

                        <div
                            style={{paddingBottom: '10px', paddingTop: '20px', marginTop: '10px', borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray', display: "flex", justifyContent: "space-between"}}>

                            <span style={{fontFamily: '', fontSize: '12px'}}>145 Days</span>
                            <i className="bi bi-calendar"></i>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    </>
}

export default LectureView