import Select from 'react-select';
import React, { useState } from 'react';

interface SelectBoxProps {
    options: any[];
    placeholder?: string;
    isMulti?: boolean; // isMulti를 선택적으로 설정
    value?: { value: number | string; label: string };
    isSearchable?: boolean;
}

function SelectBox({ options, placeholder, isMulti = false, value, isSearchable = true }: SelectBoxProps) {
    const [selectedOption, setSelectedOption]: any = useState(value);
    return (
        <div className="App">
            <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={placeholder}
                isMulti={isMulti}
                isSearchable={isSearchable}
            />
        </div>
    );
}

export default SelectBox
