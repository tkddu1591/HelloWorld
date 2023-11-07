import React from "react";
import {Button, Col, Container, Progress, Row} from "reactstrap";
import LectrueViewHeader from "./LectrueViewHeader";

function LectureView() {
    return <>
        <div style={{marginTop: '100px'}}></div>
        <Container>
            <LectrueViewHeader></LectrueViewHeader>
            <Row>
                <Col lg="9">
                    <div
                        style={{width: '100%', padding: '20px', paddingLeft: '40px', marginTop: '10px', border: '1px solid lightgray', borderRadius: '5px', backgroundColor: '#Fafafa'}}>
                        <span style={{color:'red'}}>Home</span>
                    </div>
                    <div>
                        ddd
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default LectureView