import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useEffect, useState} from "react";
import {
    Col,
    Container, Form,
    FormGroup,
    Input,
    Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink,
    Row, TabContent, TabPane
} from "reactstrap";
import CodingTestHeader from "./CodingtestHeader";
import './CodingtestAside.css'
import CodeAside from "./aside/CodeAside";



function CodingtestQna(){

    return<>

        <IndexNavbar/>
        <div className="wrapper" style={{position:'relative'}}>
            {/*<IndexHeader />*/}
            <div className="main" >
                <CodingTestHeader></CodingTestHeader>

                <CodeAside></CodeAside>

                <Container>

               <Row style={{display:'in',justifyContent:'center'}}>
                    <Col lg="8" sm="6" style={{marginTop:'-30px',display:'inline-block'}}>
                        <Form>
                            <FormGroup>
                                <Input style={{display:'flex',justifyContent:'center'}}
                                       defaultValue=""
                                       placeholder="질문을 검색해봐라"
                                       type="text"
                                >
                                </Input>
                            </FormGroup>
                        </Form>
                    </Col>

                </Row>

                    <table class="table" style={{textAlign:'center',width:'100%'}}>
                    <thead>

                    <th scope="col" style={{width:'80px'}} ></th>
                    <th scope="col" style={{width:'80px'}} >난이도</th>
                    <th scope="col">제목</th>
                    <th scope="col" style={{width:'150px'}}>조회수</th>
                    <th scope="col" style={{width:'150px'}}>추천수</th>
                    </thead>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <a href={'#'} style={{color:'black',justifyContent:'center',display:'flex'}}>
                                <div style={{border:'1px solid #E6E6FA',width:'100%',textAlign:'center',height:'50px'}}>답변<br/>
                                    0
                                </div>
                            </a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>1</a>
                        </td>
                        <td scope="row">
                            <a href={'/codingtest/qna/view'} style={{color:'black'}}>이거 푸는방법좀요...</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>3</a>
                        </td>
                        <td scope="row">
                            <a href={'#'} style={{color:'black'}}>4</a>
                        </td>
                    </tr>



                </table>



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



                </Container>



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
export default CodingtestQna;