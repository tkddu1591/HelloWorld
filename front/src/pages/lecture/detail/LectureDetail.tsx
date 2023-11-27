import React, {useEffect, useState} from "react";
import '../scss/lecture/detail/aside.scss'
import LectureDetailAside from "./aside/LectureDetailAside";
import LectureDetailPlayer from "./LectureDetailPlayer";
import '../scss/lecture/detail/detailContent.scss'
import {useLocation} from "react-router-dom";
import axios from "axios";
import {API_BASE_URL} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {changeContentList, changePartList, partListSlice} from "../../../slice/LectureContent";
import {Button} from "reactstrap";

function LectureDetail() {

    let [timeCheck, setTimeCheck] = useState([{
        time:  240,
        title: " 설치 (맥/윈도우)"
    }, {
        time:  300,
        title: "git 설치 (맥/윈도우)"
    }]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    const contentNo = searchParams.get('contentNo');
    const partList = useSelector((state: any) => state.lecturePartList);
    const contentList = useSelector((state: any) => state.lectureContentList);
    const dispatch = useDispatch();
    useEffect(() => {
        if (partList[0]?.lectureNo !== lectureNo) {
            axios.get(`${API_BASE_URL}/lecture/part/list?lectureNo=${lectureNo}`).then(response =>
                dispatch(changePartList(response.data))).catch(err => {
                console.log(err)
            })
        }
    }, []);
    useEffect(() => {
        if (contentList[0]?.lectureNo !== lectureNo)
            axios.get(`${API_BASE_URL}/lecture/content/list?lectureNo=${lectureNo}`).then(
                response => dispatch(changeContentList(response.data))).catch(err => {
                console.log(err)
            })
    }, [partList]);
    console.log(contentList)
    return (
        <>
            <LectureDetailAside></LectureDetailAside>
            <div style={{width: '100%', height: '100%', zIndex: 0, position: 'relative'}} className={'detailContent'}>
                <div
                    style={{position: 'absolute', padding: '30px', paddingTop: '80px', width: '100%', height: '100%', marginBottom: '100px'}}>
                    {contentNo === null ? <>
                            <p style={{fontSize: '20px', fontWeight: '700'}}>{contentList[0]?.title}</p>
                            {/*<LectureDetailPlayer timeCheck={timeCheck}></LectureDetailPlayer>*/}
                            <div style={{marginTop: '40px'}}>
                                <div dangerouslySetInnerHTML={{__html: contentList[0]?.content}}/>
                            </div>
                        </>
                        : <>
                            {Array.isArray(contentList) && contentList.map((content, index) => {
                                if (Number(content.contentNo) === Number(contentNo)) {
                                    return <>
                                        <p style={{fontSize: '20px', fontWeight: '700'}}>{content.title}</p>
                                        {/*<LectureDetailPlayer timeCheck={timeCheck}></LectureDetailPlayer>*/}
                                        <div style={{marginTop: '40px'}}>
                                            <div dangerouslySetInnerHTML={{__html: content?.content}}/>
                                        </div>
                                    </>
                                }
                            })}
                        </>}
                    <div
                        style={{width: '100%', display: "flex", justifyContent: "space-between"}}>{contentNo === null || (Number(contentNo) % 100 === 1) ?
                        <span style={{color: 'white', userSelect: "none"}}>d</span> : <Button>이전 강의</Button>}<Button>다음
                        강의</Button></div>
                </div>


            </div>
        </>
    );
}

function LectureDetailMain() {

}


export default LectureDetail