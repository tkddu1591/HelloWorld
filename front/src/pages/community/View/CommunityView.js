import React, {useEffect, useState} from 'react';
import '../../../css/community/view.css';
import {Col, Container, Row} from 'reactstrap';
import {useLocation, useNavigate} from 'react-router-dom';
import ArticleTagList from "./Article/ArticleTagList";
import ArticleContent from "./Article/ArticleContent";
import ArticleTopBtns from "./Article/ArticleTopBtns";
import ArticleHeader from "./Article/ArticleHeader";
import ArticleBottomBtns from "./Article/ArticleBottomBtns";
import ReplyBox from "./ReplyBox";
import CommentWriter from "./Comment/CommentWriter";
import CommentList from "./Comment/CommentList";
import CommentOption from "./Comment/CommentOption";
import {API_BASE_URL} from "../../../App";
import axios from "axios";

function CommunityView() {
    let navigate = useNavigate();
    let [popup, setPopup] = useState('');

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const newCommunityNo = searchParams.get('no');
    const [communityNo, setCommunityNo] = useState(newCommunityNo);
    const newCateNo = searchParams.get('cate');
    const [cateNo, setCateNo] = useState(newCateNo);
    const [prevNo, setPrevNo] = useState(0);
    const [nextNo, setNextNo] = useState(0);
    const [buttonStatus, setButtonStatus] = useState(true);
    const [sort, setSort] = useState("Asc");
    let [commentType, setCommentType] = useState("Asc");
    let [view, setView] = useState({});
    let [commentsList, setCommentsList] = useState([]);
    let [commentReply, setCommentReply] = useState([]);
    const [commentWrite, setCommentWrite] = useState('');
    const [replyToComment, setReplyToComment] = useState(null);
    let [parentNo, setParentNo] = useState(0);
    let [tagsList, setTagsList] = useState([]);

    // CommentOption의 ref를 생성합니다.
    const commentRef = React.createRef();

    // CommentOption으로 스크롤 이동하는 함수를 만듭니다.
    const scrollToCommentOption = () => {
        console.log('success');
        if (commentRef.current) {
            console.log('click');
            commentRef.current.scrollIntoView({behavior: 'smooth'});
        }
    };

    // VIEW GET
    useEffect(() => {
        axios.get(`${API_BASE_URL}/community/view`, {
            params: {communityNo: communityNo, cateNo: cateNo}
        })
            .then(res => {
                setView(res.data.view);
                setCommentsList(res.data.commentsList.filter(comment => comment.parentNo === 0));
                setCommentReply(res.data.commentsList.filter(comment => comment.parentNo != 0));
                setTagsList(res.data.hasTagsList);
                setPrevNo(res.data.prevNo);
                setNextNo(res.data.nextNo);
            })
            .catch(err => {
                console.log(err);
            })
    }, [communityNo]);

    useEffect(() => {
        console.log(view);
    }, [view]);
    useEffect(() => {
        console.log(commentsList);
    }, [commentsList]);
    useEffect(() => {
        console.log(tagsList);
    }, [tagsList]);


    // COMMENT SORTING
    useEffect(() => {
        console.log(commentType);
        // commentsList 배열 복사
        const clonedList = [...commentsList];

        // commentType에 따라 정렬
        if (commentType === 'Asc') {
            // commentNo를 기준으로 오름차순 정렬
            clonedList.sort((a, b) => a.commentNo - b.commentNo);
        } else if (commentType === 'Desc') {
            // commentNo를 기준으로 내림차순 정렬
            clonedList.sort((a, b) => b.commentNo - a.commentNo);
        }

        setCommentsList(clonedList);
    }, [commentType]);
    useEffect(() => {
    }, [buttonStatus]);

    useEffect(() => {
        console.log(communityNo)
        console.log(view)
    }, [communityNo]);


    const insertComment = () =>{
        axios.post(`${API_BASE_URL}/community/insertComment`,{commentWrite, communityNo})
            .then(res => {
                console.log('success');
            })
    }
    return (
        <>
            <Container style={{userSelect: 'none'}} onClick={() => {
                if (popup === 'user') setPopup('')
            }}>
                <Row>
                    <Col col={12}>
                        <div className="view" style={{marginTop: '80px'}}>
                            <div className="Article layout_content">
                                <div className="article_wrap">
                                    <ArticleTopBtns setCateNo={setCateNo} setCommunityNo={setCommunityNo} view={view}
                                                    prevNo={prevNo} nextNo={nextNo}></ArticleTopBtns>
                                    <div className="ArticleContentBox" style={{marginBottom: '100px'}}>
                                        <ArticleHeader scrollToCommentOption={scrollToCommentOption} navigate={navigate}
                                                       view={view}></ArticleHeader>
                                        <div className="article_container">
                                            <ArticleContent view={view}></ArticleContent>
                                            <ArticleTagList tagsList={tagsList}></ArticleTagList>
                                            <ArticleBottomBtns commentRef={commentRef} view={view}></ArticleBottomBtns>
                                            <ReplyBox view={view}></ReplyBox>
                                            <div className={'CommentBox'}>
                                                <CommentOption scrollToCommentOption={scrollToCommentOption}
                                                               commentType={commentType}
                                                               communityNo={communityNo}
                                                               setCommentsList={setCommentsList}
                                                               buttonStatus={buttonStatus}
                                                               setButtonStatus={setButtonStatus}
                                                               setCommentType={setCommentType}>
                                                </CommentOption>
                                                <CommentList popup={popup}
                                                             setPopup={setPopup}
                                                             commentsList={commentsList}
                                                             commentReply={commentReply}
                                                             setParentNo={setParentNo}
                                                             insertComment={insertComment}
                                                             commentWrite={commentWrite}
                                                             setCommentWrite={setCommentWrite}
                                                             replyToComment={replyToComment}
                                                             setReplyToComment={setReplyToComment}>
                                                </CommentList>
                                                <CommentWriter commentWrite={commentWrite}
                                                               setCommentWrite={setCommentWrite}
                                                               insertComment={insertComment}
                                                               communityNo={communityNo}
                                                               setParentNo={setParentNo}
                                                               replyToComment={replyToComment}>
                                                </CommentWriter>
                                            </div>
                                            {/*<div className="RelatedArticles"></div>
											<div className="PopularArticles"></div>
											<div className={"article_writer"}></div>
											<div className={"ReplyBox"}></div>
											<div className={"CommentBox"}></div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default CommunityView;