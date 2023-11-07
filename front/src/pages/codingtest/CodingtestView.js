import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef} from "react";
import Slider from "nouislider";
import CodingTestHeader from "./CodingtestHeader";
import * as PropTypes from "prop-types";
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import CodeMirror from '@uiw/react-codemirror';
// reactstrap components
import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink
} from "reactstrap";



const code = 'const a = 0;';

function BasicElements() {
    const [leftFocus, setLeftFocus] = React.useState(false);
    const [rightFocus, setRightFocus] = React.useState(false);
    let pageHeader = createRef();
    React.useEffect(() => {
        if (
            !document
                .getElementById("sliderRegular")
                .classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderRegular"), {
                start: [50],
                connect: [true, false],
                step: 0.5,
                range: {min: 0, max: 100},
            });
        }
        if (
            !document.getElementById("sliderDouble").classList.contains("noUi-target")
        ) {
            Slider.create(document.getElementById("sliderDouble"), {
                start: [20, 80],
                connect: [false, true, false],
                step: 1,
                range: {min: 0, max: 100},
            });
        }
    });
}





function CodingtestView(){
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    let myTheme = EditorView.theme({
        "&": {
            color: "white",
            backgroundColor: "#034"
        },
        ".cm-content": {
            caretColor: "#0e9"
        },
        "&.cm-focused .cm-cursor": {
            borderLeftColor: "#0e9"
        },
        "&.cm-focused .cm-selectionBackground, ::selection": {
            backgroundColor: "#074"
        },
        ".cm-gutters": {
            backgroundColor: "#045",
            color: "#ddd",
            border: "none"
        }
    }, {dark: true})



    new EditorView({
        doc: 'console.log("hello")',
        extensions: [
            basicSetup
        ],
        parent: document.querySelector("#editor")
    })

    const code = 'const a = 0;';

    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <script src="./CodeMirror.js"></script>
                <div style={{marginTop:'-40px'}}>
                    <Card style={{ width: "80%",height:'auto',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4">다음문제를 풀어봐라(문제제목)</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
                                <table class="table">
                                    <thead>
                                        <th>시간제한</th>
                                        <th>메모리 제한</th>
                                        <th>제출</th>
                                        <th>정답인원수</th>
                                        <th>정답비율</th>
                                    </thead>
                                    <tr>
                                        <td>1초</td>
                                        <td>128MB</td>
                                        <td>45687</td>
                                        <td>1</td>
                                        <td>0.1%</td>
                                    </tr>
                                </table>
                            </CardSubtitle>
                            <CardText>
                                <div>
                                    <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                                        <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>문제</div>
                                    </div>
                                    <div style={{marginTop:'15px',marginLeft:'20px'}}>
                                        두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
                                    </div>
                                </div>

                                <div style={{height:'20px'}}></div>

                                <div>
                                    <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                                        <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>입력</div>
                                    </div>
                                    <div style={{marginTop:'15px',marginLeft:'20px'}}>
                                        첫째 줄에 A와 B가 주어진다. (0 ~ A,B ~ 10)
                                    </div>
                                </div>

                                <div style={{height:'20px'}}></div>

                                <div>
                                    <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                                        <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>출력</div>
                                    </div>
                                    <div style={{marginTop:'15px',marginLeft:'20px'}}>
                                        첫째 줄에 A+B를 출력한다.
                                    </div>
                                </div>

                                <div style={{height:'20px'}}></div>

                                <div style={{display:'inline-block',width:'45%'}}>
                                    <div style={{borderBottom:'1px dashed #E6E6FA',width:'100%',display:'inline-block'}}>
                                        <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'100px'}}>
                                            예제 입력 1
                                        </div>
                                    </div>
                                    <div>
                                        <pre style={{marginTop:'15px',marginLeft:'20px', border:'none',width:'80%'}}>
                                            1 2
                                        </pre>
                                    </div>
                                </div>
                                <div style={{display:'inline-block',marginLeft:'30px',width:'45%' }}>
                                    <div style={{borderBottom:'1px dashed #E6E6FA',width:'100%',display:'inline-block'}}>
                                        <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'100px'}}>
                                            예제 출력 1
                                        </div>
                                    </div>
                                    <div>
                                        <pre style={{marginTop:'15px',marginLeft:'20px', border:'none',width:'80%'}}>
                                            3
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <div style={{borderBottom:'1px dashed #E6E6FA '}}>
                                        <div style={{display:'inline-block', borderBottom:'1px solid blue', width:'50px'}}>힌트</div>
                                    </div>
                                    <div style={{marginTop:'15px',marginLeft:'20px'}}>
                                        두수를 더해보세요~
                                    </div>
                                </div>
                            </CardText>

                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>

                    <Card style={{  width: "80%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px',borderBottom:'1px dashed #E6E6FA'}}>코드를 입력해주세요</CardTitle>
                            <form>
                            <CodeMirror
                                style={{
                                    width : '100%',
                                    border:'1px solid #E6E6FA'
                                }}
                                value={code}
                                options={{
                                    theme: 'myTheme',
                                    tabSize:3,
                                    keyMap: 'sublime',
                                    mode: 'jsx',
                                }}
                            />
                            <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>

                                    <button style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white'}}>
                                        제출
                                    </button>

                            </div>
                            </form>
                        </CardBody>
                    </Card>
                    <div style={{height:'50px'}}></div>




                    {/*<div>문제내용
                        <div> 문제 descript<br/>
                            <p>descript 내용</p>
                        </div>
                        <div>문제 input<br/>
                            <p>input 내용</p>
                        </div>
                        <div>문제 output<br/>
                            <p>output 내용</p>
                        </div>
                        <div>sample input<br/>
                            <textarea required> sample input 내용</textarea>
                        </div>
                        <div>sample output<br/>
                            <textarea required> sample output 내용</textarea>
                        </div>
                        <div>hint<br/>
                            <textarea required> hint 내용</textarea>
                        </div>
                    </div>*/}

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