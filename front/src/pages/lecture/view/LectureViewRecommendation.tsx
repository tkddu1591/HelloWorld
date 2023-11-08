import {Col} from "reactstrap";
import React from "react";
import CardList from "../CardList";
import Subhead from "../../../Subhead";

function LectureViewRecommendation() {
    return <>
        <Col lg='9'>
        <Subhead title={'관련 강좌'}></Subhead>
        <CardList colSize={9}></CardList>
        </Col>
    </>
}

export default LectureViewRecommendation