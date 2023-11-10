import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useState} from "react";
import CodingTestHeader from "./Header/CodingtestHeader";

// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Breadcrumb, BreadcrumbItem
} from "reactstrap";
import UserPopup from "../../components/Lecture/UserPopup";
import CodeAside from "./aside/CodeAside";
import CodeArticleSuggest from "./suggest/CodeArticleSuggest";
import CodeSuggest from "./suggest/CodeSuggest";
import CodeMirror from "@uiw/react-codemirror";
import ReactCodeMirror from "@uiw/react-codemirror";
import SelectBox from "../../components/Lecture/SelectBox";
import CodeMirrorSample from "./codemirror/CodeMirrorSample";
import {Link} from "react-router-dom";











function CodingtestQnaView(){
    let [popup, setPopup] =useState('');

    let popupSetting= {
        top: 20,
        marginLeft: 0,
        marginRight: 50
    }


    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <CodeAside></CodeAside>
                <div style={{marginTop:'-40px'}}>
                    <Card style={{ width: "60%",height:'auto',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4"  style={{marginTop:'-10px'}}>이거 어케풀어용??</CardTitle>
                            <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                                <p style={{fontSize: '12px', color: 'gray', margin: 0}}
                                ><span style={{cursor: "pointer"}} onClick={() => {
                                    setPopup('user')
                                }}>사용자</span> / 2023-10-10 18:26</p>
                            </div>
                            <CardText style={{marginTop:'10px'}}>
                                <div>
                                    ㅠㅠㅠㅠ 넘어려워용 ㅠㅠㅠㅠㅠ(질문글 내용)
                                </div>
                                <Breadcrumb>
                                    <CodeMirrorSample></CodeMirrorSample>
                                </Breadcrumb>
                            </CardText>
                        <CodeArticleSuggest></CodeArticleSuggest>
                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>

                    <Card style={{  width: "60%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px'}}>
                            <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                    {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                                    <p style={{fontSize: '12px', color: 'gray', margin: 0}}
                                    ><span style={{cursor: "pointer"}} onClick={() => {
                                        setPopup('user')
                                    }}>사용자</span> / 2023-10-10 18:26</p>
                                </div>
                            </div>
                            </CardTitle>
                            <form style={{marginTop:'10px'}}>
                                <Breadcrumb>
                                    <BreadcrumbItem active >
                                        ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ 나도잘 몰라용~
                                    </BreadcrumbItem>
                                </Breadcrumb>

                            <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                <Link to={'#'} style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>수정</Link>
                            </div>
                            </form>

                        <CodeSuggest></CodeSuggest>
                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>
                    <Card style={{  width: "60%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px'}}>
                                <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                    <div style={{borderBottom:'1px dashed #E6E6FA'}}>
                                        {popup === 'user' && <UserPopup popupSetting={popupSetting}></UserPopup>}
                                        <p style={{fontSize: '12px', color: 'gray', margin: 0}}
                                        ><span style={{cursor: "pointer"}} onClick={() => {
                                            setPopup('user')
                                        }}>사용자</span> / 2023-10-10 18:26</p>
                                    </div>
                                </div>
                            </CardTitle>
                            <form style={{marginTop:'10px'}}>
                                <Breadcrumb>
                                    <BreadcrumbItem active >

                                        ¯\_(ツ)_/¯¯\_(ツ)_/¯알아서 해봐용~
                                    </BreadcrumbItem>
                                </Breadcrumb>

                                <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <Link to={'#'} style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>수정</Link>
                                </div>
                            </form>
                            <CodeSuggest></CodeSuggest>
                        </CardBody>
                    </Card>
                    <div style={{height:'20px'}}></div>
                    <Card style={{  width: "60%",height:'100%',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <CardTitle tag="h4" style={{marginTop:'-10px',borderBottom:'1px dashed #E6E6FA'}}>답변작성</CardTitle>
                            <form>
                               <textarea cols="30" rows="20" style={{width:'100%',height:'auto',border:'1px solid #E6E6FA'}} placeholder=" 답변으로 등록할 내용을 입력하세요"></textarea>
                                <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <Link to={'#'} style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>등록</Link>    
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
export default CodingtestQnaView;