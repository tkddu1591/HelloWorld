import {useNavigate} from "react-router-dom";
import {Button} from "reactstrap";
import React from "react";

function LectureWriteAsideFooter({partSave, part, contentListSave, contentList}) {
    const navigate = useNavigate()
    return <div
        style={{backgroundColor: '#eeeeee', height: '120px', bottom: '0', width: '100%', padding: '20px', position: 'absolute'}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button
                style={{margin: '0', marginBottom: '10px', width: '85%', backgroundColor: '#eeeeee', color: '#ff4949', fontFamily: 'nanumsquare', border: '1px solid #ff4949', fontWeight: 550}}
                onClick={() => {
                    navigate(-1)
                }}>이전</Button>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Button
                style={{margin: '0', marginBottom: '10px', width: '85%', backgroundColor: '#eeeeee', color: '#ff4949', fontFamily: 'nanumsquare', border: '1px solid #ff4949', fontWeight: 550}}
                onClick={() => {
                    let isPartCheck = true;
                    for (let newPart of part) {
                        if (newPart.title === '') {
                            isPartCheck = false;
                            break;
                        }
                    }
                    let isContentListCheck = true;
                    for (let newContentList of contentList) {
                        if (isContentListCheck)
                            for (let newContent of newContentList.contents) {
                                if (newContent.title === undefined) {
                                    isContentListCheck = false;
                                    break;
                                }
                            }
                    }
                    if (isPartCheck && isContentListCheck) {
                        if (window.confirm("세이브 하시겠습니까?")) {
                            partSave()
                                .then(() => contentListSave())
                                .then(() => {
                                    console.log('세이브 완료');
                                    alert('세이브 완료')
                                })
                                .catch(error => {
                                    console.error(error);
                                });
                        }
                    }else {
                        alert('모든 파트명과 컨텐츠명을 입력해주세요')
                    }
                }}>파트 및 콘텐츠 저장</Button>
        </div>
    </div>
}

export default LectureWriteAsideFooter;