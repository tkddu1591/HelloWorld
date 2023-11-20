// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons";
import {changeDTO} from "../../../../store/changeDTO";

function InputField({ setInputValue }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faAt} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder='이메일 입력'
                    type='text'
                    name='email'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(e) => {
                        changeDTO(setInputValue, 'email', e.target.value);
                    }}
                />

            </InputGroup>
        </>
    );
}

export default InputField;
