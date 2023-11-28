import React, {useState} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";

export const MyComponent = ({handleChange, content}) => {
    /*const [state, setState] = useState({ value: null });
    const handleChange = value => {
        setState({ value });
    };*/
    return (
        <div className="text-editor">
            <EditorToolbar />
            <ReactQuill
                style={{height:"600px", marginBottom:"50px"}}
                theme="snow"
                value={content.value}
                onChange={handleChange}
                placeholder={"내용을 입력해주세요."}
                modules={modules}
                formats={formats}
            />
        </div>
    );
};

export default MyComponent;