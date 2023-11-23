import React, { useState } from 'react';
import './../../../css/community/list.css';
import { useNavigate } from 'react-router-dom';

function ContentList({data, sort}) {
    let navigate = useNavigate();
    return (<>
        <div className='main-area' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ul className={'article'}>
                {data.communityList.map(function(a, i){

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

                    return (<>
                        <li>
                            <a className={'board_name'}>{a.boardName}</a>
                            <div className={'card_area'}>
                                <div className={'con'}>
                                    <div className={'con_top'}>
                                        <div className={'tit_area'}>
                                            <a className={'tit'} onClick={() => {
                                                navigate(`/community/view?tab=${sort}&cate=${a.cateNo}&no=${a.communityNo}`);
                                            }}>
                                <span className={'inner'}>
                                    <strong>{a.title}</strong>
                                </span>
                                            </a>
                                        </div>
                                        <a className={'txt'} onClick={() => {
                                            navigate(`/community/view?tab=${sort}&cate=${a.cateNo}&no=${a.communityNo}`);
                                        }}>
                                            {a.content}
                                        </a>
                                    </div>
                                    <div className={'con_bottom'}>
                                        <div className={'user_info'}>
                                            <div className={'pers_nick_area'}>
                                                <table role={'presentation'} cellSpacing={'0'}>
                                                    <tbody>
                                                    <tr>
                                                        <td className={'p-nick'}>
                                                            <a className={'m-tcol-c'}>{a.nick}</a>
                                                            <span className={'mem-level'}></span>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <script type={'text/javascript'}>wordBreak($(""));</script>
                                            <div className={'date_num'}>
                                                <span className={'date'}>{formattedDate}</span>
                                                <span className={'num'}>조회 {a.hit}</span>
                                                <div className={'like_area'}>
                                                    <div className={'comment_area'}>
                                                        <span className={'comment_ico'}>댓글</span>
                                                        <em className={'num'}>{a.comAmount}</em>
                                                    </div>
                                                    <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>{a.likes}</em>
                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'movie-img'}>
                                    <a onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                        <img src={`/images/community/testimg.jpg`} width={'120px'}
                                             height={'120px'}
                                             alt={'썸네일'}>
                                        </img>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </>)
                })}
            </ul>

        </div>
    </>);
}


export default ContentList;