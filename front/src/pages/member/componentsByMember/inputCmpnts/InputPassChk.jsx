// InputField.jsx
import React, {useEffect, useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faLock} from "@fortawesome/free-solid-svg-icons";
import {changeDTO} from "../../../../store/changeDTO";
import {isOkPasswordHandler} from "../../../../utils/member/signupValidation";

function InputPassChk({ setIsOk, inputValue, setInputValue }) {
    const [isFocus, setIsFocus] = useState(false);
    useEffect(() => {
        isOkPasswordHandler(setIsOk, inputValue);
    }, [inputValue.pass, inputValue.passChk]);

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
                    name='passChk'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(e) => {
                        changeDTO(setInputValue, 'passChk', e.target.value);
                        isOkPasswordHandler(setIsOk, inputValue);
                    }}
                />
            </InputGroup>
        </>
    );
}

export default InputPassChk;
