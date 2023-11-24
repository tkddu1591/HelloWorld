import {useNavigate} from 'react-router-dom';
import {MouseEventHandler} from 'react';
import axios from "axios";
import {API_BASE_URL} from "../../App";

interface UserPopupProps {
    popupSetting: {
        top?: number;
        marginRight?: number;
        marginLeft?: number;
        lastData?: string;
        lastAction?: string;
        width?: number;
        left?: number;
        right?: number;
        bottom?: number;
        isPopup?: boolean;
        axiosData?: any;
        condition: {
            data: string;
            axiosData?: any,
            action: string;
            newWindow?: boolean;
            type?: string
        }[];
    }
    setCommentsList?: (data: any) => void;
    setCommentReply?: (data: any) => void;
    setRefreshTrigger?: (data: any) => void;
    communityNo?: any,
    commentType?: any

}

function UserPopup({popupSetting, setCommentsList, setCommentReply, communityNo, commentType, setRefreshTrigger}: UserPopupProps, {}) {
    let navigate = useNavigate();

    console.log(popupSetting);

    function handleClick(item): MouseEventHandler<HTMLSpanElement> {
        return event => {
            if (item.newWindow) window.open(item.action, '_blank', 'width=400,height=600');
            else navigate(item.action);
        };
    }

    function handleClickAxios(item) {
        console.log(API_BASE_URL + item.action);
        console.log('axiosData: ' + popupSetting.axiosData);
        axios.post(API_BASE_URL + item.action, {commentNo: popupSetting.axiosData, communityNo: communityNo, commentType: commentType})
            .then((res) => {
                console.log('action 성공')
                setRefreshTrigger?.(true);
                setCommentsList?.(res.data.commentsList.filter(comment => comment.parentNo === 0));
                setCommentReply?.(res.data.commentsList.filter(comment => comment.parentNo != 0));
            }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <>
            <div
                style={{
                    width: popupSetting.width ? popupSetting.width + 'px' : '',
                    position: 'absolute',
                    top: popupSetting.top + 'px',
                    left: popupSetting.left ? popupSetting.left + 'px' : '',
                    right: popupSetting.right ? popupSetting.right + 'px' : '',
                    bottom: popupSetting.bottom ? popupSetting.bottom + 'px' : '',
                    border: '1px solid lightgray',
                    marginRight: popupSetting.marginRight + 'px',
                    marginLeft: popupSetting.marginLeft + 'px',
                    borderRadius: '2px',
                    height: '30px',
                    padding: '5px',
                    backgroundColor: '#Fafafa',
                    fontSize: '13px',
                    zIndex: '99999999999999999',
                    color: 'black',
                }}>
                {popupSetting.condition.map((item, index) => {
                    console.log(item)
                    return (
                        <span
                            key={item.data}
                            onClick={() => item?.type === 'axios' && popupSetting.axiosData ? handleClickAxios(item) : handleClick(item)}
                            style={{
                                paddingLeft: '5px',
                                cursor: 'pointer',
                                paddingRight: '5px',
                                borderLeft: index !== 0 ? '1px solid black' : 'none',
                                fontSize: '13px',
                                paddingTop: '0px',
                                fontStyle: 'normal',
                            }}>
							{item.data}
						</span>
                    );
                })}
            </div>
        </>
    );
}

export default UserPopup;
