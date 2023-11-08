import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useEffect} from "react";
import {
    Button, Card, CardBody, CardHeader, CardLink, CardSubtitle, CardText, CardTitle, CarouselItem,
    Col,
    Container, Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink,
    Row, TabContent, TabPane
} from "reactstrap";
import Slider from "nouislider";
import CodingTestHeader from "./CodingtestHeader";



function CodingtestQna(){
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return<>

        <IndexNavbar/>
        <div className="wrapper">
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>


                            <Row style={{display:'flex',justifyContent:'center'}}>
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

                    <table class="table" style={{textAlign:'center'}}>
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

                        <Card style={{ width: "20rem" ,display:'flex',float:'right',top:'-800px',left:'400px'}}>
                            <CardBody>
                                <CardTitle tag="h4">사용자 ID 출력공간</CardTitle>
                                <CardSubtitle className="mb-2 text-muted">

                                </CardSubtitle>
                                <CardText>
                                    내용 1
                                </CardText>
                                <CardText>
                                    내용 2
                                </CardText>
                                <CardText>
                                    내용 3
                                </CardText>
                                <CardLink href="#pablo" onClick={e => e.preventDefault()}>
                                    질문하러 가기
                                </CardLink>
                                <CardLink href="#pablo" onClick={e => e.preventDefault()}>

                                </CardLink>
                            </CardBody>
                        </Card>




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