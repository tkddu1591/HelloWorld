import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useRef, useState} from "react";
import CodingTestHeader from "./Header/CodingtestHeader";

// reactstrap components
import {
    Card,
    CardBody,
    CardText,
    Input
} from "reactstrap";
import CodeAside from "./aside/CodeAside";
import {Link} from "react-router-dom";
import MyComponent from "../community/EditorComponent";
import ReactQuill from "react-quill";
import CodeMirrorSample from "./codemirror/CodeMirrorSample";
import CodeMirror from "@uiw/react-codemirror";

function CodingtestQnaView(){
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

    const code = 'public class Main {\n' +
        '\n' +
        '\tpublic static void main(String[] args) {\n' +
        '\t\t\n' +
        '\t\tSystem.out.println("Hello World!");\n' +
        '\t}\n' +
        '\t\n' +
        '}';


    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <div style={{marginTop:'-40px'}}>
                    <CodeAside></CodeAside>
                    <Card style={{ width: "60%",height:'auto',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <form>
                               <CardText style={{marginBottom:'5px'}}>
                                   제목
                               </CardText>
                                <Input placeholder="제목을 입력해주세요" type="text" name="title"></Input>
                                <div style={{height:'20px'}}></div>
                                <CardText style={{marginBottom:'5px'}}>
                                    문제번호
                                </CardText>
                                <Input placeholder="문제번호를 입력하세요" type="number"></Input>
                                <div style={{height:'20px'}}></div>
                                <CardText style={{marginBottom:'5px'}}>
                                    내용
                                </CardText>
                                <ReactQuill
                                    style={{ height: "300px", margin: "4px", marginBottom:"100px"}}
                                    ref={quillRef}
                                    theme="snow"
                                    value={value}
                                    modules={modules}
                                    formats={formats}
                                    onChange={setValue}
                                    placeholder="내용을 입력하세요."
                                />
                                <div style={{height:'10px'}}></div>
                                <CardText style={{marginBottom:'5px'}}>
                                    코드
                                </CardText>
                                <CodeMirror
                                    style={{
                                        width : '100%',
                                        border:'1px solid #E6E6FA',

                                    }}
                                    value={code}
                                    options={{
                                        theme: 'dark',
                                        tabSize:3,
                                        keyMap: 'sublime',
                                        mode: 'text/x-java',
                                    }}
                                />
                                <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <Link to={'#'} style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                        등록
                                    </Link>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>
                </div>

                {/*<Carousel />*/}
                {/*<Pagination />*/}
                {/* <Images />

          <Navbars />
          <Tabs />
          <SignUp />
          <Notifications />
          <Typography />
          <Javascript />

          <NucleoIcons />
          <CompleteExamples />

          <Examples />
          <Download />*/}
            </div>

        </div></>
}
export default CodingtestQnaView;