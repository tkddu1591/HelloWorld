import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import SelectBox from "../../components/SelectBox";
import React from "react";

function CompanySearch({sorts}) {
    return <>
        <Container>
            <Row>
                <Col lg="12">
                    <FormGroup style={{border: '1px solid #ccc', borderRadius: '5px', width: '10'}}>
                        <Input
                            style={{border: 'none', maxWidth: '95%', display: 'inline-block'}}
                            defaultValue=""
                            placeholder="수강하고 싶은 코스 검색"
                            type="text"
                        ></Input>
                        <div className="now-ui-icons ui-1_zoom-bold"
                             style={{width: '5%', height: '22px', marginTop: '10px', cursor: "pointer"}}></div>
                    </FormGroup>
                </Col>
            </Row>
            {sorts && sorts.length !== 0 &&
                <Row>
                    {sorts.map((sort, index) => (
                        <Col lg={sorts.length === 1 ? '12' : '6'} sm={sorts.length === 1 ? '' : '6'} style={{marginTop:'5px'}}
                             key={sort.placeholder}>
                            <div className="App">
                                <SelectBox options={sort.list} isMulti={sort.isMulti}
                                           placeholder={sort.placeholder} isSearchable={sort.isSearchable} ></SelectBox>
                            </div>
                        </Col>
                    ))}
                </Row>}
        </Container></>
}
export default CompanySearch