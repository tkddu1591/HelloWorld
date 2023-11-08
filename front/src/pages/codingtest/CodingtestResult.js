import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useState} from "react";
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
    CardLink
} from "reactstrap";
import Select from "react-select";


const code = 'const a = 0;';




function CodingtestResult() {
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

    const code = '';
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    const [selectedOption, setSelectedOption] = useState(null);


    return <>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <script src="./CodeMirror.js"></script>
                <div style={{marginTop: '-40px'}}>
                    <Card style={{width: "80%", height: '100%', display: 'block', margin: '0 auto'}}>
                        <CardBody>
                            <CardTitle tag="h2" style={{marginTop: '-10px', borderBottom: '1px dashed #E6E6FA'}}>
                                실패!
                            </CardTitle>
                            <CardTitle tag="h5" style={{marginTop: '-10px', borderBottom: '1px dashed #E6E6FA'}}>
                                Compiler runtime error, info: "cpu_time": 0, "real_time": 2, "memory": 0, "signal": 10,
                                "exit_code": 0, "error": 0, "result": 5
                            </CardTitle>
                            <form>
                                <CodeMirror
                                    /*사용자가 입력한코드 db에 한번 저장하고 불러옴*/
                                    style={{
                                        width: '100%',
                                        border: '1px solid #E6E6FA',
                                        readonly:'readonly'

                                    }}
                                    value={code}
                                    options={{
                                        theme: 'monokai',
                                        tabSize: 3,
                                        keyMap: 'sublime',
                                        readonly:'readonly',
                                        mode: 'jsx',
                                    }}
                                />
                                <div style={{display: 'inline-block', marginTop: '30px', width: '100%'}}>

                                    <button style={{
                                        float: 'right',
                                        width: '100px',
                                        backgroundColor: '#2CA8FF',
                                        color: 'white',
                                        border: '1px solid white'
                                    }}>
                                        문제화면으로
                                    </button>
                                </div>
                            </form>
                            {/*<Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={options}

                            />*/}
                        </CardBody>
                    </Card>
                    <div style={{height: '50px'}}></div>


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

        </div>
    </>
}

export default CodingtestResult;