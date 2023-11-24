import React from "react";
import {ReactComponent as Loading} from "assets/icons/loading.svg";
function LoadingIcon(props) {
    const width = props.size || "70px";
    const height= props.size || "70px"
    return (
        <Loading style={{width:width, height:height}}/>
    )
}
export default LoadingIcon;