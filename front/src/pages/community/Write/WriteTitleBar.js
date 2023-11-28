import React, {useState} from "react";
import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import Select from "react-select";
import "../../../css/community/write.scss";

function WriteTitleBar(props) {
    return (<>
        <div className="search_area"
             style={{marginTop: "10px", minWidth: "160px"}}>
            <Row style={{marginBottom:"10px"}}>
                <Col lg="2">
                    <Select
                        onChange={props.setSelectedSearch}
                        options={props.searchSelect}
                        defaultValue={props.searchSelect[0]}
                        isMulti={false}
                        maxMenuHeight={"300px"}
                        readonly={true}
                        isSearchable={false}
                    />
                </Col>
                <Col lg="10">
                    <Input
                        style={{border: '1px solid black', height:"38px", maxWidth: '100%', display: 'inline-block', borderRadius: "5px", borderColor: "hsl(0, 0%, 70%)"}}
                        defaultValue=""
                        onChange={event => props.setTitle({value: event.target.value})}
                        /*value={props.title.value}*/
                        placeholder="제목을 입력해 주세요."
                        type="text"
                    ></Input>
                </Col>
            </Row>
            <Row>
                <Col lg="12">
                    <div style={{marginBottom: "15px"}}>
                        <Select
                            value={props.selectedOption}
                            onChange={props.setSelectedOption}
                            options={props.options}
                            placeholder={"태그를 검색해 주세요."}
                            isMulti={true}
                            maxMenuHeight={"300px"}
                            length={3}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </>)
}


export default WriteTitleBar;