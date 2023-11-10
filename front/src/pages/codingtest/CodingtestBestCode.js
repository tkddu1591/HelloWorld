import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useState} from "react";
import CodingTestHeader from "./Header/CodingtestHeader";
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
import PaginationSample from "./Pagination/PaginationSample";






function CodingtestBestCode() {

    return <>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <CodeAside></CodeAside>

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
                <PaginationSample></PaginationSample>
                <div style={{height:'20px'}}></div>
            </div>

        </div>
    </>
}

export default CodingtestBestCode;