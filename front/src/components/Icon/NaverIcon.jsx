import React from "react";
import {ReactComponent as NaverLogo} from "assets/icons/btn_naver.svg";
function NaverIcon(props) {
    const width = props.size || "28px";
    const height= props.size || "28px"
    return (
        <NaverLogo style={{width:width, height:height}}/>
    )
}
export default NaverIcon;