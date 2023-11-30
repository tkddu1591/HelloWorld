import React, {useEffect, useState} from "react";
import '../scss/lecture/detail/aside.scss'
import LectureDetailAside from "./aside/LectureDetailAside";
import LectureDetailPlayer from "./LectureDetailPlayer";
import '../scss/lecture/detail/detailContent.scss'
import {useLocation, useNavigate} from "react-router-dom";
import {API_BASE_URL, apiClient} from "../../../App";
import {useDispatch, useSelector} from "react-redux";
import {
    changeContentCount,
    changeContentList,
    changeLectureIHeardList,
    changePartList,
} from "../../../slice/LectureContent";
import {Button} from "reactstrap";
import {CartItem, CartTotal} from "../../../type/cart";

//스크롤 맨 아래 확인

function useScrollToBottom() {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight =
                      document.documentElement.scrollHeight - document.documentElement.clientHeight;

            const reachedBottom = scrollTop >= scrollHeight;

            setIsBottom(reachedBottom);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return isBottom;
}


function LectureDetail() {

    let [timeCheck, setTimeCheck] = useState([{
        time:  240,
        title: " 설치 (맥/윈도우)"
    }, {
        time:  300,
        title: "git 설치 (맥/윈도우)"
    }]);

    const scrolledToBottom = useScrollToBottom();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const lectureNo = searchParams.get('lectureNo');
    const contentNo = searchParams.get('contentNo');
    const partList = useSelector((state: any) => state.lecturePartList);
    const contentList = useSelector((state: any) => state.lectureContentList);
    const dispatch = useDispatch();
    const [member, setMember] = useState<any>({})
    useEffect(() => {
        const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")
        if (accessToken !== null)
            apiClient.get(`/me`, {
                headers: {"Authorization": `Bearer ${accessToken}`}
            })
                .then((res) => {
                    setMember(res.data);

                })
                .catch((err) => {
                    console.log("실패? : " + JSON.stringify(err));
                });
    }, []);
    useEffect(() => {
        if (lectureNo !== undefined)
            apiClient.get(`/lecture/content/countByLecture`, {params: {lectureNo: lectureNo}}).then((res) => {
                dispatch(changeContentCount(res.data))
            }).catch(err => console.log(err));
    }, []);
    useEffect(() => {
        if (partList[0]?.lectureNo !== lectureNo) {
            apiClient.get(`/lecture/part/list?lectureNo=${lectureNo}`).then(response =>
                dispatch(changePartList(response.data))).catch(err => {
                console.log(err)
            })
        }
        const accessToken = localStorage.getItem("helloWorld_ACCESS_TOKEN")
        if (accessToken !== null)
            apiClient.get(`/me`, {
                headers: {"Authorization": `Bearer ${accessToken}`}
            })
                .then((res) => {
                    setMember(res.data);

                })
                .catch((err) => {
                    console.log("실패? : " + JSON.stringify(err));
                });
    }, []);
    useEffect(() => {
        if (contentList[0]?.lectureNo !== lectureNo)
            apiClient.get(`/lecture/content/list?lectureNo=${lectureNo}`).then(
                response => dispatch(changeContentList(response.data))).catch(err => {
                console.log(err)
            })
    }, [partList]);
    let nowNum = 0;
    useEffect(() => {
        const postData = async (contentNo) => {
            await apiClient.post(`/api/member/lecture/content`, {uid: member.uid, contentNo: contentNo}).catch(err => {
            }).then(res => {
            })
        }

        if (member.uid !== undefined && contentList !== null) {
            if (contentNo === null) {
                postData(contentList[0].contentNo).then(() =>
                    apiClient.get(`/api/member/lecture/content/list`, {params: {lectureNo: searchParams.get('lectureNo'), uid: member.uid}}).then(response => {
                        dispatch(changeLectureIHeardList(response.data));
                    }))
            } else {
                postData(searchParams.get('contentNo')).then(() =>
                    apiClient.get(`/api/member/lecture/content/list`, {params: {lectureNo: searchParams.get('lectureNo'), uid: member.uid}}).then(response => {
                        dispatch(changeLectureIHeardList(response.data));
                    }))
            }
        }

    }, [contentList, location.search]);

    return (
        <>
            <LectureDetailAside></LectureDetailAside>
            <div style={{width: '100%', height: '100%', zIndex: 0, position: 'relative'}} className={'detailContent'}>
                <div
                    style={{
                        position:     'absolute', padding: '30px', paddingTop: '80px', width: '100%', height: '100vh',
                        marginBottom: '100px', display: 'flex', flexDirection: 'column'
                    }}>
                    {contentNo === null ? <div style={{flex: 1}}>
                            <p style={{fontSize: '20px', fontWeight: '700'}}>{contentList[0]?.title}</p>
                            {/*<LectureDetailPlayer timeCheck={timeCheck}></LectureDetailPlayer>*/}
                            <div style={{marginTop: '40px'}}>
                                <div dangerouslySetInnerHTML={{__html: contentList[0]?.content}}/>
                            </div>
                        </div>
                        : <div style={{flex: 1}}>
                            {Array.isArray(contentList) && contentList.map((content, index) => {
                                if (Number(content.contentNo) === Number(contentNo)) {
                                    nowNum = index
                                    return <>
                                        <p style={{fontSize: '20px', fontWeight: '700'}}>{content.title}</p>
                                        {/*<LectureDetailPlayer timeCheck={timeCheck}></LectureDetailPlayer>*/}
                                        <div style={{marginTop: '40px'}}>
                                            <div dangerouslySetInnerHTML={{__html: content?.content}}/>
                                        </div>
                                    </>
                                }
                            })}
                        </div>}
                    <div
                        style={{
                            width: '100%', display: "flex", justifyContent: "space-between"
                        }}>{contentNo === null || (Number(contentNo) % 10000 === 101) ?
                        <span style={{color: 'white', userSelect: "none"}}>d</span> : <Button onClick={() => {
                            navigate(`/lecture/detail?lectureNo=${lectureNo}&contentNo=${contentList[nowNum - 1].contentNo}`)
                        }}>이전 강의</Button>}
                        {contentList.length - 1 !== nowNum && <Button
                            onClick={() => {
                                navigate(`/lecture/detail?lectureNo=${lectureNo}&contentNo=${contentList[nowNum + 1].contentNo}`)
                            }}>다음
                            강의</Button>}</div>
                </div>


            </div>
        </>
    );
}

function LectureDetailMain() {

}


export default LectureDetail