import React, {useState} from "react";
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function StatusText({ text }) {
    const [status, setStatus] = useState("grey")
    return (
        <>
            <div style={{textAlign: "center"}}>
                <FontAwesomeIcon icon={faCircleCheck} style={{color: status}} />
                &nbsp;이용약관에 동의합니다.
            </div>
        </>
    );
}

export default StatusText;
