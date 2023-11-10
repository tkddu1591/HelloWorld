import React, { useState } from 'react';
import './../../../css/community/list.css';
import { useNavigate } from 'react-router-dom';

function ContentList() {
    let navigate = useNavigate();
    return (<>
        <div className='main-area' style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ul className={'article'}>
                <li>
                    <a className={'board_name'}>자유게시판</a>
                    <div className={'card_area'}>
                        <div className={'con'}>
                            <div className={'con_top'}>
                                <div className={'tit_area'}>
                                    <a className={'tit'} onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                <span className={'inner'}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={'txt'} onClick={() => {
                                    navigate('/community/view');
                                }}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={'con_bottom'}>
                                <div className={'user_info'}>
                                    <div className={'pers_nick_area'}>
                                        <table role={'presentation'} cellSpacing={'0'}>
                                            <tbody>
                                            <tr>
                                                <td className={'p-nick'}>
                                                    <a className={'m-tcol-c'}>닉네임임</a>
                                                    <span className={'mem-level'}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={'text/javascript'}>wordBreak($(""));</script>
                                    <div className={'date_num'}>
                                        <span className={'date'}>23.10.19. 13:59</span>
                                        <span className={'num'}>조회 510</span>
                                        <div className={'like_area'}>
                                            <div className={'comment_area'}>
                                                <span className={'comment_ico'}>댓글</span>
                                                <em className={'num'}>11</em>
                                            </div>
                                            <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>0</em>
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
                                <img src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`} width={'120px'}
                                     height={'120px'}
                                     alt={'썸네일'}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={'board_name'}>자유게시판</a>
                    <div className={'card_area'}>
                        <div className={'con'}>
                            <div className={'con_top'}>
                                <div className={'tit_area'}>
                                    <a className={'tit'} onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                <span className={'inner'}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={'txt'} onClick={() => {
                                    navigate('/community/view');
                                }}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={'con_bottom'}>
                                <div className={'user_info'}>
                                    <div className={'pers_nick_area'}>
                                        <table role={'presentation'} cellSpacing={'0'}>
                                            <tbody>
                                            <tr>
                                                <td className={'p-nick'}>
                                                    <a className={'m-tcol-c'}>닉네임임</a>
                                                    <span className={'mem-level'}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={'text/javascript'}>wordBreak($(""));</script>
                                    <div className={'date_num'}>
                                        <span className={'date'}>23.10.19. 13:59</span>
                                        <span className={'num'}>조회 510</span>
                                        <div className={'like_area'}>
                                            <div className={'comment_area'}>
                                                <span className={'comment_ico'}>댓글</span>
                                                <em className={'num'}>11</em>
                                            </div>
                                            <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>0</em>
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
                                <img src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`} width={'120px'}
                                     height={'120px'}
                                     alt={'썸네일'}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={'board_name'}>자유게시판</a>
                    <div className={'card_area'}>
                        <div className={'con'}>
                            <div className={'con_top'}>
                                <div className={'tit_area'}>
                                    <a className={'tit'} onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                <span className={'inner'}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={'txt'} onClick={() => {
                                    navigate('/community/view');
                                }}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={'con_bottom'}>
                                <div className={'user_info'}>
                                    <div className={'pers_nick_area'}>
                                        <table role={'presentation'} cellSpacing={'0'}>
                                            <tbody>
                                            <tr>
                                                <td className={'p-nick'}>
                                                    <a className={'m-tcol-c'}>닉네임임</a>
                                                    <span className={'mem-level'}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={'text/javascript'}>wordBreak($(""));</script>
                                    <div className={'date_num'}>
                                        <span className={'date'}>23.10.19. 13:59</span>
                                        <span className={'num'}>조회 510</span>
                                        <div className={'like_area'}>
                                            <div className={'comment_area'}>
                                                <span className={'comment_ico'}>댓글</span>
                                                <em className={'num'}>11</em>
                                            </div>
                                            <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>0</em>
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
                                <img src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`} width={'120px'}
                                     height={'120px'}
                                     alt={'썸네일'}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={'board_name'}>자유게시판</a>
                    <div className={'card_area'}>
                        <div className={'con'}>
                            <div className={'con_top'}>
                                <div className={'tit_area'}>
                                    <a className={'tit'} onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                <span className={'inner'}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={'txt'} onClick={() => {
                                    navigate('/community/view');
                                }}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={'con_bottom'}>
                                <div className={'user_info'}>
                                    <div className={'pers_nick_area'}>
                                        <table role={'presentation'} cellSpacing={'0'}>
                                            <tbody>
                                            <tr>
                                                <td className={'p-nick'}>
                                                    <a className={'m-tcol-c'}>닉네임임</a>
                                                    <span className={'mem-level'}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={'text/javascript'}>wordBreak($(""));</script>
                                    <div className={'date_num'}>
                                        <span className={'date'}>23.10.19. 13:59</span>
                                        <span className={'num'}>조회 510</span>
                                        <div className={'like_area'}>
                                            <div className={'comment_area'}>
                                                <span className={'comment_ico'}>댓글</span>
                                                <em className={'num'}>11</em>
                                            </div>
                                            <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>0</em>
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
                                <img src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`} width={'120px'}
                                     height={'120px'}
                                     alt={'썸네일'}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={'board_name'}>자유게시판</a>
                    <div className={'card_area'}>
                        <div className={'con'}>
                            <div className={'con_top'}>
                                <div className={'tit_area'}>
                                    <a className={'tit'} onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                <span className={'inner'}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={'txt'} onClick={() => {
                                    navigate('/community/view');
                                }}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={'con_bottom'}>
                                <div className={'user_info'}>
                                    <div className={'pers_nick_area'}>
                                        <table role={'presentation'} cellSpacing={'0'}>
                                            <tbody>
                                            <tr>
                                                <td className={'p-nick'}>
                                                    <a className={'m-tcol-c'}>닉네임임</a>
                                                    <span className={'mem-level'}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={'text/javascript'}>wordBreak($(""));</script>
                                    <div className={'date_num'}>
                                        <span className={'date'}>23.10.19. 13:59</span>
                                        <span className={'num'}>조회 510</span>
                                        <div className={'like_area'}>
                                            <div className={'comment_area'}>
                                                <span className={'comment_ico'}>댓글</span>
                                                <em className={'num'}>11</em>
                                            </div>
                                            <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>0</em>
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
                                <img src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`} width={'120px'}
                                     height={'120px'}
                                     alt={'썸네일'}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <a className={'board_name'}>자유게시판</a>
                    <div className={'card_area'}>
                        <div className={'con'}>
                            <div className={'con_top'}>
                                <div className={'tit_area'}>
                                    <a className={'tit'} onClick={() => {
                                        navigate('/community/view');
                                    }}>
                                <span className={'inner'}>
                                    <strong>제목 0000000000000000000000000</strong>
                                </span>
                                    </a>
                                </div>
                                <a className={'txt'} onClick={() => {
                                    navigate('/community/view');
                                }}>
                                    내용 0000000000000000000000000000000
                                </a>
                            </div>
                            <div className={'con_bottom'}>
                                <div className={'user_info'}>
                                    <div className={'pers_nick_area'}>
                                        <table role={'presentation'} cellSpacing={'0'}>
                                            <tbody>
                                            <tr>
                                                <td className={'p-nick'}>
                                                    <a className={'m-tcol-c'}>닉네임임</a>
                                                    <span className={'mem-level'}></span>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <script type={'text/javascript'}>wordBreak($(""));</script>
                                    <div className={'date_num'}>
                                        <span className={'date'}>23.10.19. 13:59</span>
                                        <span className={'num'}>조회 510</span>
                                        <div className={'like_area'}>
                                            <div className={'comment_area'}>
                                                <span className={'comment_ico'}>댓글</span>
                                                <em className={'num'}>11</em>
                                            </div>
                                            <div className={'u_likeit_list_module'}>
                                        <span className={'u_likeit_list_btn off'}>
                                            <span className={'u_ico'}>
                                                <img src={'#'} width={'16'} height={'16'} />
                                            </span>
                                            <em className={'u_cnt num-recomm'}>0</em>
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
                                <img src={`${process.env.PUBLIC_URL}/images/community/testimg.jpg`} width={'120px'}
                                     height={'120px'}
                                     alt={'썸네일'}>
                                </img>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>

        </div>
    </>);
}


export default ContentList;