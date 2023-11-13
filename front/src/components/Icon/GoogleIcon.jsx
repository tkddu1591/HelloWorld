import React from "react";
import {ReactComponent as GoogleLogo} from "assets/icons/btn_google.svg";
function GoogleIcon(props) {
    const width = props.size || "28px";
    const height= props.size || "28px"
    return (
        <GoogleLogo style={{width:width, height:height}}/>
    )
}
export default GoogleIcon;