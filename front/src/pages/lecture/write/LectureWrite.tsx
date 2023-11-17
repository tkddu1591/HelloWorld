import {Col, Container, Row} from "reactstrap";
import '../scss/lecture/write/write.scss'
import SelectBox from "../../../components/Lecture/SelectBox";
import React, {useState} from "react";
import SearchBar from "../../community/List/SearchBar";

function LectureWrite() {


    const [tagSort, setTagSort] = useState(
        {
            placeholder:  '태그 선택',
            list:         [
                {value: 'all', label: '전체'},
                {value: 'apl', label: '지원완료'},
                {value: 'res', label: '서류통과'},
                {value: 'fnl', label: '최종합격'},
                {value: 'fld', label: '불합격'},
                {value: 'gvu', label: '중도 퇴사'},
                {value: 'chk', label: '검토중'},
            ],
            isSearchable: false,
            isMulti:      true,
        }
    );
    const [levelSort, SetlevelSort] = useState(
        {
            placeholder:  '레벨 선택',
            list:         [
                {value: '0', label: '입문'},
                {value: '1', label: '초급'},
                {value: '2', label: '중급'},
                {value: '3', label: '고급'},
            ],
            isSearchable: false,
            isMulti:      true,
        }
    );
    return <Container style={{marginTop: '100px'}}>
        <Row>
            <Col className={'lectureWrite'}>
                <h3>강의 등록</h3>
            </Col>

        </Row>
        <Row style={{marginTop:'20px'}}>
            <Col md={4}>

                <div className={'dataChange'}>
                    <SelectBox options={tagSort.list} isMulti={tagSort.isMulti}
                               placeholder={tagSort.placeholder} isSearchable={tagSort.isSearchable}></SelectBox>
                </div>
            </Col>
            <Col md={4}>

                <div className={'dataChange'}>
                    <SelectBox options={levelSort.list}
                               placeholder={levelSort.placeholder} isSearchable={levelSort.isSearchable}></SelectBox>
                </div>
            </Col>
            <Col md={4}>

                <div className={'dataChange'}>
                    <SelectBox options={levelSort.list}
                               placeholder={levelSort.placeholder} isSearchable={levelSort.isSearchable}></SelectBox>
                </div>
            </Col>
        </Row>
    </Container>
}

export default LectureWrite;