import Select from "react-select";
import React, {useState} from "react";

interface SelectBoxProps {
    options: any[];
    placeholder?: string;
    isMulti?: boolean; // isMulti를 선택적으로 설정
    value?: number|string;
}

function SelectBox({ options, placeholder, isMulti = false , value}: SelectBoxProps) {
    const [selectedOption, setSelectedOption]:any = useState(value);
    console.log(selectedOption)
    return <div className="App">
        <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={placeholder}
            isMulti={isMulti}
        />
    </div>
}

export default SelectBox
