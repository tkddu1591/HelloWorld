import UserPopup from "./UserPopup";
import Star from "./Star";
import React from "react";

function ReviewList({popup, setPopup}) {
    let popupSetting: {
        top?: number,
        marginRight?: number,
        marginLeft?: number
    } = {
        top: 20,
        marginLeft: 0,
        marginRight: 50
    }
    return <>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: '12px',
            borderBottom: '1px solid lightgray',
            paddingBottom: '10px',
            position: 'relative'
        }}>
            <div style={{width: '10%', marginTop: '5px'}}><i className="bi bi-person-circle"
                                                             style={{fontSize: '40px'}}></i></div>
            <div style={{width: '90%', marginLeft: '5px'}}>
                {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                <p style={{fontSize: '12px', color: 'gray', margin: 0}}
                ><span style={{cursor: "pointer"}} onClick={() => {
                    setPopup('user')
                }}>사용자</span> / 2023-10-10 18:26</p>
                <p style={{fontSize: '15px', marginBottom: '10px'}}>너무 좋아요</p>
                <div><Star score={4} size={15}></Star></div>
                <div><span>어쩌구 저쩌구</span></div>
            </div>
        </div>
    </>
}

export default ReviewList