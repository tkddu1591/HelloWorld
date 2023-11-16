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
import CodingTestHeader from "./Header/CodingtestHeader";
import Select from "react-select";
import CardListCode from "./aside/CardListCode";
import CodeAside from "./aside/CodeAside";
import SelectBox from "../../components/Lecture/SelectBox";
import PaginationSample from "./Pagination/PaginationSample";
import CodeListTable from "./table/CodeListTable";





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
                            <CodeListTable></CodeListTable>

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