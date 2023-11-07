import React from "react";

// core components
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGoogle, faLine} from '@fortawesome/free-brands-svg-icons';
import {faComment} from "@fortawesome/free-solid-svg-icons";

function SocialLogin() {
    return (
        <>
            <div style={{float: "right"}}>
                <FontAwesomeIcon icon={faGithub}  style={{marginLeft: "5px"}}                    size="2xl" />
                <FontAwesomeIcon icon={faGoogle}  style={{marginLeft: "5px", color: "#e95858"}}  size="2xl" />
                <FontAwesomeIcon icon={faComment} style={{marginLeft: "5px", color: "#fedc34"}}  size="2xl" />
                <FontAwesomeIcon icon={faLine}    style={{marginLeft: "5px", color: "#33eb00",}} size="2xl" />
            </div>
        </>
    );
}

export default SocialLogin;
