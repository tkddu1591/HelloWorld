// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import {changeDTO} from "../../../../store/changeDTO";

function InputHp({ setInputValue }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faSquarePhone} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder='전화번호 입력'
                    type='text'
                    name='hp'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(e) => {
                        changeDTO(setInputValue, 'hp', e.target.value);
                    }}
                />

            </InputGroup>
        </>
    );
}

export default InputHp;
