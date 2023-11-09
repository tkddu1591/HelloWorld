import CodeMirror from "@uiw/react-codemirror";
import React from "react";

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


function CodeMirrorSample(){

    return<>
        <CodeMirror
            style={{
                width : '100%',
                border:'1px solid #E6E6FA',

            }}
            value={code}
            readOnly={true}
            options={{
                theme: 'dark',
                tabSize:3,
                keyMap: 'sublime',
                mode: 'text/x-java',

            }}

        />

    </>

}

export default CodeMirrorSample;