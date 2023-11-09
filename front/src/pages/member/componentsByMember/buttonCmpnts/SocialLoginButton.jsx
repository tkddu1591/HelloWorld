import React from "react";
// core components
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGoogle, faLine} from '@fortawesome/free-brands-svg-icons';
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function SocialLoginButton() {
    return (
        <>
            <div style={{float: "right"}}>
                <Link to={"/oauth/github"}>
                    <FontAwesomeIcon icon={faGithub}
                                     style={{marginLeft: "5px"}}
                                     size="2xl" />
                </Link>
                <Link to={"/oauth/google"}>
                    <FontAwesomeIcon icon={faGoogle}
                                     style={{marginLeft: "5px", color: "#e95858"}}
                                     size="2xl" />
                </Link>
                <Link to={"/oauth/kakao"}>
                    <FontAwesomeIcon icon={faComment}
                                     style={{marginLeft: "5px", color: "#fedc34"}}
                                     size="2xl" />
                </Link>
                <Link to={"/oauth/naver"}>
                    <FontAwesomeIcon icon={faLine}
                                     style={{marginLeft: "5px", color: "#33eb00",}}
                                     size="2xl" />
                </Link>
            </div>
        </>
    );
}
export default SocialLoginButton;