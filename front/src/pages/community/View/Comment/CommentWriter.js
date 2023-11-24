import React, {useEffect, useState} from 'react';
import '../../../../css/community/view.css';
import axios from "axios";
import {API_BASE_URL} from "../../../../App";

function CommentWriter({
                           communityNo,
                           insertComment,
                           commentWrite,
                           setCommentWrite,
                           setParentNo,
                           setReplyToComment,
                           replyToComment,
                           myInfo
                       }) {


    const [height, setHeight] = useState(17);
    const [row, setRow] = useState(1);
    let [text, setText] = useState('');

    const handleChange = (e) => {
        let inputText = e.target.value;
        setText(inputText);

        // 줄바꿈이 일어나면 row 1 증가
        if (inputText.includes('\n')) {
            console.log('\n');
            setRow((prevRow) => prevRow + 1);
        }
        // 최대 3000자로 제한
        if (inputText.length <= 3000) {
            setCommentWrite(inputText);
        }
    };

    useEffect(() => {
        console.log(text);
    }, [text]);


    return (<>
        <div data-v-afadf0bc className={'CommentWriter'}>
            <div className="comment_inbox">
                <strong className="blind">댓글을 입력하세요</strong>
                <em className={'comment_inbox_name'}>{myInfo.nick}</em>
                <textarea
                    value={text}
                    onChange={handleChange}
                    placeholder={'댓글을 남겨보세요'}
                    rows={row} //commentWrite.split('\n').length
                    className={'comment_inbox_text'}
                    style={{
                        overflow: 'hidden',
                        overflowWrap: 'break-word',
                        whiteSpace: 'pre-wrap',
                        height: `${height * row}px`,
                    }}></textarea>
                {text.length > 0 && (<div data-v-afadf0bc="" className="comment_inbox_number">
														<span data-v-afadf0bc="" className="blind">
															현재 입력한 글자수
														</span>
                    <strong data-v-afadf0bc="" className="inbox_count">
                        {text.length}
                    </strong>
                    <span data-v-afadf0bc="" className="blind">
															전체 입력 가능한 글자수
														</span>
                    <span data-v-afadf0bc="" className="inbox_total">
															3000
														</span>
                </div>)}
            </div>
            <div data-v-afadf0bc="" className="comment_attach">
                <div data-v-afadf0bc="" className="attach_box">
                    <label data-v-2ec5a274="" data-v-afadf0bc="" htmlFor="attach3" className="button_file">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-camera" viewBox="0 0 16 16">
                            <path
                                d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                            <path
                                d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                        <input
                            data-v-2ec5a274=""
                            id="attach3"
                            type="file"
                            title="사진첨부"
                            accept="image/*, image/heic"
                            className="blind"
                        />
                    </label>
                    <a data-v-afadf0bc="" href="#" role="button" className="button_sticker">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-emoji-smile" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path
                                d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                    </a>
                    {/*<!---->*/}
                </div>
                <div data-v-afadf0bc="" className="register_box">
                    {/*<!---->*/}
                    {(<a data-v-afadf0bc="" role="button" className="button btn_cancle" onClick={() => {
                        setReplyToComment(null)
                    }}>
                        취소
                    </a>)}
                    <a data-v-afadf0bc="" role="button" className="button btn_register is_active"
                       onClick={() => {
                           setParentNo(0);
                           setCommentWrite(text);
                           insertComment();
                           setReplyToComment(null);
                           setText('');

                       }}>
                        등록
                    </a>
                </div>
            </div>
        </div>
    </>)
}


export default CommentWriter;