// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAt, faUser} from "@fortawesome/free-solid-svg-icons";
import {changeDTO} from "../../../../store/changeDTO";

function InputName({ setInputValue }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={faUser} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder='이름 입력'
                    type='text'
                    name='name'
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(e) => {
                        changeDTO(setInputValue, 'name', e.target.value);
                    }}
                />

            </InputGroup>
        </>
    );
}

export default InputName;
