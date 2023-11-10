import React from 'react';
import '../../../../css/community/view.css';

function CommentOption(){
    return (<>
        <div className={'comment_option'}>
            <h3 className={'comment_title'}>댓글</h3>
            <div className="comment_tab">
                <ul className="comment_tab_list">
                    <li className="comment_tab_item">
                        <a href="#" role="button" aria-selected="true" className="comment_tab_button">
                            {' '}
                            등록순{' '}
                        </a>
                    </li>
                    <li className="comment_tab_item">
                        <a href="#" role="button" aria-selected="false" className="comment_tab_button">
                            {' '}
                            최신순{' '}
                        </a>
                    </li>
                </ul>
                <button type="button" className="comment_refresh_button">
                    <span className="blind">새로고침</span>
                </button>
            </div>
        </div>
    </>)
}


export default CommentOption;