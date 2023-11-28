import React, {useState} from 'react';
import '../../../../css/community/view.css';
import UserPopup from "../../../../components/Lecture/UserPopup";
import CommentWriter from "./CommentWriter";
import {changeDTO} from "../../../../store/changeDTO";


function CommentList({
                         popup,
                         setPopup,
                         commentsList,
                         commentReply,
                         setParentNo,
                         insertComment,
                         commentWrite,
                         setCommentWrite,
                         setReplyToComment,
                         replyToComment,
                         myInfo,
                         communityNo,
                         commentType,
                         setCommentsList,
                         setCommentReply,
                         commentRefresh,
                         setRefreshTrigger
                     }) {

    let [popupSetting, setPopupSetting] = useState({
        top: 20,
        right: -60,
        width: 150,
        condition: [
            {
                data: '신고',
                action: '/member/report',
                type: 'axios'
            },
            {
                data: '차단',
                action: '/member/block',
                type: 'axios'
            },
            {
                data: '대화',
                action: '/dm/chat/1',
                newWindow: true,
            },
            {
                data: '삭제',
                action: '/community/deleteComment',
                type: 'axios'
            },
        ],

    });

    return (<>
        <ul className={'comment_list'}>

            {commentsList.map(function (a, i) {
                const date = new Date(a.regDate);

                if (isNaN(date)) {
                    throw new Error('Invalid Date');
                }
                const options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false, // 오후/오전 표시 제거
                }

                // 형식화된 날짜 및 시간 문자열 생성
                const formattedDate = date.toLocaleDateString('ko-KR', options).replace(/\//g, '.').replace(',', '');

                if (a.isDeleted === 0)
                    return (<div onClick={() => {
                        if (popup !== '') setPopup('')
                    }}>
                        <li id={a.commentNo} className="CommentItem">
                            <div className="comment_area">
                                <a href={'#'} className={'comment_thumb'}>
                                    <img
                                        src={a.profileImg}
                                        alt={'프로필 사진'}
                                        style={{width: '36px', height: '36px'}}
                                    />
                                </a>
                                <div className={'comment_box'}>
                                    <div data-v-cb91c2e8="" className="comment_nick_box">
                                        <div data-v-cb91c2e8="" className="comment_nick_info">
                                            <a
                                                data-v-cb91c2e8=""
                                                id={a.memberUid}
                                                href="#"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                className="comment_nickname">
                                                {' '}
                                                {a.nick}{' '}
                                            </a>
                                            {/*<!---->*/}
                                        </div>
                                        <i
                                            data-v-83d84c4a=""
                                            data-v-cb91c2e8=""
                                            className="LevelIcon icon_level"
                                            style={{
                                                backgroundImage:
                                                    'url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)',
                                            }}></i>
                                        {/*<!---->*/}
                                    </div>
                                    <div className="comment_text_box">
                                        <p className="comment_text_view">
                                            {/*<!---->*/}
                                            <span className="text_comment">{a.content}</span>
                                        </p>
                                        {/*<!---->*/}
                                    </div>
                                    <div className="comment_info_box">
                                        <span className="comment_info_date">{formattedDate}</span>
                                        <a role="button" className="comment_info_button"
                                           onClick={() => {
                                               setReplyToComment(a.commentNo);
                                               setParentNo(a.commentNo);
                                           }}>
                                            {' '}
                                            답글쓰기{' '}
                                        </a>
                                    </div>
                                    <div data-v-0330f652="" className="comment_tool">
                                        <a
                                            data-v-0330f652=""
                                            id="commentItem97566624"
                                            role="button"
                                            title="더보기"
                                            className="comment_tool_button"
                                            onClick={() => {
                                                changeDTO(setPopupSetting, 'axiosData', a.commentNo)
                                                setPopup('user' + i);
                                            }}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-three-dots-vertical"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                            </svg>
                                            {popup === 'user' + i &&
                                                <UserPopup popupSetting={popupSetting}
                                                           communityNo={communityNo}
                                                           commentType={commentType}
                                                           setCommentsList={setCommentsList}
                                                           setCommentReply={setCommentReply}
                                                           commentRefresh={commentRefresh}
                                                           setRefreshTrigger={setRefreshTrigger}>
                                                </UserPopup>}
                                        </a>
                                        {/*<!---->*/}
                                    </div>
                                </div>
                            </div>
                        </li>
                        {replyToComment === a.commentNo && (
                            <li className={"CommentItem CommentItem--reply"}>
                                <CommentWriter insertComment={insertComment}
                                               commentWrite={commentWrite}
                                               setCommentWrite={setCommentWrite}
                                               setParentNo={setParentNo}
                                               setReplyToComment={setReplyToComment}
                                               myInfo={myInfo}>
                                </CommentWriter>
                            </li>
                        )}
                        {commentReply.map(function (reply, j) {
                            if (reply.parentNo === a.commentNo && reply.isDeleted != -1)
                                return (<>
                                    <li id={reply.commentNo} className="CommentItem CommentItem--reply">
                                        <div className="comment_area">
                                            <a href={'#'} className={'comment_thumb'}>
                                                <img
                                                    src={reply.profileImg}
                                                    alt={'프로필 사진'}
                                                    style={{width: '36px', height: '36px'}}
                                                />
                                            </a>
                                            <div className={'comment_box'}>
                                                <div data-v-cb91c2e8="" className="comment_nick_box">
                                                    <div data-v-cb91c2e8="" className="comment_nick_info">
                                                        <a
                                                            data-v-cb91c2e8=""
                                                            id={reply.memberUid}
                                                            href="#"
                                                            role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            className="comment_nickname">
                                                            {' '}
                                                            {reply.nick}{' '}
                                                        </a>
                                                        {/*<!---->*/}
                                                    </div>
                                                    <i
                                                        data-v-83d84c4a=""
                                                        data-v-cb91c2e8=""
                                                        className="LevelIcon icon_level"
                                                        style={{
                                                            backgroundImage:
                                                                'url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)',
                                                        }}></i>
                                                    {/*<!---->*/}
                                                </div>
                                                <div className="comment_text_box">
                                                    <p className="comment_text_view">
                                                        {/*<!---->*/}
                                                        <span className="text_comment">{reply.content}</span>
                                                    </p>
                                                    {/*<!---->*/}
                                                </div>
                                                <div className="comment_info_box">
                                                    <span className="comment_info_date">{formattedDate}</span>
                                                    <a role="button" className="comment_info_button"
                                                       onClick={() => {
                                                           setReplyToComment(reply.commentNo);
                                                           setParentNo(reply.parentNo);
                                                       }}>
                                                        {' '}
                                                        답글쓰기{' '}
                                                    </a>
                                                </div>
                                                <div data-v-0330f652="" className="comment_tool">
                                                    <a
                                                        data-v-0330f652=""
                                                        id="commentItem97566624"
                                                        role="button"
                                                        title="더보기"
                                                        className="comment_tool_button"
                                                        onClick={() => {
                                                            changeDTO(setPopupSetting, 'axiosData', reply.commentNo)
                                                            setPopup('comment' + j);
                                                        }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-three-dots-vertical"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                        </svg>
                                                        {popup === 'comment' + j &&
                                                            <UserPopup popupSetting={popupSetting}
                                                                       communityNo={communityNo}
                                                                       commentType={commentType}
                                                                       setCommentsList={setCommentsList}
                                                                       setCommentReply={setCommentReply}
                                                                       commentRefresh={commentRefresh}
                                                                       setRefreshTrigger={setRefreshTrigger}>
                                                            </UserPopup>}
                                                    </a>
                                                    {/*<!---->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {replyToComment === reply.commentNo && (
                                        <li className={"CommentItem CommentItem--reply"}>
                                            <CommentWriter insertComment={insertComment}
                                                           commentWrite={commentWrite}
                                                           setCommentWrite={setCommentWrite}
                                                           setParentNo={setParentNo}
                                                           setReplyToComment={setReplyToComment}
                                                           myInfo={myInfo}>
                                            </CommentWriter>
                                        </li>
                                    )}
                                </>)
                            if (reply.parentNo === a.commentNo && reply.isDeleted === -1)
                                return (<>
                                    <li id={reply.commentNo} className="CommentItem CommentItem--reply">
                                        <div className="comment_area">
                                            <div className={'comment_box'}>
                                                <div className="comment_text_box">
                                                    <p className="comment_text_view">
                                                        {/*<!---->*/}
                                                        <span className="text_comment">삭제된 댓글입니다.</span>
                                                    </p>
                                                    {/*<!---->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*{replyToComment === reply.commentNo && (
                                    <li className={"CommentItem CommentItem--reply"}>
                                        <CommentWriter insertComment={insertComment} commentWrite={commentWrite} setCommentWrite={setCommentWrite} setParentNo={setParentNo} setReplyToComment={setReplyToComment}></CommentWriter>
                                    </li>
                                )}*/}
                                </>)
                        })}
                    </div>)
                if (a.isDeleted === -1)
                    return (<>
                        <li id={a.commentNo} className="CommentItem">
                            <div className="comment_area">
                                <div className={'comment_box'}>
                                    <div className="comment_text_box">
                                        <p className="comment_text_view">
                                            {/*<!---->*/}
                                            <span className="text_comment">삭제된 댓글입니다.</span>
                                        </p>
                                        {/*<!---->*/}
                                    </div>
                                </div>
                            </div>
                        </li>
                        {commentReply.map(function (reply, j) {
                            if (reply.parentNo === a.commentNo && reply.isDeleted != -1)
                                return (<>
                                    <li id={reply.commentNo} className="CommentItem CommentItem--reply">
                                        <div className="comment_area">
                                            <a href={'#'} className={'comment_thumb'}>
                                                <img
                                                    src={reply.profileImg}
                                                    alt={'프로필 사진'}
                                                    style={{width: '36px', height: '36px'}}
                                                />
                                            </a>
                                            <div className={'comment_box'}>
                                                <div data-v-cb91c2e8="" className="comment_nick_box">
                                                    <div data-v-cb91c2e8="" className="comment_nick_info">
                                                        <a
                                                            data-v-cb91c2e8=""
                                                            id={reply.memberUid}
                                                            href="#"
                                                            role="button"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            className="comment_nickname">
                                                            {' '}
                                                            {reply.nick}{' '}
                                                        </a>
                                                        {/*<!---->*/}
                                                    </div>
                                                    <i
                                                        data-v-83d84c4a=""
                                                        data-v-cb91c2e8=""
                                                        className="LevelIcon icon_level"
                                                        style={{
                                                            backgroundImage:
                                                                'url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)',
                                                        }}></i>
                                                    {/*<!---->*/}
                                                </div>
                                                <div className="comment_text_box">
                                                    <p className="comment_text_view">
                                                        {/*<!---->*/}
                                                        <span className="text_comment">{reply.content}</span>
                                                    </p>
                                                    {/*<!---->*/}
                                                </div>
                                                <div className="comment_info_box">
                                                    <span className="comment_info_date">{formattedDate}</span>
                                                    <a role="button" className="comment_info_button"
                                                       onClick={() => {
                                                           setReplyToComment(reply.commentNo);
                                                           setParentNo(reply.parentNo);
                                                       }}>
                                                        {' '}
                                                        답글쓰기{' '}
                                                    </a>
                                                </div>
                                                <div data-v-0330f652="" className="comment_tool">
                                                    <a
                                                        data-v-0330f652=""
                                                        id="commentItem97566624"
                                                        role="button"
                                                        title="더보기"
                                                        className="comment_tool_button"
                                                        onClick={() => {
                                                            changeDTO(setPopupSetting, 'axiosData', reply.commentNo)
                                                            setPopup('comment' + j);
                                                        }}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="16"
                                                            height="16"
                                                            fill="currentColor"
                                                            className="bi bi-three-dots-vertical"
                                                            viewBox="0 0 16 16">
                                                            <path
                                                                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                        </svg>
                                                        {popup === 'comment' + j &&
                                                            <UserPopup popupSetting={popupSetting}
                                                                       communityNo={communityNo}
                                                                       commentType={commentType}
                                                                       setCommentsList={setCommentsList}
                                                                       setCommentReply={setCommentReply}
                                                                       commentRefresh={commentRefresh}
                                                                       setRefreshTrigger={setRefreshTrigger}>
                                                            </UserPopup>}
                                                    </a>
                                                    {/*<!---->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {replyToComment === reply.commentNo && (
                                        <li className={"CommentItem CommentItem--reply"}>
                                            <CommentWriter insertComment={insertComment}
                                                           commentWrite={commentWrite}
                                                           setCommentWrite={setCommentWrite}
                                                           setParentNo={setParentNo}
                                                           setReplyToComment={setReplyToComment}
                                                           myInfo={myInfo}>
                                            </CommentWriter>
                                        </li>
                                    )}
                                </>)
                            if (reply.parentNo === a.commentNo && reply.isDeleted === -1)
                                return (<>
                                    <li id={reply.commentNo} className="CommentItem CommentItem--reply">
                                        <div className="comment_area">
                                            <div className={'comment_box'}>
                                                <div className="comment_text_box">
                                                    <p className="comment_text_view">
                                                        {/*<!---->*/}
                                                        <span className="text_comment">삭제된 댓글입니다.</span>
                                                    </p>
                                                    {/*<!---->*/}
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/*{replyToComment === reply.commentNo && (
                                    <li className={"CommentItem CommentItem--reply"}>
                                        <CommentWriter insertComment={insertComment} commentWrite={commentWrite} setCommentWrite={setCommentWrite} setParentNo={setParentNo} setReplyToComment={setReplyToComment}></CommentWriter>
                                    </li>
                                )}*/}
                                </>)
                        })}
                    </>)
            })}


            {/*<li id="97566728" className="CommentItem CommentItem--reply">
                <div className="comment_area">
                    <a href="#" className="comment_thumb">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`}
                            alt="프로필 사진"
                            style={{ width: '36px', height: '36px' }}
                        />
                    </a>
                    <div className="comment_box">
                        <div data-v-cb91c2e8="" className="comment_nick_box">
                            <div data-v-cb91c2e8="" className="comment_nick_info">
                                <a
                                    data-v-cb91c2e8=""
                                    id="cih97566728"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="comment_nickname">
                                    {' '}
                                    젬니그라피{' '}
                                </a>
                            </div>
                            <i
                                data-v-83d84c4a=""
                                data-v-cb91c2e8=""
                                className="LevelIcon icon_level"
                                style={{
                                    backgroundImage:
                                        'url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)',
                                }}></i>
                            <em data-v-cb91c2e8="" className="comment_badge_writer">
                                <svg data-v-cb91c2e8="" aria-label="작성자" className="svg-icon ico-post-writer">
                                    <use data-v-cb91c2e8="" xlinkHref="#ico-post-writer" aria-hidden="false"></use>
                                </svg>
                            </em>
                        </div>
                        <div className="comment_text_box">
                            <p className="comment_text_view">
                                <!---->
                                <span className="text_comment">
																		감사합니다🙇🏻‍♂️ 대댓글입니다00000000000000000000000000000000!
																	</span>
                            </p>

                        </div>
                        <div className="comment_info_box">
                            <span className="comment_info_date">2023.11.07. 23:43</span>
                            <a href="#" role="button" className="comment_info_button">
                                {' '}
                                답글쓰기{' '}
                            </a>
                        </div>
                        <div data-v-0330f652="" className="comment_tool">
                            <a
                                data-v-0330f652=""
                                id="commentItem97566728"
                                role="button"
                                title="더보기"
                                className="comment_tool_button"
                                onClick={() => {
                                    setPopup('user');}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-three-dots-vertical"
                                    viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                                {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                            </a>
                            <!---->
                        </div>
                    </div>
                </div>
            </li>
            <li id="97568821" className="CommentItem CommentItem--reply">
                <div className="comment_area">
                    <a href="/ca-fe/cafes/19943558/members/YkD-QK-OVOLRfOCShJPDkg" className="comment_thumb">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`}
                            alt="프로필 사진"
                            style={{ width: '36px', height: '36px' }}
                        />
                    </a>
                    <div className="comment_box">
                        <div data-v-cb91c2e8="" className="comment_nick_box">
                            <div data-v-cb91c2e8="" className="comment_nick_info">
                                <a
                                    data-v-cb91c2e8=""
                                    id="cih97568821"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="comment_nickname">
                                    {' '}
                                    게이트전{' '}
                                </a>
                                <!---->
                            </div>
                            <i
                                data-v-83d84c4a=""
                                data-v-cb91c2e8=""
                                className="LevelIcon icon_level"
                                style={{
                                    backgroundImage:
                                        'url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)',
                                }}></i>
                            <!---->
                        </div>
                        <div className="comment_text_box">
                            <p className="comment_text_view">
                                <a
                                    id="commentProfile97568821"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="text_nickname">
                                    젬니그라피
                                </a>
                                <span className="text_comment">
																		감사합니다:) 대댓글의 대댓글입니다0000000000000000000000000000
																	</span>
                            </p>
                            <!---->
                        </div>
                        <div className="comment_info_box">
                            <span className="comment_info_date">2023.11.08. 08:18</span>
                            <a href="#" role="button" className="comment_info_button">
                                {' '}
                                답글쓰기{' '}
                            </a>
                        </div>
                        <div data-v-0330f652="" className="comment_tool">
                            <a
                                data-v-0330f652=""
                                id="commentItem97568821"
                                role="button"
                                title="더보기"
                                style={{position:'relative'}}
                                className="comment_tool_button"
                                onClick={() => {
                                    setPopup('user');}}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-three-dots-vertical"
                                    viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                                {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                            </a>
                            <!---->
                        </div>
                    </div>
                </div>
            </li>*/}
        </ul>
    </>)
}


export default CommentList;