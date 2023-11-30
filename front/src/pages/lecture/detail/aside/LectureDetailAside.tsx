import React, {useEffect, useState} from 'react';
import LectureDetailAsideHeader from './LectureDetailAsideHeader';
import LectureDetailAsideTable from './LectureDetailAsideTable';
import LectureDetailAsideFooter from './LectureDetailAsideFooter';
import {useSelector} from "react-redux";

function LectureDetailAside() {
    let [aside, setAside] = useState(false);
    const partList = useSelector((state: any) => state.lecturePartList);
    const contentList = useSelector((state: any) => state.lectureContentList);
    return (<div
            className={'aside'}
            style={{
                zIndex:             '2',
                backgroundColor:    '#fafafa',
                height:             '100vh',
                width:              '350px',
                position:           'fixed',
                translate:          aside ? '0' : '-350px',
                transitionDuration: '0.5s',
            }}>
            <LectureDetailAsideHeader
                aside={aside} setAside={setAside}></LectureDetailAsideHeader>


            <div style={{height: 'calc(100vh - 280px)', width: '100%', overflowY: 'scroll'}}>
                {partList.map((part, index) => {
                    return <LectureDetailAsideTable setAside={setAside} key={part.partNo} index={index} part={part}></LectureDetailAsideTable>
                })}
            </div>
            <LectureDetailAsideFooter></LectureDetailAsideFooter>
        </div>
    );
}

export default LectureDetailAside;
