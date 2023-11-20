import {Button, Col, Container, Row} from "reactstrap";
import '../../scss/lecture/write/write.scss'
import SelectBox from "../../../../components/Lecture/SelectBox";
import React, {useState} from "react";
import EditorToolbar, {formats, modules} from "../../../community/EditorToolBar";
import ReactQuill from "react-quill";
import {useNavigate} from "react-router-dom";
import {FileUploader} from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function LectureWriteMain() {

    let navigate = useNavigate()
    const [file, setFile] = useState(null);
    const handleChangeFile = (file) => {
        setFile(file);
    };
    const [tagSort, setTagSort] = useState(
        {
            placeholder:  '태그 선택',
            list:         [
                {value: '1', label: 'java'},
                {value: '2', label: 'node.js'},
                {value: '3', label: 'react'},
                {value: '4', label: 'next'},
                {value: '5', label: 'python'},
            ],
            isSearchable: true,
            isMulti:      true,
        }
    );
    const [levelSort, SetlevelSort] = useState(
        {
            placeholder:  '레벨 선택',
            list:         [
                {value: '0', label: '입문'},
                {value: '1', label: '초급'},
                {value: '2', label: '중급'},
                {value: '3', label: '고급'},
            ],
            isSearchable: false,
            isMulti:      false,
        }
    );

    const [state, setState] = React.useState({value: null});
    const handleChange = value => {
        setState({value});
    };
    return <Container style={{marginTop: '100px'}}>
        <Row>
            <Col className={'lectureWrite'}>
                <h3>강의 등록</h3>
                <p>① 메인</p>
            </Col>
        </Row>
        <Row style={{marginTop: '20px'}}>

            <Col md={6}>
                <SelectBox options={tagSort.list} isMulti={tagSort.isMulti}
                           placeholder={tagSort.placeholder} isSearchable={tagSort.isSearchable}></SelectBox>
            </Col>
            <Col md={6}>
                <SelectBox options={levelSort.list}
                           placeholder={levelSort.placeholder} isSearchable={levelSort.isSearchable}></SelectBox>
            </Col>
        </Row>
        <Row>
            <Col style={{marginTop: '20px'}} className={'filebox'}>{
                /*                <div className={'filebox'}>
                                    <input className="upload-name" value="썸네일" placeholder="썸네일"/>
                                    <label htmlFor="file" style={{marginTop: '10px'}}>파일찾기</label>
                                    <input type="file" id="file"/>
                                </div>*/}
                <FileUploader handleChange={handleChangeFile} name="file" types={fileTypes} label={'썸네일 이미지를 올려주세요'}/>
            </Col>
        </Row>
        <Row>
            <Col style={{marginTop: '20px'}}>

                <div className="text-editor">
                    <EditorToolbar/>
                    <ReactQuill
                        style={{height: "600px"}}
                        theme="snow"
                        value={state.value === null ? "" : state.value}
                        onChange={handleChange}
                        placeholder={"내용을 입력해주세요."}
                        modules={modules}
                        formats={formats}
                    />
                </div>
            </Col>
        </Row>
        <Row>
            <Col style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
                <Button color={'info'} onClick={() => {
                    navigate(-1)
                }}>이전</Button>
                <Button color={'info'} onClick={() => {
                    navigate('/lecture/write/content')
                }}>다음</Button>
            </Col>
        </Row>
    </Container>
}

export default LectureWriteMain