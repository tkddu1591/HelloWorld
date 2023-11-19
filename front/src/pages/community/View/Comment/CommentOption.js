import React from 'react';
import '../../../../css/community/view.css';
import axios from "axios";
import {API_BASE_URL} from "../../../../App";

function CommentOption({buttonStatus, setButtonStatus, setCommentType, setCommentsList, communityNo, commentType}) {

    const btnClick = (isOldestTab) => {
        if (isOldestTab !== buttonStatus) {
            setButtonStatus(isOldestTab);
            // 최신순이면 'Desc', 등록순이면 'Asc'
            setCommentType(isOldestTab ? 'Asc': 'Desc');
        }
    };

    const commentRefresh = () => {
        console.log('communityNo : '+communityNo);
        axios.get(`${API_BASE_URL}/community/comment`,{
        params: {
            communityNo : communityNo,
            commentType : commentType
        }
        })
            .then(res => {
                console.log('refresh success');
                setCommentsList(res.data.commentsList.filter(comment => comment.parentNo === 0));
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return (
        <div className={'comment_option'}>
            <h3 className={'comment_title'}>댓글</h3>
            <div className="comment_tab">
                <ul className="comment_tab_list">
                    <li className="comment_tab_item">
                        <a
                            role="button"
                            aria-selected={buttonStatus}
                            className="comment_tab_button"
                            onClick={() => {
                                btnClick(true);
                            }}>
                            {' '}
                            등록순{' '}
                        </a>
                    </li>
                    <li className="comment_tab_item">
                        <a
                            role="button"
                            aria-selected={!buttonStatus}
                            className="comment_tab_button"
                            onClick={() => {
                                btnClick(false);
                            }}>
                            {' '}
                            최신순{' '}
                        </a>
                    </li>
                </ul>
                <button type="button" className="comment_refresh_button" onClick={()=>{
                    commentRefresh();
                }}>
                    <span className="blind">새로고침</span>
                </button>
            </div>
        </div>
    );
}


export default CommentOption;