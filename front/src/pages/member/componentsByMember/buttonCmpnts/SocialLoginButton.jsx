import React from "react";
// core components
import {Link} from "react-router-dom";
import GithubIcon from "../../../../components/Icon/GithubIcon";
import GoogleIcon from "../../../../components/Icon/GoogleIcon";
import KakaoIcon from "../../../../components/Icon/KakaoIcon";
import NaverIcon from "../../../../components/Icon/NaverIcon";

function SocialLoginButton() {
    return (
        <>
            <div style={{float: "right"}}>
                <Link to={"/oauth/github"}>
                    <GithubIcon />
                </Link>&nbsp;
                <Link to={"/oauth/google"}>
                    <GoogleIcon />
                </Link>&nbsp;
                <Link to={"/oauth/kakao"}>
                    <KakaoIcon />
                </Link>&nbsp;
                <Link to={"/oauth/naver"}>
                    <NaverIcon />
                </Link>
            </div>
        </>
    );
}
export default SocialLoginButton;