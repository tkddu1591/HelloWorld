import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import React from "react";

function LectureList() {
    return <>
        <Container style={{marginTop: '100px'}}>
            <div id="inputs">
                <Row>
                    <Col lg="12">
                        <FormGroup style={{border: '1px solid #ccc', borderRadius: '5px', width: '10'}}>
                            <Input
                                style={{border:'none', maxWidth:'95%', display:'inline-block'}}
                                defaultValue=""
                                placeholder="수강하고 싶은 코스 검색"
                                type="text"
                            ></Input>
                            <div className="now-ui-icons ui-1_zoom-bold" style={{width:'5%', height:'22px', marginTop:'10px', cursor:"pointer"}}></div>
                        </FormGroup>
                    </Col>
                </Row>

                <Row>
                    <Col lg="6" sm="6">
                        <FormGroup style={{border: '1px solid #ccc', borderRadius: '5px', width: '10'}}>
                            <Input
                                style={{border:'none', maxWidth:'95%', display:'inline-block'}}
                                defaultValue=""
                                placeholder="수업 난이도"
                                type="text"
                            ></Input>
                            <div className="now-ui-icons arrows-1_minimal-down" style={{width:'5%', height:'22px', marginTop:'10px', cursor:"pointer"}}></div>
                        </FormGroup>
                    </Col>
                </Row>
            </div>


            <div id="cards" style={{marginTop:'10px'}}>
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <h3 style={{textAlign: "left", marginBottom: '10px'}}>추천 강의</h3>
                </div>
                <Row style={{padding: '10px'}}>
                    <Col sm="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor: "pointer"}}>
                        <div
                            style={{borderRadius: '5%', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', padding: '0'}}>
                            <img
                                style={{width: '100%'}}
                                alt="..."
                                src={`${process.env.PUBLIC_URL}/images/lecture/thumb_Java.jpg`}
                            ></img>


                            <div style={{
                                textAlign: 'left',
                                padding: '10px'
                            }}>
                                <p className="category"
                                   style={{textDecoration: "line-through", marginBottom: 0}}>￦35,000</p>
                                <p className="category" style={{color: 'black'}}><span
                                    style={{color: 'red', marginRight: '10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    </>
}

export default LectureList