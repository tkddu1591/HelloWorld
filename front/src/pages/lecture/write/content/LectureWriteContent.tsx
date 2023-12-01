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
import {API_BASE_URL, apiClient} from "../../../../App";
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                // 동시에 여러 apiClient.get 요청을 보내기 위해 Promise.all 사용
                const [partResponse, contentListResponse] = await Promise.all([
                    apiClient.get(`/lecture/part/list?lectureNo=${lectureNo}`),
                    apiClient.get(`/lecture/content/list?lectureNo=${lectureNo}`)
                ]);

                // part 데이터를 받아와서 setPart를 통해 상태 업데이트
                const formattedPartData = partResponse.data.map(item => ({
                    orderNo:   item.partNo,
                    title:     item.title,
                    lectureNo: item.lectureNo
                }));
                setPart(formattedPartData);

                // contentList를 구성할 때 orderNo를 partNo로, contents를 partNo가 같은 것끼리 그룹화하여 배열로 구성
                const formattedContentList = contentListResponse.data.reduce((acc, item) => {
                    const existingGroup = acc.find(group => group.orderNo === item.partNo);

                    if (existingGroup) {
                        // 이미 존재하는 그룹에 추가
                        existingGroup.contents.push({
                            contentNo: item.contentNo,
                            title: item.title,
                            lectureNo: item.lectureNo,
                            partNo: item.partNo,
                        });
                    } else {
                        // 새로운 그룹 추가
                        acc.push({
                            orderNo: item.partNo,
                            contents: [{
                                contentNo: item.contentNo,
                                title: item.title,
                                lectureNo: item.lectureNo,
                                partNo: item.partNo,
                            }],
                        });
                    }

                    return acc;
                }, []);

                // formattedContentList를 setContentList를 통해 상태 업데이트
                setContentList(formattedContentList);
            } catch (error) {
                console.error(error);
            }
        };
// fetchData 함수 호출
        fetchData();
    }, []);

    function partSave() {
        const transformedPart = part.map(({orderNo, title, lectureNo}) => ({
            partNo: orderNo,
            title,
            lectureNo,
        }));
        console.log(transformedPart);
        return apiClient.post('/lecture/part', transformedPart);
    }


    function contentListSave() {
        const promises = contentList.map(item => {
            if (item.contents.length !== 0) {
                return apiClient.post('/lecture/content/list', item.contents)
                    .then(res => {
                        console.log('업데이트 완료');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            } else {
                return apiClient.delete('/lecture/content/list?partNo=' + item.orderNo)
                    .then(res => {
                        console.log('삭제완료');
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        });
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
        if (post?.contentNo) {
            apiClient.get('/lecture/content/?contentNo=' + post?.contentNo + "&title=" + post?.title).then(res => {
                setState({value: res.data.content});
            }).catch(error => {
                console.error(error);
            })
        }
    }, [post?.contentNo]);
    const postUpdate = () => {
        if (post?.content !== null && post && post.content !== undefined) {
            apiClient.post(`/lecture/content`, post)
                .then(res => {
                    console.log('내용 저장');
                    alert('저장 완료');
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };
    useEffect(() => {
        changeDTO(setPost, 'content', state.value)
    }, [state]);
    useEffect(() => {
        console.log(contentList)
    }, [part]);
    return <>
        <LectureWriteAside setPost={setPost} lectureNo={lectureNo} setContentList={setContentList}
                           contentListSave={contentListSave} contentList={contentList} partSave={partSave} part={part}
                           setPart={setPart} post={post}></LectureWriteAside>

        <div style={{width: '100%', height: '100%', zIndex: 0, position: 'relative'}} className={'detailContent'}>


            <div style={{
                position: 'absolute', padding: '80px', paddingTop: 0, width: '100%', height: '100%', marginTop: '100px'
            }}>
                {!post?.contentNo ?
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

                    {post?.contentNo &&
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
                                        .then(() => postUpdate())
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