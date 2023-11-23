// InputField.jsx
import React, {useState} from "react";
import {
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InputField({ type, placeholder, icon, color }) {
    const [isFocus, setIsFocus] = useState(false);

    return (
        <>
            <InputGroup className={isFocus ? "input-group-focus" : ""}>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <FontAwesomeIcon icon={icon} style={{color: color}}/>
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
