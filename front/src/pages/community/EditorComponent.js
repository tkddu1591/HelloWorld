import React, {useRef, useState} from "react";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import "./../../css/community/quillstyle.css";



function MyComponent() {
    const [value, setValue] = useState('');
    console.log(value);
    const quillRef = useRef(null);
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            ["clean"],
        ],
    };

    const formats = [
        "font",
        "size",
        "header",
        "color",
        "background",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
    ];
    return (
        <Row>
            <Col lg="12">
        {/*<ReactQuill theme="snow" value={value} onChange={setValue}  style={{marginTop:"100px", marginBottom:"100px"}}/>*/}
                <ReactQuill
                    style={{ height: "800px", margin: "4px",marginTop:"100px", marginBottom:"100px"}}
                    ref={quillRef}
                    theme="snow"
                    value={value}
                    modules={modules}
                    formats={formats}
                    onChange={setValue}
                    placeholder="내용을 입력하세요."
                />
                {/*<button onClick={onClickSave}>저장</button>*/}
            </Col>
        </Row>
    );
}


export default MyComponent;