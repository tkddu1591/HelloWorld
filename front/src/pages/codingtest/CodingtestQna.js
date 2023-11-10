import IndexNavbar from "../../components/Navbars/IndexNavbar";
import React, {createRef, useEffect, useState} from "react";
import {
    Col,
    Container, Form,
    FormGroup,
    Input,
    Row
} from "reactstrap";
import CodingTestHeader from "./Header/CodingtestHeader";
import './CodingtestAside.css'
import CodeAside from "./aside/CodeAside";
import PaginationSample from "./Pagination/PaginationSample";
import CodeQnaTable from "./table/CodeQnaTable";



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
                    <CodeQnaTable></CodeQnaTable>
                    <PaginationSample></PaginationSample>
                    <div style={{height:'20px'}}></div>
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