import React from 'react';
import '../../../../css/community/view.css';



function ArticleBottomBtns({view, commentRef}){
    return (<>
        <div className="ArticleBottomBtns" ref={commentRef}>
            <div className="ArticleWriterProfile" style={{ marginTop: '36px', marginBottom: '36px' }}>
                <a href="#" className="more_area">
													<span className="thumb">
														<img
                                                            src={view.profileImg}
                                                            alt={'프로필'}
                                                            style={{ width: '36px', height: '36px' }}
                                                        />
													</span>
                    <span className={'box'}>
														<strong className={'user'}>{view.nick}</strong>
														님의 게시글 더보기
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
													</span>
                </a>
            </div>
        </div>
    </>)
}

export default ArticleBottomBtns;