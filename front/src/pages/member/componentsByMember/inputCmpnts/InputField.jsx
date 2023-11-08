// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faLock, faAt, circle } from "@fortawesome/free-solid-svg-icons";

function InputField({ type, placeholder, icon }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={icon} />
                    </InputGroupText>
                </InputGroupAddon>
                <Input
                    placeholder={placeholder}
                    type={type}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                />
            </InputGroup>
        </>
    );
}

export default InputField;
