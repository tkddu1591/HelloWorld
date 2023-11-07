import React from "react";

function CommunityView() {
    return (<>
            <div className="view">
                <div className="Article layout_content">
                    <div className="article_wrap">
                        <div className="ArticleTopBtns">
                            <div className="left_area">
                                빈 공간
                            </div>
                            <div className="right_area">
                                <a className="BaseButton btn_prev" href={"#"} role={"button"}>
                                    <svg className="svg-icon ico-post-btn-arrow-up">
                                        <use xlinkHref={"#ico-post-btn-arrow-up-323232"} aria-hidden="true"></use>
                                    </svg>
                                    <span className="BaseButton_txt">이전글</span>
                                </a>
                                <a className="BaseButton btn_next" href={"#"} role={"button"}>
                                    <svg className="svg-icon ico-post-btn-arrow-up">
                                        <use xlinkHref={"#ico-post-btn-arrow-up-323232"} aria-hidden="true"></use>
                                    </svg>
                                    <span className="BaseButton_txt">다음글</span>
                                </a>
                                <a className="BaseButton BaseButton" href={"#"}>
                                    빈공간
                                    <span className={"BaseButton_txt"}>목록</span>
                                </a>
                            </div>
                        </div>
                        <div className="ArticleContentBox">
                            <div className="article_header">
                                <div className="ArticleTitle">
                                    <a href={"#"} className="link_board">
                                        자유게시판
                                        <svg className={"svg-icon ico-post-arrow-03-c-75-a"}>
                                            <use xlinkHref="#ico-post-arrow-03-c-75-a" aria-hidden="true"></use>
                                        </svg>
                                    </a>
                                    <div className="title_area">
                                        <h3 className="title_text"> 東京旅行-3 </h3>
                                    </div>
                                </div>
                                <div className="WriterInfo">
                                    <div className="thumb_area">
                                        <a href="#" className="thumb">
                                            <img src="#" alt="프로필 사진" width="36" height="36"/>
                                            <em className="popular_mark">
                                                <span className="blind">인기멤버</span>
                                            </em>
                                        </a>
                                    </div>
                                    <div className="profile_area">
                                        <div className="profile_info">
                                            <div className="nick_box">
                                                <button id="writerInfokws4514" className="nickname"> Enga</button>
                                                빈공간
                                            </div>
                                            <em className="nick_level"> 고아캐드
                                                <i data-v-83d84c4a=""
                                                   className="LevelIcon icon_level"
                                                   style={{backgroundImage: "url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot)"}}>
                                                </i>
                                            </em>
                                            <div className="subscript_area">
                                                <button type="button" aria-selected="false" className="btn_subscript">
                                                    <svg className="svg-icon ico-plus">
                                                        <use xlinkHref="#ico-plus" aria-hidden="true"></use>
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
                                        <svg className="svg-icon ico-post-comment-323232">
                                            <use xlinkHref="#ico-post-comment-323232" aria-hidden="true"></use>
                                        </svg>
                                        댓글
                                        <strong className="num">5</strong>
                                    </a>
                                    <a href="#" role="button" className="button_url">URL 복사</a>
                                    <div className="toast_url_copy_successful" style={{display: "none"}}>
                                        URL이 복사되었습니다. 원하는 곳에 붙여 넣으세요.
                                    </div>
                                    <div className="more_area">
                                        <a id="articleTool" href="#" role="button" title="더보기" className="button_more">
                                            <svg aria-label="더보기" className="svg-icon ico-post-more-979797">
                                                <use xlinkHref="#ico-post-more-979797" aria-hidden="false"></use>
                                            </svg>
                                        </a>빈공간
                                        <div data-v-32fa3c54="" className="LayerArticle" style={{display: "none"}}>빈공간
                                            <div data-v-32fa3c54="" className="article_layer cafe_calendar_layer"
                                                 style={{width: "279px", zIndex: "2000"}}>
                                                <h3 data-v-32fa3c54="" className="blind">
                                                    카페 캘린더 레이어
                                                </h3>
                                                <p data-v-32fa3c54="" className="text">
                                                    이 게시글을 카페 캘린더에서 제외하시겠습니까?
                                                </p>
                                                <div data-v-32fa3c54="" className="btn_area">
                                                    <a data-v-32fa3c54="" href="#" role="button" className="btn_ok">
                                                        <span data-v-32fa3c54="" className="blind">확인</span>
                                                    </a>
                                                    <a data-v-32fa3c54="" href="#" role="button" className="btn_cancel">
                                                        <span data-v-32fa3c54="" className="blind">취소</span>
                                                    </a>
                                                </div>
                                                <a data-v-32fa3c54="" href="#" role="button" title="닫기"
                                                   className="btn_layer_close">
                                                    <span data-v-32fa3c54="" className="blind">레이어팝업 닫기</span>
                                                </a>
                                            </div>
                                            빈공간</div>
                                        <div data-v-32fa3c54="" className="LayerArticle" style={{display: " none"}}>빈공간
                                            <div data-v-32fa3c54="" className="article_layer cafe_calendar_layer"
                                                 style={{width: "279px", zIndex: "2000"}}>
                                                <h3 data-v-32fa3c54="" className="blind">
                                                    카페 캘린더 레이어
                                                </h3>
                                                <p data-v-32fa3c54="" className="text">
                                                    이 게시글을 카페 캘린더로 보내시겠습니까?
                                                </p>
                                                <div data-v-32fa3c54="" className="btn_area"><a data-v-32fa3c54=""
                                                                                                href="#" role="button"
                                                                                                className="btn_ok">
                                                    <span data-v-32fa3c54="" className="blind">확인</span>
                                                </a>
                                                    <a data-v-32fa3c54="" href="#" role="button" className="btn_cancel">
                                                        <span data-v-32fa3c54="" className="blind">취소</span>
                                                    </a>
                                                </div>
                                                <a data-v-32fa3c54="" href="#" role="button" title="닫기" className="btn_layer_close">
                                                    <span data-v-32fa3c54="" className="blind">레이어팝업 닫기</span>
                                                </a>
                                            </div>
                                            빈공간
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article_container">
                                <div className={"article_viewer"}></div>
                                <div className={"article_writer"}></div>
                                <div className={"ReplyBox"}></div>
                                <div className={"CommentBox"}></div>
                            </div>
                        </div>
                        <div className="ArticleBottomBtns"></div>
                        <div className="RelatedArticles"></div>
                        <div className="PopularArticles"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityView;