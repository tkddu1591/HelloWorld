import React, {useState} from "react";
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import "../../../css/community/write.css";
import MyComponent from "../EditorComponent";
import {useNavigate} from "react-router-dom";
import WriteHeader from "./WriteHeader";
import WriteTitleBar from "./WriteTitleBar";


const searchSelect = [
    {value: '0', label: '자유게시판'},
    {value: '1', label: '스터디'},
    {value: '2', label: 'Q&A'},
];

const options = [
    {value: 'java', label: 'Java'},
    {value: 'python', label: 'Python'},
    {value: 'c', label: 'C'},
    {value: 'c#', label: 'C#'},
    {value: 'c++', label: 'C++'},
    {value: 'Android', label: 'Android'},
    {value: 'react', label: 'React'},
    {value: 'vue', label: 'Vue'},
    {value: 'mysql', label: 'MySql'},
    {value: 'oracle', label: 'Oracle'},
    {value: 'flutter', label: 'Flutter'},
    {value: 'javascript', label: 'Javascript'},
    {value: 'django', label: 'Django'},
    {value: 'html', label: 'Html'},
    {value: 'css', label: 'Css'},
    {value: 'node.js', label: 'Node.js'}
];


function CommunityWrite() {
    const [selectedSearch, setSelectedSearch] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [value, setValue] = useState('');
    let navigate = useNavigate();
    return (<>
            <Container>
                <div className="write">
                    <WriteHeader></WriteHeader>
                    <WriteTitleBar selectedSearch={selectedSearch} setSelectedSearch={setSelectedSearch}
                                   searchSelect={searchSelect}
                                   selectedOption={selectedOption}
                                   setSelectedOption={setSelectedOption}
                                   options={options}></WriteTitleBar>
                    <MyComponent></MyComponent>
                </div>
            </Container>
        </>
    )
}


export default CommunityWrite;