import {Col, Container, FormGroup, Input, Row} from "reactstrap";
import SelectBox from "./SelectBox";
import React from "react";
import {changeDTO} from "../../store/changeDTO";

interface ListItem {
    /*검색기능 있는지 없는지*/
    isSearch?: boolean
    searchTitle?: string,
    setTitle?: ((value: string) => void),
    /*검색 버튼*/
    setSearch?: (value: boolean) => void,
    setSorts?: (value: any) => void,
    search?: boolean,
    sorts?: ({
        title: string;
        placeholder: string;
        isSearchable?: boolean;
        list: { value: number | string; label: string; }[];
        isMulti?: boolean
    })[],
}

//sort는 0, 1, 2개의 값만 입력이 가능함.
function SearchBar({
                       sorts, searchTitle = '수강하고 싶은 코스 검색', isSearch = true, setTitle, setSearch, search, setSorts
                   }: ListItem) {

    return <Container>
        {isSearch && <Row>
            <Col lg="12">
                <FormGroup style={{border: '1px solid #ccc', borderRadius: '5px', width: '10'}}>
                    <Input
                        style={{border: 'none', maxWidth: '95%', display: 'inline-block'}}
                        defaultValue=""
                        placeholder={searchTitle}
                        type="text"
                        onChange={(e) => {
                            (setTitle && setTitle(e.target.value))
                        }}
                        onKeyDown={(e) => {
                            e.key === 'Enter' && setSearch && setSearch(!search)
                        }}
                    ></Input>
                    <div className="now-ui-icons ui-1_zoom-bold"
                         onClick={(e) => {
                             setSearch && setSearch(!search)
                         }}
                         style={{width: '5%', height: '22px', marginTop: '10px', cursor: "pointer"}}></div>
                </FormGroup>
            </Col>
        </Row>}
        {sorts && sorts.length !== 0 &&
            <Row>
                {sorts.map((sort, index) => {
                    const setSort = (value) => {
                        changeDTO(setSorts, sort.title, value).then(r => console.log('sort 변경')).catch(err => console.log(err));
                    }
                    return <Col lg={sorts.length === 1 ? '12' : '6'} sm={sorts.length === 1 ? '' : '6'}
                                style={{marginTop: '5px'}}
                                key={sort.placeholder}>
                        <div className="App">
                            <SelectBox options={sort.list} isMulti={sort.isMulti} setSelect={setSort}
                                       placeholder={sort.placeholder} isSearchable={sort.isSearchable}></SelectBox>
                        </div>
                    </Col>
                })}
            </Row>}
    </Container>
}

export default SearchBar