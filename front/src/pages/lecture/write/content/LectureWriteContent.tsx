import React, {useEffect, useState} from "react";
import LectureDetailAside from "../../detail/aside/LectureDetailAside";
import LectureDetailPlayer from "../../detail/LectureDetailPlayer";
import Subhead from "../../../../Subhead";
import LectureWriteAside from "./aside/LectureWriteAside";
import '../../scss/lecture/write/write.scss'
import EditorToolbar, {formats, modules} from "../../../community/EditorToolBar";
import ReactQuill from "react-quill";
import {Button, Container, Row} from "reactstrap";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {API_BASE_URL} from "../../../../App";
import {changeDTO} from "../../../../store/changeDTO";

function LectureWriteContent() {


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');

    let [part, setPart] = useState<{ orderNo: number, title: string, lectureNo: number }[]>([])
    let [contentList, setContentList] = useState<{
        orderNo: number,
        contents: { contentNo: number, title: string, lectureNo: number, partNo: number }[]
    }[]>([])

    function partSave() {
        const transformedPart = part.map(({orderNo, title, lectureNo}) => ({
            partNo: orderNo,
            title,
            lectureNo,
        }));
        return axios.post('/lecture/write/content/part', transformedPart);
    }

    function contentListSave() {
        const promises = contentList.map(item => {
                if (item.contents.length !== 0) {
                    axios.post('/lecture/write/content/list', item.contents)
                        .then(res => console.log('업데이트 완료'))
                        .catch(error => console.error(error));
                } else
                    axios.delete('/lecture/write/content/list?partNo=' + item.orderNo)
                        .then(res => console.log('삭제완료'))
                        .catch(error => console.error(error));
            }
        );

        return Promise.all(promises);
    }

    let [timeCheck, setTimeCheck] = useState([{
        time:  240,
        title: " 설치 (맥/윈도우)"
    }, {
        time:  300,
        title: "git 설치 (맥/윈도우)"
    }]);

    const [state, setState] = React.useState({value: null});
    const handleChange = value => {
        setState({value});
    };

    let navigate = useNavigate()

    const [post, setPost] = useState<{
        partTitle: string,
        contentNo: number
        title: string
        content?: string
        lectureNo: number
        partNo: number
    }>();
    useEffect(() => {
        setState({value: null});
    }, [post?.contentNo]);
    useEffect(() => {
        console.log(post?.content)
        if (post?.content !== null && post && post.content!==undefined) {
            axios.post(`${API_BASE_URL}/lecture/write/content/one`, post).then(
                res => {
                    alert('저장되었습니다.')
                }).catch(err => {
                console.log(err)
            })
        }
    }, [post?.content]);
    return <>
        <LectureWriteAside setPost={setPost} lectureNo={lectureNo} setContentList={setContentList}
                           contentListSave={contentListSave} contentList={contentList} partSave={partSave} part={part}
                           setPart={setPart}></LectureWriteAside>

        <div style={{width: '100%', height: '100%', zIndex: 0, position: 'relative'}} className={'detailContent'}>


            <div style={{
                position: 'absolute', padding: '80px', paddingTop: 0, width: '100%', height: '100%', marginTop: '100px'
            }}>
                {!post ?
                    <>
                        <h3>강의 등록</h3>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p>② 컨텐츠</p>
                            <span>작성할 컨텐츠를 선택해주세요</span>
                        </div>
                    </>
                    : <>
                        <h3>강의 등록</h3>
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <p>② 컨텐츠</p>

                            <span>{(post.partTitle ? post.partTitle : '파트 타이틀을 작성해주세요')} &gt; {post.title ? post.title :
                                '컨텐츠 타이틀을 작성해주세요'}</span>
                        </div>
                    </>
                }


                <div className="text-editor" style={{marginTop: '30px'}}>
                    <EditorToolbar/>
                    <ReactQuill
                        style={{maxHeight: "auto", height: 'auto'}}
                        theme="snow"
                        value={state.value === null ? "" : state.value}
                        onChange={handleChange}
                        placeholder={"내용을 입력해주세요."}
                        modules={modules}
                        formats={formats}
                    /></div>


                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Button color={'info'} onClick={() => {
                        navigate('/lecture/view?lectureNo=' + lectureNo)
                    }}>나가기</Button>

                    {post &&
                        <Button color={'info'} onClick={async () => {
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
                                            changeDTO(setPost, 'content', state.value);
                                        })
                                        .catch(error => {
                                            console.error(error);
                                        });
                                }
                            } else {
                                alert('모든 파트명과 컨텐츠명을 입력해주세요')
                            }
                        }}>저장</Button>}
                </div>

            </div>
        </div>

    </>

}


export default LectureWriteContent