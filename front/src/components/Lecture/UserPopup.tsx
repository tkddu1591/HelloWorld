import React from "react";

interface UserPopupProps {
    popupSetting: {
        top?: number,
        marginRight?: number,
        marginLeft?: number
    }
}

function UserPopup({popupSetting}:UserPopupProps) {
    return <>
        <div
            style={{
                position: 'absolute',
                top: (popupSetting.top + 'px'),
                border: '1px solid lightgray',
                marginRight: (popupSetting.marginRight + 'px'),
                marginLeft: (popupSetting.marginLeft + 'px'),
                borderRadius: '2px',
                height: '30px',
                padding: '5px',
                backgroundColor: '#Fafafa'
            }}>
            <span style={{paddingLeft: '5px', cursor: "pointer", paddingRight: '5px',}}>신고</span>
            <span
                style={{paddingLeft: '5px', cursor: "pointer", paddingRight: '5px', borderLeft: '1px solid black'}}>차단</span>
            <span
                style={{paddingLeft: '5px', cursor: "pointer", paddingRight: '5px', borderLeft: '1px solid black'}}>대화</span>
        </div>
    </>
}
export default UserPopup