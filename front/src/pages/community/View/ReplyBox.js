import React from 'react';
import '../../../css/community/view.css';

function ReplyBox({view}){
    return(<>
        <div className={'ReplyBox'}>
            <div className={'box_left'}>
                <div className={'like_article'}>
                    <div className={'ReactionLikeIt u_likeit_list_module'}>
                        <a
                            href="#"
                            data-isheddenlabel={'false'}
                            role={'button'}
                            data-type={'like'}
                            title={'이 글 좋아요 클릭'}
                            className={'like_no_u_list_btn _button odd'}
                            aria-pressed={'false'}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-heart"
                                viewBox="0 0 16 16"
                                style={{ color: 'red' }}>
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>
                            <em className={'u_txt _label'}>좋아요</em>
                            <em className={'u_cnt _count'}>16</em>
                        </a>
                    </div>
                    <a href={'#'} role={'button'} title={'좋아요한 멤버 리스트'} className={'button_like_list'}>
                        <span className={'blind'}>이 글을 '좋아요'한 멤버 리스트</span>
                    </a>
                </div>
                <a href={'#'} role={'button'} aria-pressed={'true'} className={'button_comment'}>
													<span className={'icon_area'}>
														<svg className={'svg-icon ico-post-comment-323232'}>
															<use xlinkHref={'#ico-post-comment-323232'} aria-hidden={'true'}></use>
														</svg>
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
													</span>
                    댓글
                    <strong className={'num'}>{view.comAmount}</strong>
                </a>
            </div>
            <div className={'box_right'}>
                <div className={'social_article'}>
                    <div className={'text_area'}>
                        <a id={'spiButton'} href={'#'}>
															<span className={'splugin-c social_text'}>
																<svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="16"
                                                                    height="16"
                                                                    fill="currentColor"
                                                                    className="bi bi-box-arrow-up"
                                                                    viewBox="0 0 16 16">
																	<path
                                                                        fill-rule="evenodd"
                                                                        d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"
                                                                    />
																	<path
                                                                        fill-rule="evenodd"
                                                                        d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"
                                                                    />
																</svg>
																공유
															</span>
                        </a>
                    </div>
                </div>
                <div className={'report_article'}>
                    <a href={'#'} className={'button_report'}>
                        신고
                    </a>
                </div>
            </div>
        </div>
    </>)
}

export default ReplyBox;