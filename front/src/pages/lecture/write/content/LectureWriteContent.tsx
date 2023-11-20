import React, {useState} from "react";
import LectureDetailAside from "../../detail/aside/LectureDetailAside";
import LectureDetailPlayer from "../../detail/LectureDetailPlayer";
import Subhead from "../../../../Subhead";
import LectureWriteAside from "./aside/LectureWriteAside";
import '../../scss/lecture/write/write.scss'
import EditorToolbar, {formats, modules} from "../../../community/EditorToolBar";
import ReactQuill from "react-quill";
import {Button, Container, Row} from "reactstrap";
import {useNavigate} from "react-router-dom";

function LectureWriteContent() {
    let [timeCheck, setTimeCheck] = useState([{
        time:  240,
        title: " 설치 (맥/윈도우)"
    }, {
        time:  300,
        title: "git 설치 (맥/윈도우)"
    }]);

    const [state, setState] = React.useState({value: null});
    const handleChange = value => {
        setState({value});
    };

    let navigate = useNavigate()




    return <>
        <LectureWriteAside></LectureWriteAside>
        <div style={{width: '100%', height: '100%', zIndex: 0, position: 'relative'}} className={'detailContent'}>
            <div style={{
                position: 'absolute', padding: '80px', paddingTop: 0, width: '100%', height: '100%', marginTop: '100px'
            }}>
                <h3>강의 등록</h3>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p>② 컨텐츠</p>
                    <span>파트명 &gt; 컨텐츠 명</span>
                </div>
                <div className="text-editor" style={{marginTop: '30px'}}>
                    <EditorToolbar/>
                    <ReactQuill
                        style={{maxHeight: "auto", height: 'auto'}}
                        theme="snow"
                        value={state.value === null ? "" : state.value}
                        onChange={handleChange}
                        placeholder={"내용을 입력해주세요."}
                        modules={modules}
                        formats={formats}
                    /></div>

                <div style={{display: "flex", justifyContent: "right"}}>
                    <Button color={'info'} onClick={() => {
                        navigate('/lecture/write/content')
                    }}>저장</Button>
                </div>
            </div>
        </div>
    </>

}


export default LectureWriteContent