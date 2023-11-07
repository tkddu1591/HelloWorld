import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef} from "react";
import Slider from "nouislider";
import CodingTestHeader from "./CodingtestHeader";
import * as PropTypes from "prop-types";
import {EditorView, basicSetup} from "codemirror"
import {javascript} from "@codemirror/lang-javascript"
import CodeMirror from '@uiw/react-codemirror';
// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink, Breadcrumb, BreadcrumbItem
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





function CodingtestQnaView(){
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

    const code = 'import java.io.BufferedReader;\n' +
        'import java.io.IOException;\n' +
        'import java.io.InputStreamReader;\n' +
        'import java.util.StringTokenizer;\n' +
        '\n' +
        'public class Main {\n' +
        '\n' +
        '\tpublic static void main(String[] args) throws IOException {\n' +
        '\t\tBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n' +
        '\t\tStringTokenizer st = new StringTokenizer(br.readLine());\n' +
        '\t\t\n' +
        '\t\tint n = Integer.parseInt(st.nextToken());\n' +
        '\t\tint m = Integer.parseInt(st.nextToken());\n' +
        '\t\tint a ,b;\n' +
        '\t\tint arr[] = new int [n];\n' +
        '\t\t\n' +
        '\t\tfor (int i=0; i<n ; i++) {\n' +
        '\t\t\tarr[i]=i+1;\n' +
        '\t\t}\n' +
        '\t\t\n' +
        '\t\tfor (int i=0; i<m ; i++) {\n' +
        '\t\t\tStringTokenizer st2 = new StringTokenizer(br.readLine());\n' +
        '\t\t\ta=Integer.parseInt(st2.nextToken())-1;\n' +
        '\t\t\tb=Integer.parseInt(st2.nextToken())-1;\n' +
        '\t\t\tfor (int j=a; j<=b; j++,b--) {\n' +
        '\t\t\t\tint temp = arr[j];\n' +
        '\t\t\t\tarr[j]=arr[b];\n' +
        '\t\t\t\tarr[b]=temp;\n' +
        '\t\t\t}\n' +
        '\t\t\t}\n' +
        '\t\t\n' +
        '\t\t\n' +
        '\t\tfor (int i=0; i<n;i++) {\n' +
        '\t\t\tSystem.out.print(arr[i]+" ");\n' +
        '\t\t}\n' +
        '\t\t\n' +
        '\t}\n' +
        '\t\n' +
        '}';

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

                            <CardTitle tag="h4">이거 어케풀어용??</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" style={{}}>
                                hams9876 2023.11.07
                            </CardSubtitle>
                            <CardText>
                                <div>
                                    ㅠㅠㅠㅠ 넘어려워용 ㅠㅠㅠㅠㅠ
                                </div>
                                <Breadcrumb>
                                    <BreadcrumbItem active >
                                        <CodeMirror
                                            style={{
                                                width : '100%',
                                                height:'auto',
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
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </CardText>

                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>

                    <Card style={{  width: "80%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px',borderBottom:'1px dashed #E6E6FA'}}>니가알아서 풀어라 어디다대고 질문질이냐(답변제목)</CardTitle>
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
                                    <a style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                       수정
                                    </a>
                            </div>
                            </form>
                        </CardBody>
                    </Card>

                    <Card style={{  width: "80%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px',borderBottom:'1px dashed #E6E6FA'}}>답변작성</CardTitle>
                            <form>
                                
                               <textarea cols="30" rows="20" style={{width:'100%',height:'auto'}}> 정신나갈것같아</textarea>
                                <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <a style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                        수정
                                    </a>
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
export default CodingtestQnaView;