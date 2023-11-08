import React from "react";
import "./../../css/community/view.css";
import {Col, Container, Row} from "reactstrap";

function CommunityView() {
    return (<>
            <Container style={{userSelect: 'none'}}>
                <View></View>
            </Container>
        </>
    )
}

function View(){
    return (<>
        <Row>
            <Col col={12}>
                <div className="view" style={{marginTop: "80px"}}>
                    <div className="Article layout_content">
                        <div className="article_wrap">
                            <div className="ArticleTopBtns">
                                <div className="left_area">
                                    {/*빈 공간*/}
                                </div>
                                <div className="right_area">
                                    <a className="BaseButton btn_prev BaseButton--skinGray size_default"
                                       href={"#"}
                                       role={"button"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             className="bi bi-chevron-up" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                                        </svg>
                                        <span className="BaseButton_txt">이전글</span>
                                    </a>
                                    <a className="BaseButton btn_next BaseButton--skinGray size_default"
                                       href={"#"}
                                       role={"button"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor"
                                             class="bi bi-chevron-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                        </svg>
                                        <span className="BaseButton_txt">다음글</span>
                                    </a>
                                    <a className="BaseButton BaseButton--skinGray size_default" href={"#"}>
                                        {/**/}
                                        <span className={"BaseButton_txt"}>목록</span>
                                    </a>
                                </div>
                            </div>
                            <div className="ArticleContentBox" style={{marginBottom: "100px"}}>
                                <div className="article_header">
                                    <div className="ArticleTitle">
                                        <a href={"#"} className="link_board">
                                            자유게시판
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor"
                                                 class="bi bi-chevron-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd"
                                                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                            </svg>
                                        </a>
                                        <div className="title_area">
                                            <h3 className="title_text"> 글 제목000000000000000000 </h3>
                                        </div>
                                    </div>
                                    <div className="WriterInfo">
                                        <div className="thumb_area">
                                            <a href="#" className="thumb">
                                                <img src="./../../../images/community/testimg.jpg" alt="프로필 사진"
                                                     width="36"
                                                     height="36"/>
                                                <em className="popular_mark">
                                                    <span className="blind">인기멤버</span>
                                                </em>
                                            </a>
                                        </div>
                                        <div className="profile_area">
                                            <div className="profile_info">
                                                <div className="nick_box">
                                                    <button id="writerInfokws4514" className="nickname"> 닉네임임
                                                    </button>
                                                    {/*빈공간*/}
                                                </div>
                                                <em className="nick_level"> 등급임(레벨)
                                                    <i data-v-83d84c4a=""
                                                       className="LevelIcon icon_level"
                                                       style={{backgroundImage: "url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot)"}}>
                                                    </i>
                                                </em>
                                                <div className="subscript_area">
                                                    <button type="button" aria-selected="false"
                                                            className="btn_subscript">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                             height="16"
                                                             fill="currentColor" className="bi bi-plus"
                                                             viewBox="0 0 16 16">
                                                            <path
                                                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                                        </svg>
                                                        구독
                                                    </button>
                                                    <div className="toast_subscribe toast_subscribe_leave"
                                                         style={{display: "none"}}> 이 멤버의 글을 구독탭에서 볼 수 있습니다.
                                                    </div>
                                                </div>
                                                <a href="#" className="link_talk">
                                                    1:1 채팅
                                                </a>
                                            </div>
                                            <div className="article_info">
                                            <span className="date">
                                                2023.11.06. 22:32
                                            </span>
                                                <span className="count">
                                                조회 929
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ArticleTool">
                                        <a href="#" role="button" className="button_comment">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 fill="currentColor" className="bi bi-chat-dots"
                                                 viewBox="0 0 16 16">
                                                <path
                                                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                                <path
                                                    d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                                            </svg>
                                            댓글
                                            <strong className="num">5</strong>
                                        </a>
                                        <a href="#" role="button" className="button_url">URL 복사</a>
                                        <div className="toast_url_copy_successful" style={{display: "none"}}>
                                            URL이 복사되었습니다. 원하는 곳에 붙여 넣으세요.
                                        </div>
                                        <div className="more_area">
                                            <a id="articleTool" href="#" role="button" title="더보기"
                                               className="button_more">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-three-dots-vertical"
                                                     viewBox="0 0 16 16">
                                                    <path
                                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                </svg>
                                            </a>{/*빈공간*/}
                                            <div data-v-32fa3c54="" className="LayerArticle"
                                                 style={{display: "none"}}>빈공간
                                                <div data-v-32fa3c54=""
                                                     className="article_layer cafe_calendar_layer"
                                                     style={{width: "279px", zIndex: "2000"}}>
                                                    <h3 data-v-32fa3c54="" className="blind">
                                                        카페 캘린더 레이어
                                                    </h3>
                                                    <p data-v-32fa3c54="" className="text">
                                                        이 게시글을 카페 캘린더에서 제외하시겠습니까?
                                                    </p>
                                                    <div data-v-32fa3c54="" className="btn_area">
                                                        <a data-v-32fa3c54="" href="#" role="button"
                                                           className="btn_ok">
                                                            <span data-v-32fa3c54="" className="blind">확인</span>
                                                        </a>
                                                        <a data-v-32fa3c54="" href="#" role="button"
                                                           className="btn_cancel">
                                                            <span data-v-32fa3c54="" className="blind">취소</span>
                                                        </a>
                                                    </div>
                                                    <a data-v-32fa3c54="" href="#" role="button" title="닫기"
                                                       className="btn_layer_close">
                                                                <span data-v-32fa3c54=""
                                                                      className="blind">레이어팝업 닫기</span>
                                                    </a>
                                                </div>
                                                {/*빈공간*/}</div>
                                            <div data-v-32fa3c54="" className="LayerArticle"
                                                 style={{display: " none"}}>빈공간
                                                <div data-v-32fa3c54=""
                                                     className="article_layer cafe_calendar_layer"
                                                     style={{width: "279px", zIndex: "2000"}}>
                                                    <h3 data-v-32fa3c54="" className="blind">
                                                        카페 캘린더 레이어
                                                    </h3>
                                                    <p data-v-32fa3c54="" className="text">
                                                        이 게시글을 카페 캘린더로 보내시겠습니까?
                                                    </p>
                                                    <div data-v-32fa3c54="" className="btn_area"><a
                                                        data-v-32fa3c54=""
                                                        href="#" role="button"
                                                        className="btn_ok">
                                                        <span data-v-32fa3c54="" className="blind">확인</span>
                                                    </a>
                                                        <a data-v-32fa3c54="" href="#" role="button"
                                                           className="btn_cancel">
                                                            <span data-v-32fa3c54="" className="blind">취소</span>
                                                        </a>
                                                    </div>
                                                    <a data-v-32fa3c54="" href="#" role="button" title="닫기"
                                                       className="btn_layer_close">
                                                                <span data-v-32fa3c54=""
                                                                      className="blind">레이어팝업 닫기</span>
                                                    </a>
                                                </div>
                                                {/*빈공간*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="article_container">
                                    <div className={"article_viewer"}>
                                        <div>
                                            <div className="content Viewer">
                                                <div className="se-viewer se-theme-default" lang={"ko-KR"}>
                                                    {/*SE_DOC_HEADER_START*/}
                                                    {/*CONTENST_HEADER*/}
                                                    {/*SE_DOC_HEADER_END*/}
                                                    <div className={"se-main-container"}>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                        <p>내용입니다0000000000000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="AttachFileIssueLayer" style={{display: "none"}}>
                                                {/*공백*/}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ArticleTagList">
                                        <strong className={"blind"}>태그</strong>
                                        <ul className={"tag_list"}>
                                            <li className={"item"}>
                                                <a href={"#"} className={"tag_link"}> #일상 </a>
                                            </li>
                                            <li className={"item"}>
                                                <a href={"#"} className={"tag_link"}> #음식 </a>
                                            </li>
                                            <li className={"item"}>
                                                <a href={"#"} className={"tag_link"}> #여행 </a>
                                            </li>
                                            <li className={"item"}>
                                                <a href={"#"} className={"tag_link"}> #java </a>
                                            </li>
                                            <li className={"item"}>
                                                <a href={"#"} className={"tag_link"}> #ootd </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ArticleBottomBtns">
                                        <div className="ArticleWriterProfile"
                                             style={{marginTop: "36px", marginBottom: "36px"}}>
                                            <a href="#" className="more_area">
                                    <span className="thumb">
                                        <img src={"./../../images/community/testimg.jpg"} alt={"프로필"}
                                             style={{width: "36px", height: "36px"}}/>
                                    </span>
                                                <span className={"box"}>
                                        <strong className={"user"}>닉네임임</strong>
                                        님의 게시글 더보기
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                                            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                                        </svg>
                                    </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className={"ReplyBox"}>
                                        <div className={"box_left"}>
                                            <div className={"like_article"}>
                                                <div className={"ReactionLikeIt u_likeit_list_module"}>
                                                    <a href="#" data-isheddenlabel={"false"} role={"button"}
                                                       data-type={"like"}
                                                       title={"이 글 좋아요 클릭"}
                                                       className={"like_no_u_list_btn _button odd"}
                                                       aria-pressed={"false"}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                             height="16"
                                                             fill="currentColor" className="bi bi-heart"
                                                             viewBox="0 0 16 16"
                                                             style={{color: "red"}}>
                                                            <path
                                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                                        </svg>
                                                        <em className={"u_txt _label"}>좋아요</em>
                                                        <em className={"u_cnt _count"}>16</em>
                                                    </a>
                                                </div>
                                                <a href={"#"} role={"button"} title={"좋아요한 멤버 리스트"}
                                                   className={"button_like_list"}>
                                                    <span className={"blind"}>이 글을 '좋아요'한 멤버 리스트</span>
                                                </a>
                                            </div>
                                            <a href={"#"} role={"button"} aria-pressed={"true"}
                                               className={"button_comment"}>
                                    <span className={"icon_area"}>
                                        <svg className={"svg-icon ico-post-comment-323232"}>
                                            <use xlinkHref={"#ico-post-comment-323232"} aria-hidden={"true"}></use>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                            <path
                                                d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                            <path
                                                d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                                        </svg>
                                    </span>
                                                댓글
                                                <strong className={"num"}>18</strong>
                                            </a>
                                        </div>
                                        <div className={"box_right"}>
                                            <div className={"social_article"}>
                                                <div className={"text_area"}>
                                                    <a id={"spiButton"} href={"#"}>
                                            <span className={"splugin-c social_text"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                     fill="currentColor" className="bi bi-box-arrow-up"
                                                     viewBox="0 0 16 16">
  <path fill-rule="evenodd"
        d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
  <path fill-rule="evenodd"
        d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
</svg>
                                                공유
                                            </span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={"report_article"}>
                                                <a href={"#"} className={"button_report"}>신고</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"CommentBox"}>
                                        <div className={"comment_option"}>
                                            <h3 className={"comment_title"}>댓글</h3>
                                            <div className="comment_tab">
                                                <ul className="comment_tab_list">
                                                    <li className="comment_tab_item">
                                                        <a href="#" role="button" aria-selected="true"
                                                           className="comment_tab_button"> 등록순 </a>
                                                    </li>
                                                    <li className="comment_tab_item">
                                                        <a href="#" role="button" aria-selected="false"
                                                           className="comment_tab_button"> 최신순 </a>
                                                    </li>
                                                </ul>
                                                <button type="button" className="comment_refresh_button">
                                                    <span className="blind">새로고침</span>
                                                </button>
                                            </div>
                                        </div>
                                        <ul className={"comment_list"}>
                                            <li id={"97564257"} className="CommentItem">
                                                <div className="comment_area">
                                                    <a href={"#"} className={"comment_thumb"}>
                                                        <img src={"./../../images/community/testimg.jpg"}
                                                             alt={"프로필 사진"}
                                                             style={{width: "36px", height: "36px"}}/>
                                                    </a>
                                                    <div className={"comment_box"}>
                                                        <div data-v-cb91c2e8="" className="comment_nick_box">
                                                            <div data-v-cb91c2e8=""
                                                                 className="comment_nick_info">
                                                                <a data-v-cb91c2e8="" id="cih97564257" href="#"
                                                                   role="button"
                                                                   aria-haspopup="true" aria-expanded="false"
                                                                   className="comment_nickname"> 거루캥 </a>{/*<!---->*/}
                                                            </div>
                                                            <i data-v-83d84c4a="" data-v-cb91c2e8=""
                                                               className="LevelIcon icon_level"
                                                               style={{backgroundImage: "url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)"}}></i>{/*<!---->*/}
                                                        </div>
                                                        <div className="comment_text_box">
                                                            <p className="comment_text_view">{/*<!---->*/}
                                                                <span className="text_comment">사무실에서 간접 여행한 기분이 드네요~!</span>
                                                            </p>{/*<!---->*/}
                                                        </div>
                                                        <div className="comment_info_box">
                                                            <span className="comment_info_date">2023.11.07. 23:36</span>
                                                            <a href="#" role="button"
                                                               className="comment_info_button"> 답글쓰기 </a>
                                                        </div>
                                                        <div data-v-0330f652="" className="comment_tool">
                                                            <a data-v-0330f652="" id="commentItem97566624"
                                                               href="#"
                                                               role="button" title="더보기"
                                                               className="comment_tool_button">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     width="16"
                                                                     height="16"
                                                                     fill="currentColor"
                                                                     className="bi bi-three-dots-vertical"
                                                                     viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                                </svg>
                                                            </a>{/*<!---->*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="97566728" className="CommentItem CommentItem--reply">
                                                <div className="comment_area">
                                                    <a href="#" className="comment_thumb">
                                                        <img src="./../../../images/community/testimg.jpg"
                                                             alt="프로필 사진"
                                                             style={{width: "36px", height: "36px"}}/>
                                                    </a>
                                                    <div className="comment_box">
                                                        <div data-v-cb91c2e8="" className="comment_nick_box">
                                                            <div data-v-cb91c2e8=""
                                                                 className="comment_nick_info">
                                                                <a data-v-cb91c2e8="" id="cih97566728" href="#"
                                                                   role="button"
                                                                   aria-haspopup="true" aria-expanded="false"
                                                                   className="comment_nickname"> 젬니그라피 </a>
                                                            </div>
                                                            <i data-v-83d84c4a="" data-v-cb91c2e8=""
                                                               className="LevelIcon icon_level"
                                                               style={{backgroundImage: "url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)"}}></i>
                                                            <em data-v-cb91c2e8=""
                                                                className="comment_badge_writer">
                                                                <svg data-v-cb91c2e8="" aria-label="작성자"
                                                                     className="svg-icon ico-post-writer">
                                                                    <use data-v-cb91c2e8=""
                                                                         xlinkHref="#ico-post-writer"
                                                                         aria-hidden="false"></use>
                                                                </svg>
                                                            </em></div>
                                                        <div className="comment_text_box">
                                                            <p className="comment_text_view">{/*<!---->*/}
                                                                <span className="text_comment">감사합니다🙇🏻‍♂️ 대댓글입니다00000000000000000000000000000000!</span>
                                                            </p>{/**/}</div>
                                                        <div className="comment_info_box"><span
                                                            className="comment_info_date">2023.11.07. 23:43</span><a
                                                            href="#" role="button"
                                                            className="comment_info_button"> 답글쓰기 </a>
                                                        </div>
                                                        <div data-v-0330f652="" className="comment_tool">
                                                            <a data-v-0330f652="" id="commentItem97566728"
                                                               href="#"
                                                               role="button" title="더보기"
                                                               className="comment_tool_button">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     width="16"
                                                                     height="16"
                                                                     fill="currentColor"
                                                                     className="bi bi-three-dots-vertical"
                                                                     viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                                </svg>
                                                            </a>{/*<!---->*/}</div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="97568821" className="CommentItem CommentItem--reply">
                                                <div className="comment_area">
                                                    <a href="/ca-fe/cafes/19943558/members/YkD-QK-OVOLRfOCShJPDkg"
                                                       className="comment_thumb">
                                                        <img src="./../../../images/community/testimg.jpg"
                                                             alt="프로필 사진"
                                                             style={{width: "36px", height: "36px"}}/>
                                                    </a>
                                                    <div className="comment_box">
                                                        <div data-v-cb91c2e8="" className="comment_nick_box">
                                                            <div data-v-cb91c2e8=""
                                                                 className="comment_nick_info">
                                                                <a data-v-cb91c2e8="" id="cih97568821" href="#"
                                                                   role="button" aria-haspopup="true"
                                                                   aria-expanded="false"
                                                                   className="comment_nickname"> 게이트전 </a>{/*<!---->*/}
                                                            </div>
                                                            <i data-v-83d84c4a="" data-v-cb91c2e8=""
                                                               className="LevelIcon icon_level"
                                                               style={{backgroundImage: "url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot;)"}}></i>{/*<!---->*/}
                                                        </div>
                                                        <div className="comment_text_box"><p
                                                            className="comment_text_view">
                                                            <a id="commentProfile97568821" href="#"
                                                               role="button"
                                                               aria-haspopup="true" aria-expanded="false"
                                                               className="text_nickname">젬니그라피</a>
                                                            <span className="text_comment">감사합니다:) 대댓글의 대댓글입니다0000000000000000000000000000</span>
                                                        </p>{/*<!---->*/}
                                                        </div>
                                                        <div className="comment_info_box"><span
                                                            className="comment_info_date">2023.11.08. 08:18</span>
                                                            <a href="#" role="button"
                                                               className="comment_info_button"> 답글쓰기 </a>
                                                        </div>
                                                        <div data-v-0330f652="" className="comment_tool">
                                                            <a data-v-0330f652="" id="commentItem97568821"
                                                               href="#"
                                                               role="button" title="더보기"
                                                               className="comment_tool_button">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     width="16"
                                                                     height="16"
                                                                     fill="currentColor"
                                                                     className="bi bi-three-dots-vertical"
                                                                     viewBox="0 0 16 16">
                                                                    <path
                                                                        d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                                </svg>
                                                            </a>
                                                            {/*<!---->*/}
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div data-v-afadf0bc className={"CommentWriter"}>
                                            <div className="comment_inbox">
                                                <strong className="blind">댓글을 입력하세요</strong>
                                                <em className={"comment_inbox_name"}>닉네임임</em>
                                                <textarea placeholder={"댓글을 남겨보세요"} rows={1}
                                                          className={"comment_inbox_text"}
                                                          style={{
                                                              overflow: "hidden",
                                                              overflowWrap: "break-word",
                                                              height: "17px"
                                                          }}></textarea>
                                                <div data-v-afadf0bc="" className="comment_inbox_number"><span
                                                    data-v-afadf0bc=""
                                                    className="blind">현재 입력한 글자수</span><strong
                                                    data-v-afadf0bc="" className="inbox_count">194</strong><span
                                                    data-v-afadf0bc=""
                                                    className="blind">전체 입력 가능한 글자수</span><span
                                                    data-v-afadf0bc="" className="inbox_total">3000</span></div>
                                            </div>
                                            <div data-v-afadf0bc="" className="comment_attach">
                                                <div data-v-afadf0bc="" className="attach_box">
                                                    <label data-v-2ec5a274="" data-v-afadf0bc=""
                                                           htmlFor="attach3" className="button_file">
                                                        <svg data-v-2ec5a274="" aria-label="사진첨부"
                                                             className="svg-icon ico-post-photo-323232">
                                                            <use data-v-2ec5a274=""
                                                                 xlinkHref="#ico-post-photo-323232"
                                                                 aria-hidden="false"></use>
                                                        </svg>
                                                        <input data-v-2ec5a274="" id="attach3" type="file"
                                                               title="사진첨부"
                                                               accept="image/*, image/heic" className="blind"/>
                                                    </label>
                                                    <a data-v-afadf0bc="" href="#" role="button"
                                                       className="button_sticker">
                                                        <svg data-v-afadf0bc="" aria-label="스티커첨부"
                                                             className="svg-icon ico-post-sticker-323232">
                                                            <use data-v-afadf0bc=""
                                                                 xlinkHref="#ico-post-sticker-323232"
                                                                 aria-hidden="false"></use>
                                                        </svg>
                                                    </a>{/*<!---->*/}</div>
                                                <div data-v-afadf0bc="" className="register_box">{/*<!---->*/}
                                                    <a data-v-afadf0bc="" href="#" role="button"
                                                       className="button btn_register is_active">등록</a>
                                                </div>
                                            </div>
                                        </div>
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
    </>);
}

export default CommunityView;