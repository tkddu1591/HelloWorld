import React from "react";
import {Button, Col, Container, Row, Table} from "reactstrap";
import LectrueViewHeader from "./LectrueViewHeader";
import '../scss/content.scss'
import LectureViewContent from "./LectureViewContent";
import LectureViewCurriculum from "./LectureViewCurriculum";

function LectureView() {
    return <>
        <div style={{marginTop: '100px'}}></div>
        <Container>
            <LectrueViewHeader></LectrueViewHeader>
            <Row>
                <LectureViewContent></LectureViewContent>
                <LectureViewCurriculum></LectureViewCurriculum>
            </Row>
        </Container>
    </>
}

export default LectureView