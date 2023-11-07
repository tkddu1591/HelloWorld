import React, {useState} from "react";

// core components
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faGoogle, faLine} from '@fortawesome/free-brands-svg-icons';
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";

/*default, warning, success*/
function SubmitButton({ status, text }) {
    const [isStatus, setStatus] = useState(status);
    const [isText, setText] = useState(text);
    return (
        <>
            <Button color={isStatus} style={{marginLeft: "60%", width: "40%"}}>
                {isText}
            </Button>
        </>
    );
}

export default SubmitButton;
