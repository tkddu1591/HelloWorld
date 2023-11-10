import React, { useState } from 'react';
import './../../../css/community/list.css';
import { Col, Container, FormGroup, Input, Row } from 'reactstrap';
import Select from 'react-select';

function SearchBar(props) {
    return (<>
        <div className='search_area'
             style={{ marginTop: '100px', minWidth: '160px' }}>
            <Row>
                <Col lg='2'>
                    <Select
                        onChange={props.setSelectedSearch}
                        options={props.searchSelect}
                        defaultValue={props.searchSelect[0]}
                        isMulti={false}
                        maxMenuHeight={'300px'}
                        readonly={true}
                        isSearchable={false}
                    />
                </Col>
                <Col lg='10'>
                    <FormGroup style={{ border: '1px solid #ccc', borderRadius: '5px', width: '10' }}>
                        <Input
                            style={{ border: 'none', maxWidth: '95%', display: 'inline-block' }}
                            defaultValue=''
                            placeholder='검색어를 입력해 주세요.'
                            type='text'
                        ></Input>
                        <div className='now-ui-icons ui-1_zoom-bold'
                             style={{ width: '5%', height: '22px', marginTop: '10px', cursor: 'pointer' }}></div>
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                    <div style={{ marginBottom: '15px' }}>
                        <Select
                            value={props.selectedOption}
                            onChange={props.setSelectedOption}
                            options={props.options}
                            placeholder={'태그를 선택해 주세요.'}
                            isMulti={true}
                            maxMenuHeight={'300px'}
                            length={3}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    </>);
}

export default SearchBar;