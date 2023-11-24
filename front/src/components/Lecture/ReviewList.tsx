import UserPopup from './UserPopup';
import Star from './Star';
import React from 'react';

interface ReviewListProps {
    popup: string;
    setPopup: React.Dispatch<React.SetStateAction<string>>;
    setPageRequest: React.Dispatch<React.SetStateAction<any>>;
    pageResponse: any;
}

function ReviewList({popup, setPopup, setPageRequest, pageResponse}: ReviewListProps) {
    let popupSetting = {
        top:         20,
        marginLeft:  0,
        marginRight: 50,
        isPopup:     true,
        condition:   [
            {
                data:   '신고',
                action: '/member/report',
            },
            {
                data:   '차단',
                action: '/member/block',
            },
            {
                data:      '대화',
                action:    '/dm/chat/1',
                newWindow: true,
            },
        ],
    };
    return <>
        {pageResponse?.list.map((item) => {
            return <div key={item.reviewNo}
                        style={{
                            display:        'flex',
                            justifyContent: 'space-between',
                            marginTop:      '12px',
                            borderBottom:   '1px solid lightgray',
                            paddingBottom:  '10px',
                            position:       'relative',
                        }}>
                <div style={{width: '10%', marginTop: '5px'}}>
                    <i className="bi bi-person-circle" style={{fontSize: '40px'}}></i>
                </div>
                <div style={{width: '90%', marginLeft: '5px'}}>
                    {popup === 'user'+item.reviewNo && <UserPopup popupSetting={popupSetting}></UserPopup>}
                    <p style={{fontSize: '12px', color: 'gray', margin: 0}}>
						<span
                            style={{cursor: 'pointer'}}
                            onClick={() => {
                                setPopup('user'+item.reviewNo);
                            }}>
							{item.nick}
						</span>{' '}
                        / {item.regDate.substring(0, 10)+ " "+ item.regDate.substring(11, 19)}
                    </p>
                    <p style={{fontSize: '15px', marginBottom: '10px'}}>{item.title}</p>
                    <div>
                        <Star score={item.score} size={15}></Star>
                    </div>
                    <div>
                        <span>{item.content}</span>
                    </div>
                </div>
            </div>
        })}
    </>
}

export default ReviewList;
