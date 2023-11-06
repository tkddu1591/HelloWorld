import {Col, Container, Row} from "reactstrap";
import React from "react";

function LectureIndexList(){
    return<>
        <div className="section ">
            <Container>

                <div id="cards">
                    <div style={{display: "flex", justifyContent: 'space-between'}}>
                        <h3 style={{textAlign: "left", marginBottom: '10px'}}>추천 강의</h3>
                        <span style={{textAlign: "right", marginTop: 20, cursor: 'pointer', color:'gray'}} >더보기<i
                            className="now-ui-icons ui-1_simple-add"
                            style={{boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: 'lightgray', padding: '3px', marginLeft: '2px', fontSize: '11px', fontWeight: 'bolder'}}></i></span>
                    </div>
                    <Row style={{padding: '10px'}}>
                        <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                    <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                    <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                    <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                    <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                    <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                    <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                    <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                    <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </Container>
        </div> <div className="section ">
        <Container>

            <div id="cards">
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <h3 style={{textAlign: "left", marginBottom: '10px'}}>추천 강의</h3>
                    <span style={{textAlign: "right", marginTop: 20, cursor: 'pointer', color:'gray'}} >더보기<i
                        className="now-ui-icons ui-1_simple-add"
                        style={{boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: 'lightgray', padding: '3px', marginLeft: '2px', fontSize: '11px', fontWeight: 'bolder'}}></i></span>
                </div>
                <Row style={{padding: '10px'}}>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    </div> <div className="section ">
        <Container>

            <div id="cards">
                <div style={{display: "flex", justifyContent: 'space-between'}}>
                    <h3 style={{textAlign: "left", marginBottom: '10px'}}>추천 강의</h3>
                    <span style={{textAlign: "right", marginTop: 20, cursor: 'pointer', color:'gray'}} >더보기<i
                        className="now-ui-icons ui-1_simple-add"
                        style={{boxShadow: '0 4px 6px rgba(0,0,0,0.1)', backgroundColor: 'lightgray', padding: '3px', marginLeft: '2px', fontSize: '11px', fontWeight: 'bolder'}}></i></span>
                </div>
                <Row style={{padding: '10px'}}>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm="3" style={{padding: '10px', cursor:"pointer"}}>
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
                                <p className="category" style={{textDecoration:"line-through", marginBottom:0}}>￦35,000</p>
                                <p className="category" style={{color:'black'}}><span style={{color:'red', marginRight:'10px'}}>50%</span>￦35,000</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Container>
    </div></>
}
// @ts-ignore
export default LectureIndexList