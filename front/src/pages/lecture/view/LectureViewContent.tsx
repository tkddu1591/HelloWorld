import {Col} from "reactstrap";
import React from "react";
import Banner from "../../../components/Lecture/Banner";

function LectureViewContent({lecture}){
    return <Col lg="9">
        <div
            style={{
                width:        '100%', padding: '20px', paddingLeft: '30px', marginTop: '10px',
                border:       '1px solid lightgray', borderRadius: '5px', backgroundColor: '#Fafafa'
            }}>
            <span style={{color: 'red', fontSize: '16px'}}>Home</span>
        </div>
        <div style={{marginTop: '20px', fontFamily: 'NanumSquare, sans-serif', fontSize: '14px'}}
             className='detailContent'>
            <div dangerouslySetInnerHTML={{__html: lecture.content}}/>
        </div>
    </Col>
}

export default LectureViewContent