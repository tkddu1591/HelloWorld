import React from 'react';
import '../../../../css/community/view.css';



function ArticleHeader({view, navigate, scrollToCommentOption}){
    const date = new Date(view.regDate);


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

    return (<>
        <div className="article_header">
            <div className="ArticleTitle">
                <a className="link_board" onClick={()=>{
                    navigate(`/community/list?cateNo=${view.cateNo}`)
                }}>
                    {view.boardName}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16">
                        <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </a>
                <div className="title_area">
                    <h3 className="title_text"> {view.title} </h3>
                </div>
            </div>
            <div className="WriterInfo">
                <div className="thumb_area">
                    <a href="#" className="thumb">
                        <img
                            src={view.profileImg}
                            alt="프로필 사진"
                            width="36"
                            height="36"
                        />
                        <em className="popular_mark">
                            <span className="blind">인기멤버</span>
                        </em>
                    </a>
                </div>
                <div className="profile_area">
                    <div className="profile_info">
                        <div className="nick_box">
                            <button id="writerInfokws4514" className="nickname">
                                {' '}
                                {view.nick}
                            </button>
                            {/*빈공간*/}
                        </div>
                        <em className="nick_level">
                            {' '}
                            등급임(레벨)
                            <i
                                data-v-83d84c4a=""
                                className="LevelIcon icon_level"
                                style={{
                                    backgroundImage:
                                        'url(&quot;https://ca-fe.pstatic.net/web-pc/static/img/sprite_levelicon_9dbde2.svg#1_110-usage&quot)',
                                }}></i>
                        </em>
                        <div className="subscript_area">
                            <button type="button" aria-selected="false" className="btn_subscript">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus"
                                    viewBox="0 0 16 16">
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                </svg>
                                구독
                            </button>
                            <div className="toast_subscribe toast_subscribe_leave" style={{ display: 'none' }}>
                                {' '}
                                이 멤버의 글을 구독탭에서 볼 수 있습니다.
                            </div>
                        </div>
                        <a href="#" className="link_talk">
                            1:1 채팅
                        </a>
                    </div>
                    <div className="article_info">
                        <span className="date">{formattedDate}</span>
                        <span className="count">조회 {view.hit}</span>
                    </div>
                </div>
            </div>
            <div className="ArticleTool">
                <a role="button" className="button_comment" onClick={scrollToCommentOption}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chat-dots"
                        viewBox="0 0 16 16">
                        <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                    </svg>
                    댓글
                    <strong className="num">{view.comAmount}</strong>
                </a>
                <a href="#" role="button" className="button_url">
                    URL 복사
                </a>
                <div className="toast_url_copy_successful" style={{ display: 'none' }}>
                    URL이 복사되었습니다. 원하는 곳에 붙여 넣으세요.
                </div>
                <div className="more_area">
                    <a id="articleTool" href="#" role="button" title="더보기" className="button_more">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-three-dots-vertical"
                            viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </a>
                    {/*빈공간*/}
                    <div data-v-32fa3c54="" className="LayerArticle" style={{ display: 'none' }}>
                        빈공간
                        <div
                            data-v-32fa3c54=""
                            className="article_layer cafe_calendar_layer"
                            style={{ width: '279px', zIndex: '2000' }}>
                            <h3 data-v-32fa3c54="" className="blind">
                                카페 캘린더 레이어
                            </h3>
                            <p data-v-32fa3c54="" className="text">
                                이 게시글을 카페 캘린더에서 제외하시겠습니까?
                            </p>
                            <div data-v-32fa3c54="" className="btn_area">
                                <a data-v-32fa3c54="" href="#" role="button" className="btn_ok">
																<span data-v-32fa3c54="" className="blind">
																	확인
																</span>
                                </a>
                                <a data-v-32fa3c54="" href="#" role="button" className="btn_cancel">
																<span data-v-32fa3c54="" className="blind">
																	취소
																</span>
                                </a>
                            </div>
                            <a data-v-32fa3c54="" href="#" role="button" title="닫기" className="btn_layer_close">
															<span data-v-32fa3c54="" className="blind">
																레이어팝업 닫기
															</span>
                            </a>
                        </div>
                        {/*빈공간*/}
                    </div>
                    <div data-v-32fa3c54="" className="LayerArticle" style={{ display: ' none' }}>
                        빈공간
                        <div
                            data-v-32fa3c54=""
                            className="article_layer cafe_calendar_layer"
                            style={{ width: '279px', zIndex: '2000' }}>
                            <h3 data-v-32fa3c54="" className="blind">
                                카페 캘린더 레이어
                            </h3>
                            <p data-v-32fa3c54="" className="text">
                                이 게시글을 카페 캘린더로 보내시겠습니까?
                            </p>
                            <div data-v-32fa3c54="" className="btn_area">
                                <a data-v-32fa3c54="" href="#" role="button" className="btn_ok">
																<span data-v-32fa3c54="" className="blind">
																	확인
																</span>
                                </a>
                                <a data-v-32fa3c54="" href="#" role="button" className="btn_cancel">
																<span data-v-32fa3c54="" className="blind">
																	취소
																</span>
                                </a>
                            </div>
                            <a data-v-32fa3c54="" href="#" role="button" title="닫기" className="btn_layer_close">
															<span data-v-32fa3c54="" className="blind">
																레이어팝업 닫기
															</span>
                            </a>
                        </div>
                        {/*빈공간*/}
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export default ArticleHeader;