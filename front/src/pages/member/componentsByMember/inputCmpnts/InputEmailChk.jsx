// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {changeDTO} from "../../../../store/changeDTO";

function InputField({ emailIcon, emailIconColor, setInputValue }) {
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
                    name='emailChk'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(e) => {
                        changeDTO(setInputValue, 'emailChk', e.target.value);
                    }}
                />
            </InputGroup>
        </>
    );
}

export default InputField;
