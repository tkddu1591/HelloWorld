import React, {useState} from "react";
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import Form from 'react-bootstrap/Form';
import "./../../css/community/write.css";
import MyComponent from "./EditorComponent";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";


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
        <div className="write" >
            <div className="WritingHeader" style={{marginTop: "70px"}}>
                <h2 className={"title"}>글쓰기</h2>
                <div className="tool_area">
                    <div className="temp_save_area" >
                        <button type="button" className="btn_temp_save" > 임시등록 </button>
                        <button type="button" className="btn_temp_count"> 0 </button>
                    </div>
                    <a className="BaseButton BaseButton--skinGreen size_default" style={{background:"lightskyblue"}}>
                        {/*<Button variant="primary" style={{background:"#2CA8FF"}}>등록</Button>*/}
                        <span className={"BaseButton__txt"} style={{color:"darkslateblue"}}>등록</span>
                    </a>

                </div>
            </div>
            <SearchBar selectedSearch={selectedSearch} setSelectedSearch={setSelectedSearch}
                       searchSelect={searchSelect}
                       selectedOption={selectedOption}
                       setSelectedOption={setSelectedOption}
                       options={options}></SearchBar>
            <MyComponent></MyComponent>

        </div>
            </Container>
    </>
)
}

function SearchBar(props) {
    return (<>
        <div className="search_area"
             style={{marginTop: "10px", minWidth: "160px"}}>
            <Row style={{marginBottom:"10px"}}>
                <Col lg="2">
                    <Select
                        onChange={props.setSelectedSearch}
                        options={props.searchSelect}
                        defaultValue={props.searchSelect[0]}
                        isMulti={false}
                        maxMenuHeight={"300px"}
                        readonly={true}
                        isSearchable={false}
                    />
                </Col>
                <Col lg="10">
                        <Input
                            style={{border: '1px solid black', height:"38px", maxWidth: '100%', display: 'inline-block', borderRadius: "5px", borderColor: "hsl(0, 0%, 70%)"}}
                            defaultValue=""
                            placeholder="제목을 입력해 주세요."
                            type="text"
                        ></Input>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <div style={{marginBottom: "15px"}}>
                        <Select
                            value={props.selectedOption}
                            onChange={props.setSelectedOption}
                            options={props.options}
                            placeholder={"태그를 검색해 주세요."}
                            isMulti={true}
                            maxMenuHeight={"300px"}
                            length={3}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </>)
}

export default CommunityWrite;