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
import Select from "react-select";





function CodingtestList(){
    const [iconPills, setIconPills] = React.useState("1");
    const [pills, setPills] = React.useState("1");
    return<>

        <IndexNavbar/>
        <div className="wrapper" >
            {/*<IndexHeader />*/}
            <div className="main">
                <CodingTestHeader></CodingTestHeader>

                    <Container >
                            <Row style={{display:'flex',justifyContent:'center'}}>
                                <Col lg="8" sm="6" style={{marginTop:'-30px',display:'inline-block'}}>
                                    <Form>
                                    <FormGroup>{/*
                                        <select className="bootstrap-select" aria-label="Default select example" style={{textAlign:'left'}}>
                                            <option value={0}>단계를 선택해주세요</option>
                                            <option value={1}>1단계</option>
                                            <option value={2}>2단계</option>
                                            <option value={3}>3단계</option>
                                            <option value={4}>4단계</option>
                                        </select>*/}

                                        <Input style={{display:'flex',justifyContent:'center'}}
                                            defaultValue=""
                                            placeholder="문제제목을 입력하세요"
                                            type="text"
                                        >

                                        </Input>

                                            <FormGroup style={{marginTop:'5px'}}>

                                                <Select
                                                >

                                                </Select>
                                            </FormGroup>

                                    </FormGroup>
                                    </Form>
                                </Col>

                            </Row>

                    <table class="table" style={{textAlign:'center'}}>
                        <thead>
                            <th scope="col" style={{width:'80px'}} >난이도</th>
                            <th scope="col">제목</th>
                            <th scope="col" style={{width:'150px'}}>완료한 사람</th>
                            <th scope="col" style={{width:'150px'}}>정답률</th>
                        </thead>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
                            </td>
                        </tr>
                        <tr>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>1</a>
                            </td>
                            <td scope="row">
                                <a href={'/codingtest/view'} style={{color:'black'}}>A+B를 구하세요!</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>4,0000명</a>
                            </td>
                            <td scope="row">
                                <a href={'#'} style={{color:'black'}}>67.5%</a>
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
                        <Card style={{ width: "20rem" ,display:'flex',float:'right',top:'-600px',left:'400px'}}>
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
export default CodingtestList;