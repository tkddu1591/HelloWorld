import React from "react";
// core components
import {Link} from "react-router-dom";
import GithubIcon from "../../../../components/Icon/GithubIcon";
import GoogleIcon from "../../../../components/Icon/GoogleIcon";
import KakaoIcon from "../../../../components/Icon/KakaoIcon";
import NaverIcon from "../../../../components/Icon/NaverIcon";
import {openKakaoLogin} from "../../../../service/kakaoAuthenticationService";
import {openNaverLogin} from "../../../../service/naverAuthenticationService";

function SocialLoginButton() {
    return (
        <>
            <div style={{float: "right"}}>
                <a href={"#"}>
                    <GithubIcon />
                </a>&nbsp;
                <a href={"#"}>
                    <GoogleIcon />
                </a>&nbsp;
                <a onClick={openKakaoLogin}>
                    <KakaoIcon />
                </a>&nbsp;
                <a onClick={openNaverLogin}>
                    <NaverIcon />
                </a>
            </div>
        </>
    );
}
export default SocialLoginButton;