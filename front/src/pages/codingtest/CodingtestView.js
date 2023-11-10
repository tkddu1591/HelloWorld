import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useState} from "react";
import CodingTestHeader from "./Header/CodingtestHeader";
import {EditorView, basicSetup} from "codemirror"
import CodeMirror from '@uiw/react-codemirror';
// reactstrap components
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from "reactstrap";
import {Link} from "react-router-dom";
import CodeAside from "./aside/CodeAside";
import SelectBox from "../../components/Lecture/SelectBox";
import SearchBar from "../../components/Lecture/SearchBar";
import Select from "react-select";
import CodeProblem from "./view/CodeProblem";

function CodingtestView(){

    new EditorView({
        doc: 'console.log("hello")',
        extensions: [
            basicSetup
        ],
        parent: document.querySelector("#editor")
    })

    const code = 'public class Main {\n' +
        '\n' +
        '\tpublic static void main(String[] args) {\n' +
        '\t\t\n' +
        '\t\tSystem.out.println("Hello World!");\n' +
        '\t}\n' +
        '\t\n' +
        '}';

    const [sorts, setSorts] = useState([
        {
            title: 'level',
            placeholder: '레벨을 선택해주세요',
            list: [
                {value: 0, label: '전체'},
                {value: 1, label: '입문'},
                {value: 2, label: '초급'},
                {value: 3, label: '중급'},
                {value: 4, label: '고급'},
            ],
            isSearchable: false,
            isMulti: false,
        }
        ]);
    const options = [
        { value: 'Java', label: 'Java' },
        { value: 'Python3', label: 'Python3' },
        { value: 'Javascript', label: 'Javascript' },
    ];

    const [listLoading, setListLoading] = useState({loading:'scroll', view:'card'});

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selected) => {
        setSelectedOption(selected);
    };

    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <CodeAside></CodeAside>
                <div style={{marginTop:'-40px'}}>
                    <CodeProblem></CodeProblem>
                    <div style={{height:'20px'}}></div>
                    <Card style={{  width: "60%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px',borderBottom:'1px dashed #E6E6FA'}}>코드를 입력해주세요</CardTitle>
                            <form>
                                <SelectBox options={options} isMulti={sorts.isMulti}
                                        placeholder="언어를 선택해주세요" isSearchable={sorts.isSearchable}/>
                                <div style={{height:'20px'}}></div>
                            <CodeMirror
                                style={{
                                    width : '100%',
                                    border:'1px solid #E6E6FA'
                                }}
                                value={code}
                                options={{
                                    theme: 'dark',
                                    tabSize:3,
                                    keyMap: 'sublime',
                                    mode: 'jsx',
                                }}
                            />
                            <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                <Link to="/codingtest/result" style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white' ,textAlign:'center'}}>
                                        제출
                                </Link>
                                <Link to="/codingtest/qna/write" style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                    질문하러가기
                                </Link>
                                <Link to="/codingtest/qna/best" style={{float:'right',width:'150px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                    다른사람의 정답보기
                                </Link>

                            </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div style={{height:'50px'}}></div>
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
export default CodingtestView;