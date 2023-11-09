import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useState} from "react";
import CodingTestHeader from "./CodingtestHeader";
import {EditorView, basicSetup} from "codemirror"
import CodeMirror from '@uiw/react-codemirror';
// reactstrap components
import {
    Card,
    CardTitle,
    CardSubtitle,
    Pagination, PaginationItem, PaginationLink
} from "reactstrap";
import CodeAside from "./aside/CodeAside";
import CodeMirrorSample from "./codemirror/CodeMirrorSample";






function CodingtestBestCode() {


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

    const [selectedOption, setSelectedOption] = useState(null);


    return <>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <CodeAside></CodeAside>
                <script src="codemirror/CodeMirror.js"></script>

                <div style={{width: "60%", height: '100%', display: 'block', margin: '0 auto'}}>
                    <CardTitle tag="h4" style={{marginTop:'-30px',fontSize:'40px'}}>
                        다른 사용자가 푼 풀이내용
                    </CardTitle>
                </div>
                <div style={{height:'20px'}}></div>
                <Card style={{width: "60%", height: '100%', display: 'block', margin: '0 auto'}}>
                    <div style={{height:'10px'}}></div>
                    <CardSubtitle style={{marginTop:'10px',marginBottom:'10px'}}>
                        lomong7807@gmail.com님의 풀이
                    </CardSubtitle>
                    <CodeMirrorSample></CodeMirrorSample>
                </Card>
                <div style={{height:'20px'}}></div>
                <Card style={{width: "60%", height: '100%', display: 'block', margin: '0 auto'}}>
                    <div style={{height:'10px'}}></div>
                    <CardSubtitle style={{marginTop:'10px',marginBottom:'10px'}}>
                        shipdesignup@gmail.com님의 풀이
                    </CardSubtitle>
                    <CodeMirrorSample></CodeMirrorSample>
                </Card>
                <div style={{height:'20px'}}></div>
                <Card style={{width: "60%", height: '100%', display: 'block', margin: '0 auto'}}>
                    <div style={{height:'10px'}}></div>
                    <CardSubtitle style={{marginTop:'10px',marginBottom:'10px'}}>
                        ainu90@gmail.com님의 풀이
                    </CardSubtitle>
                    <CodeMirrorSample></CodeMirrorSample>
                </Card>
                <div style={{height:'20px'}}></div>
                <Pagination style={{display:'flex',justifyContent:'center',textAlign:'center', width:'100%'}}>
                    <PaginationItem>
                        <PaginationLink
                            aria-label="Previous"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                        <span aria-hidden={true}>
                          <i
                              aria-hidden={true}
                              className="fa fa-angle-double-left"
                          ></i>
                        </span>
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                        <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink
                            aria-label="Next"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                <span aria-hidden={true}>
                  <i
                      aria-hidden={true}
                      className="fa fa-angle-double-right"
                  ></i>
                </span>
                        </PaginationLink>
                    </PaginationItem>
                </Pagination>
                <div style={{height:'20px'}}></div>

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

export default CodingtestBestCode;