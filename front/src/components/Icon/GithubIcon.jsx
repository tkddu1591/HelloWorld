import React from "react";
import {ReactComponent as GithubLogo} from "assets/icons/github_logo.svg";
function GithubIcon(props) {
    const width = props.width  || "28px";
    const height= props.height || "28px"
    return (
        <GithubLogo style={{width:width, height:height}}/>
    )
}
export default GithubIcon;