import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef} from "react";
import Slider from "nouislider";
import CodingTestHeader from "./CodingtestHeader";

// reactstrap components
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink, Breadcrumb, BreadcrumbItem, Input
} from "reactstrap";
import UserPopup from "../../components/Lecture/UserPopup";
import CodeAside from "./aside/CodeAside";
import {Link} from "react-router-dom";











function CodingtestQnaView(){




    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <script src="codemirror/CodeMirror.js"></script>
                <div style={{marginTop:'-40px'}}>
                    <CodeAside></CodeAside>
                    <Card style={{ width: "60%",height:'auto',display:'block',margin:'0 auto' }}>
                        <CardBody>
                            <form>
                               <CardText>
                                   제목
                               </CardText>
                                <Input placeholder="제목을 입력해주세요" type="text" name="title"></Input>
                              
                                <div style={{height:'20px'}}></div>

                                <CardText>
                                    문제번호
                                </CardText>
                                <Input placeholder="문제번호를 입력하세요" type="number"></Input>
                                <div style={{height:'20px'}}></div>
                                <CardText>
                                    내용
                                </CardText>
                                <div style={{height:'auto'}}>
                                    <textarea className="form-control" name="content" rows="50" cols="50" placeholder="내용을 입력하세요." style={{border:'1px solid lightgray'}}></textarea>
                                </div>

                                <Link to="/codingtest/qna">
                                <div style={{display:'inline-block',marginTop:'30px',width:'100%'}}>
                                    <a style={{float:'right',width:'100px',backgroundColor:'#2CA8FF',color:'white',border:'1px solid white',textAlign:'center'}}>
                                        등록
                                    </a>
                                </div>
                                </Link>
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