// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faLock} from "@fortawesome/free-solid-svg-icons";

function InputField() {
    const [isFocus, setIsFocus] = useState(false);
    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faLock} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder='비밀번호 확인'
                    type='password'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
            </InputGroup>
        </>
    );
}

export default InputField;
