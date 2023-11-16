// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faCircleQuestion} from "@fortawesome/free-solid-svg-icons";

function InputField({ emailIcon, emailIconColor }) {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={emailIcon} style={{color: emailIconColor}}/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder='이메일 인증번호 입력'
                    type='text'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
            </InputGroup>
        </>
    );
}

export default InputField;