import React, {useState} from "react";
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import Form from 'react-bootstrap/Form';
import "./../../css/community/write.css";
import MyComponent from "./EditorComponent";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";


const searchSelect = [
    {value: '0', label: '게시글 + 댓글'},
    {value: '1', label: '제목만'},
    {value: '2', label: '글작성자'},
    {value: '3', label: '댓글내용'},
    {value: '4', label: '댓글작성자'}
];


function CommunityWrite() {
    const [selectedSearch, setSelectedSearch] = useState(null);
    const [value, setValue] = useState('');
    let navigate = useNavigate();
    return (<>
            <Container>
        <div className="write">
            <MyComponent></MyComponent>
            <Button variant="primary" style={{background:"#2CA8FF"}}>작성완료</Button>
        </div>
            </Container>
    </>
)
}

export default CommunityWrite;