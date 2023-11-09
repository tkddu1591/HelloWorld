import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useState} from "react";
import CodingTestHeader from "./CodingtestHeader";
import {EditorView, basicSetup} from "codemirror"
import CodeMirror from '@uiw/react-codemirror';
// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
} from "reactstrap";
import {Link} from "react-router-dom";

function CodingtestResult() {
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

    const code = 'public class Main {\n' +
        '\t\n' +
        '\tpublic static void main(String[] args) throws IOException {\n' +
        '\t\t\n' +
        '\t\tBufferedReader br = new BufferedReader(new InputStreamReader(System.in));\n' +
        '\t\tBufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));\n' +
        '\n' +
        '\t\tint num = Integer.parseInt(br.readLine());\n' +
        '\t\tint arr[]= new int [num];\n' +
        '\t\tStringTokenizer st = new StringTokenizer(br.readLine());\n' +
        '\t\tint b =Integer.parseInt(br.readLine());\n' +
        '\t\tint num2 =0;\n' +
        '\t\t\n' +
        '\t\tfor(int i=0;i<num ; i++) {\n' +
        '\t\t\tarr[i]=Integer.parseInt(st.nextToken());\n' +
        '\t\t\tif(arr[i]==b) {\n' +
        '\t\t\t\tnum2+=1;\n' +
        '\t\t\t}\n' +
        '\t\t}\n' +
        '\n' +
        '\t\tSystem.out.println(num2);\n' +
        '\n' +
        '\t\t\n' +
        '\t\tbw.flush();\n' +
        '\t\tbr.close();\n' +
        '\t\tbw.close();\n' +
        '\t}\n' +
        '\n' +
        '}';
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];


    return <>

        <IndexNavbar/>
        <div className="wrapper">
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <script src="codemirror/CodeMirror.js"></script>
                <div style={{marginTop: '-40px'}}>
                    <Card style={{width: "80%", height: '100%', display: 'block', margin: '0 auto'}}>
                        <CardBody>
                            <CardTitle tag="h2" style={{marginTop: '-10px', borderBottom: '1px dashed #E6E6FA',fontSize:'40px'}}>
                                실패!
                            </CardTitle>
                            <CardTitle tag="h5" style={{marginTop: '-10px', borderBottom: '1px dashed #E6E6FA',fontSize:'20px'}}>
                                Compiler runtime error, info: "cpu_time": 0, "real_time": 2, "memory": 0, "signal": 10,
                                "exit_code": 0, "error": 0, "result": 5
                            </CardTitle>
                            <form>
                                <CodeMirror
                                    /*사용자가 입력한코드 db에 한번 저장하고 불러옴*/
                                    style={{
                                        width: '100%',
                                        border: '1px solid #E6E6FA',

                                    }}
                                    value={code}
                                    options={{
                                        theme: 'monokai',
                                        tabSize: 3,
                                        keyMap: 'sublime',
                                        mode: 'jsx',
                                    }}
                                    readOnly={true}
                                />
                                <div style={{display: 'inline-block', marginTop: '30px', width: '100%'}}>
                                <Link to="/codingtest/view">
                                    <button style={{
                                        float: 'right',
                                        width: '100px',
                                        backgroundColor: '#2CA8FF',
                                        color: 'white',
                                        border: '1px solid white'
                                    }}>
                                        문제화면으로
                                    </button>
                                </Link>
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