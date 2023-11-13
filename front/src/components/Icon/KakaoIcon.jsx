import React from "react";
import {ReactComponent as KakaoLogo} from "assets/icons/btn_kakao.svg";
function KakaoIcon(props) {
    const width = props.size || "28px";
    const height= props.size || "28px"
    return (
        <KakaoLogo style={{width:width, height:height}}/>
    )
}
export default KakaoIcon;