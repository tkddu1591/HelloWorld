import React, {useEffect, useState} from "react";
import LectureDetailAsideHeader from "./LectureDetailAsideHeader";
import LectureDetailAsideTable from "./LectureDetailAsideTable";
import LectureDetailAsideFooter from "./LectureDetailAsideFooter";

function LectureDetailAside() {
    let [aside, setAside] = useState(false);
    return <>
        <div
            className={'aside'}
            style={{
                backgroundColor: '#fafafa', height: '100vh',
                width: '350px', position: 'fixed', translate: (aside ? '0' : '-350px'),
                transitionDuration: '0.5s'
            }}>
            <LectureDetailAsideHeader aside={aside} setAside={setAside}></LectureDetailAsideHeader>

            <div style={{height: 'calc(100% - 280px)', width: '100%', overflowY: 'scroll'}}>
                <LectureDetailAsideTable></LectureDetailAsideTable>
                <LectureDetailAsideTable></LectureDetailAsideTable>
                <LectureDetailAsideTable></LectureDetailAsideTable>
            </div>
            <LectureDetailAsideFooter></LectureDetailAsideFooter>

        </div>
    </>
}

export default LectureDetailAside;