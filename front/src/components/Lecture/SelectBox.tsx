import Select from 'react-select';
import React, {useEffect, useState} from 'react';
import {changeDTO} from "../../store/changeDTO";

interface SelectBoxProps {
    options: any[];
    placeholder?: string;
    isMulti?: boolean; // isMulti를 선택적으로 설정
    value?: { value: number | string; label: string } | { value: number | string; label: string; }[];
    isSearchable?: boolean;
    setSelect?: (value: any) => void;
    selectName?: string
}

function SelectBox({
                       options, placeholder, isMulti = false, value, isSearchable = true, setSelect, selectName
                   }: SelectBoxProps) {
    const [selectedOption, setSelectedOption] = useState<any>(value);
    useEffect(() => {
        if (selectedOption !== null && selectedOption !== undefined) {
            if (selectName && selectedOption) {
                if (Array.isArray(selectedOption) && selectedOption.length > 0) {
                    let list: (string | number)[] = []
                    selectedOption.map((option) => {
                        list.push(option.value)
                    })
                    changeDTO(setSelect, selectName, list);
                } else
                    changeDTO(setSelect, selectName, selectedOption?.value);
            } else if (Array.isArray(selectedOption) && selectedOption.length > 0) {
                setSelect?.(selectedOption.map(item => item.value));
            } else
                setSelect?.(selectedOption?.value);
        }
    }, [selectedOption]);
    useEffect(() => {
        if (value !== undefined) {
            if (typeof value === 'string' || typeof value === 'number'){
                setSelectedOption(options.filter(item => item.value === value));
            }
                setSelectedOption(value)
        }
    }, [value]);
    return (
        <div className="App">
            <Select
                value={selectedOption}
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
