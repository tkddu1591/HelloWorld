import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useEffect, useState} from "react";
import {
    Card, CardBody, CardText, CardTitle,
    Col,
    Container, Form,
    FormGroup,
    Input,
    Pagination, PaginationItem, PaginationLink,
    Row
} from "reactstrap";
import CodingTestHeader from "./CodingtestHeader";
import Select from "react-select";
import CardListCode from "./aside/CardListCode";
import CodeAside from "./aside/CodeAside";
import SelectBox from "../../components/Lecture/SelectBox";





function CodingtestList(){
    const [sorts, setSorts] = useState([
        {
            title: 'level',
            placeholder: '레벨을 선택해주세요',
            list: [
                {value: 0, label: '전체'},
                {value: 1, label: '입문'},
                {value: 2, label: '초급'},
                {value: 3, label: '중급'},
                {value: 4, label: '고급'},
            ],
            isSearchable: false,
            isMulti: false,
        }
    ]);
    const options = [
        { value: '1', label: '1단계' },
        { value: '2', label: '2단계' },
        { value: '3', label: '3단계' },
        { value: '4', label: '4단계' },
        { value: '5', label: '5단계' },
    ];

    const [listLoading, setListLoading] = useState({loading:'scroll', view:'card'});

    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selected) => {
        setSelectedOption(selected);
    };
    return<>

        <IndexNavbar/>
        <div className="wrapper" >
            <div className="main">
                <CodingTestHeader></CodingTestHeader>
                <CodeAside></CodeAside>

                <Container >
                            <Row style={{display:'flex',justifyContent:'center'}}>
                                <Col lg="8" sm="6" style={{marginTop:'-30px',display:'inline-block'}}>
                                    <Form>
                                    <FormGroup>
                                        <Input style={{display:'flex',justifyContent:'center'}}
                                            defaultValue=""
                                            placeholder="문제제목을 입력하세요"
                                            type="text"
                                        >

                                        </Input>
                                            <FormGroup style={{marginTop:'5px'}}>
                                                <SelectBox options={options} isMulti={sorts.isMulti}
                                                           placeholder="단계를 선택해주세요" isSearchable={sorts.isSearchable}/>
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
        <div style={{height:'20px'}}></div>
    </>
}
export default CodingtestList;